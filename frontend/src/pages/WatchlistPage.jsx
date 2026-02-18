import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, X, BookmarkX } from 'lucide-react'
import toast from 'react-hot-toast'
import { useWatchlist } from '../hooks/useWatchlist'
import { getTypeConfig } from '../utils/helpers'

const WatchlistPage = () => {
    const { watchlist, remove, clearAll } = useWatchlist()

    const handleRemove = (item) => {
        remove(item)
        toast(`Removed "${item.title}"`, { icon: '🗑️' })
    }

    const handleClearAll = () => {
        if (watchlist.length === 0) return
        clearAll()
        toast('Watchlist cleared!', { icon: '✨' })
    }

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Your Watchlist</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {watchlist.length === 0
                            ? 'Nothing saved yet'
                            : `${watchlist.length} title${watchlist.length !== 1 ? 's' : ''} saved`}
                    </p>
                </div>
                {watchlist.length > 0 && (
                    <button
                        onClick={handleClearAll}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-800/30 text-red-400 hover:bg-red-900/40 text-sm transition-all"
                    >
                        <Trash2 size={14} />
                        Clear All
                    </button>
                )}
            </div>

            {/* Empty state */}
            {watchlist.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-24 text-center"
                >
                    <div className="text-6xl mb-4">🎬</div>
                    <h2 className="text-xl font-semibold text-white mb-2">Nothing here yet</h2>
                    <p className="text-gray-500 max-w-sm">
                        Go back to the home page, get some recommendations, and hit the bookmark icon to save titles here.
                    </p>
                </motion.div>
            )}

            {/* Watchlist grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                    {watchlist.map((item) => {
                        const config = getTypeConfig(item.type)
                        return (
                            <motion.div
                                key={`${item.title}-${item.year}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                            >
                                {/* Colored top strip */}
                                <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />

                                <div className="p-4">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-white text-base leading-snug line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${config.badge}`}>
                                                    {item.type}
                                                </span>
                                                {item.year && (
                                                    <span className="text-gray-600 text-xs">{item.year}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-900/20 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0"
                                            title="Remove from watchlist"
                                        >
                                            <X size={15} />
                                        </button>
                                    </div>

                                    {item.genres?.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {item.genres.slice(0, 3).map((g) => (
                                                <span key={g} className="text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">
                                                    {g}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {item.description && (
                                        <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default WatchlistPage
