import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    LayoutDashboard, Users, Bookmark, TrendingUp,
    Film, BookOpen, Tv, Star, LogOut, Shield,
    Activity, Eye
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { useWatchlist } from '../hooks/useWatchlist'
import { getTypeConfig } from '../utils/helpers'

// ── Stat card ──────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex items-center gap-4"
    >
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
            <Icon size={22} className="text-white" />
        </div>
        <div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{label}</p>
            <p className="text-2xl font-bold text-white mt-0.5">{value}</p>
        </div>
    </motion.div>
)

// ── Category breakdown bar ──────────────────────────────────────
const CategoryBar = ({ type, count, total }) => {
    const config = getTypeConfig(type)
    const pct = total > 0 ? Math.round((count / total) * 100) : 0
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 w-16 flex-shrink-0">{type}</span>
            <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${config.gradient}`}
                />
            </div>
            <span className="text-xs text-gray-500 w-8 text-right">{count}</span>
        </div>
    )
}

// ── Main AdminPage ──────────────────────────────────────────────
const AdminPage = () => {
    const { currentUser, logout } = useAuth()
    const { watchlist } = useWatchlist()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        toast('Signed out successfully', { icon: '👋' })
        navigate('/login')
    }

    // Compute stats from watchlist
    const typeCount = { Movie: 0, Series: 0, Anime: 0, Book: 0 }
    watchlist.forEach((item) => {
        if (typeCount[item.type] !== undefined) typeCount[item.type]++
    })

    const topType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '—'

    const stats = [
        { icon: Bookmark, label: 'Saved Items', value: watchlist.length, color: 'bg-violet-600', delay: 0.05 },
        { icon: Film, label: 'Movies', value: typeCount.Movie, color: 'bg-purple-600', delay: 0.10 },
        { icon: Tv, label: 'Series', value: typeCount.Series, color: 'bg-blue-600', delay: 0.15 },
        { icon: Star, label: 'Anime', value: typeCount.Anime, color: 'bg-pink-600', delay: 0.20 },
        { icon: BookOpen, label: 'Books', value: typeCount.Book, color: 'bg-amber-600', delay: 0.25 },
        { icon: TrendingUp, label: 'Top Category', value: topType, color: 'bg-emerald-600', delay: 0.30 },
    ]

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Top bar */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                            <Shield size={15} className="text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-white">Admin Dashboard</span>
                            <span className="ml-2 text-xs bg-violet-900/50 border border-violet-700/50 text-violet-300 px-2 py-0.5 rounded-full">
                                {currentUser?.name}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            <Eye size={14} />
                            View App
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-900/20 border border-red-800/30 text-red-400 hover:bg-red-900/40 text-sm transition-all"
                        >
                            <LogOut size={14} />
                            Sign Out
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-10">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Overview
                    </h1>
                    <p className="text-gray-500 mt-1 text-sm">
                        Real-time stats from the current browser session's watchlist.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </div>

                {/* Two-column section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Category breakdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-white/[0.04] border border-white/10 rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Activity size={16} className="text-violet-400" />
                            <h2 className="font-semibold text-white">Category Breakdown</h2>
                        </div>
                        {watchlist.length === 0 ? (
                            <p className="text-gray-600 text-sm">No items saved yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {Object.entries(typeCount).map(([type, count]) => (
                                    <CategoryBar key={type} type={type} count={count} total={watchlist.length} />
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Recent saves */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/[0.04] border border-white/10 rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Bookmark size={16} className="text-violet-400" />
                            <h2 className="font-semibold text-white">Recent Saves</h2>
                        </div>
                        {watchlist.length === 0 ? (
                            <p className="text-gray-600 text-sm">No items saved yet.</p>
                        ) : (
                            <div className="space-y-2">
                                {watchlist.slice(0, 6).map((item, i) => {
                                    const config = getTypeConfig(item.type)
                                    return (
                                        <motion.div
                                            key={`${item.title}-${i}`}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.45 + i * 0.05 }}
                                            className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                                        >
                                            <span className="text-lg">{config.emoji}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-white font-medium truncate">{item.title}</p>
                                                <p className="text-xs text-gray-600">{item.type} · {item.year || 'N/A'}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                                {watchlist.length > 6 && (
                                    <p className="text-xs text-gray-600 pt-1">+{watchlist.length - 6} more</p>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Demo note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 bg-violet-900/10 border border-violet-800/20 rounded-2xl p-4 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        🛠️ This is a demo admin panel. In production, connect this to a real backend with a database and proper authentication.
                    </p>
                </motion.div>
            </main>
        </div>
    )
}

export default AdminPage
