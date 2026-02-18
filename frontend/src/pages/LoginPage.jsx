import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Sparkles, Eye, EyeOff, User, Shield, ArrowRight, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

const TABS = [
    { id: 'user', label: 'User Login', icon: User, hint: 'user@moodwatch.app / watch123' },
    { id: 'admin', label: 'Admin Login', icon: Shield, hint: 'admin@moodwatch.app / admin123' },
]

const LoginPage = () => {
    const [tab, setTab] = useState('user')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleTabChange = (id) => {
        setTab(id)
        setEmail('')
        setPassword('')
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            const user = login(email, password)
            toast.success(`Welcome back, ${user.name}! 👋`)
            navigate(user.role === 'admin' ? '/admin' : from, { replace: true })
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const currentTab = TABS.find((t) => t.id === tab)

    return (
        <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 relative overflow-hidden">

            {/* Background orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 shadow-2xl shadow-violet-500/40 mb-4">
                        <Sparkles size={26} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Mood<span className="text-violet-400">watch</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Sign in to get personalized picks</p>
                </div>

                {/* Card */}
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                    {/* Tab switcher */}
                    <div className="flex bg-white/5 rounded-2xl p-1 mb-7 gap-1">
                        {TABS.map((t) => {
                            const Icon = t.icon
                            return (
                                <button
                                    key={t.id}
                                    onClick={() => handleTabChange(t.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${tab === t.id
                                            ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/30'
                                            : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <Icon size={15} />
                                    {t.label}
                                </button>
                            )
                        })}
                    </div>

                    {/* Demo hint */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex items-center gap-2 bg-violet-900/20 border border-violet-700/30 rounded-xl px-3 py-2.5 mb-5">
                                <span className="text-violet-400 text-xs">🔑</span>
                                <p className="text-violet-300 text-xs font-mono">{currentTab.hint}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-400 text-sm mb-1.5">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-400 text-sm mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 pr-11 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass((p) => !p)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                >
                                    {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2 bg-red-900/20 border border-red-800/40 rounded-xl px-3 py-2.5 text-red-400 text-sm"
                                >
                                    <AlertCircle size={15} />
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: loading ? 1 : 1.02 }}
                            whileTap={{ scale: loading ? 1 : 0.98 }}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-violet-500/30 transition-all duration-200 mt-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={17} />
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>

                {/* Back link */}
                <p className="text-center text-gray-600 text-sm mt-5">
                    Just browsing?{' '}
                    <a href="/" className="text-violet-400 hover:text-violet-300 transition-colors">
                        Continue without signing in →
                    </a>
                </p>
            </motion.div>
        </div>
    )
}

export default LoginPage
