import { useState, useEffect } from 'react'

const STORAGE_KEY = 'moodwatch_watchlist'

export function useWatchlist() {
    const [watchlist, setWatchlist] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    // Sync to localStorage whenever watchlist changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist))
    }, [watchlist])

    const add = (item) => {
        setWatchlist((prev) => {
            if (prev.find((w) => w.id === item.id && w.title === item.title)) return prev
            return [item, ...prev]
        })
    }

    const remove = (item) => {
        setWatchlist((prev) => prev.filter((w) => !(w.id === item.id && w.title === item.title)))
    }

    const clearAll = () => setWatchlist([])

    const has = (item) =>
        watchlist.some((w) => w.id === item.id && w.title === item.title)

    return { watchlist, add, remove, clearAll, has }
}
