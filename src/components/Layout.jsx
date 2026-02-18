import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Bookmark, LogIn, LogOut, Shield } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

const Layout = () => {
    const { currentUser, logout, isAdmin } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        toast('Signed out. See you soon! 👋', { icon: '✨' })
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Mood<span className="text-violet-400">watch</span>
                        </span>
                    </NavLink>

                    {/* Nav */}
                    <nav className="flex items-center gap-2">
                        <NavLink
                            to="/watchlist"
                            className={({ isActive }) =>
                                `flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            <Bookmark size={15} />
                            <span className="hidden sm:inline">Watchlist</span>
                        </NavLink>

                        {isAdmin && (
                            <NavLink
                                to="/admin"
                                className={({ isActive }) =>
                                    `flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                <Shield size={15} />
                                <span className="hidden sm:inline">Admin</span>
                            </NavLink>
                        )}

                        {currentUser ? (
                            <div className="flex items-center gap-2 ml-1">
                                {/* Avatar */}
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs font-bold shadow-md">
                                    {currentUser.name?.[0]?.toUpperCase()}
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-full text-gray-500 hover:text-white hover:bg-white/5 text-sm transition-all"
                                    title="Sign out"
                                >
                                    <LogOut size={15} />
                                    <span className="hidden sm:inline">Sign out</span>
                                </button>
                            </div>
                        ) : (
                            <NavLink
                                to="/login"
                                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 transition-all ml-1"
                            >
                                <LogIn size={15} />
                                Sign In
                            </NavLink>
                        )}
                    </nav>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-6 text-center text-gray-600 text-sm">
                <p>
                    Built with{' '}
                    <span className="text-violet-400">Google Gemini AI</span> · React · Framer Motion
                </p>
            </footer>
        </div>
    )
}

export default Layout
