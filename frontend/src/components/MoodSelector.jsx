import React from 'react'
import { motion } from 'framer-motion'
import {
    Smile, Frown, Compass, Coffee, Heart,
    Zap, Ghost, Clock
} from 'lucide-react'

const MOODS = [
    { id: 'happy', label: 'Happy', icon: Smile, color: 'from-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/30' },
    { id: 'sad', label: 'Melancholic', icon: Frown, color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/30' },
    { id: 'adventurous', label: 'Adventurous', icon: Compass, color: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/30' },
    { id: 'chill', label: 'Chill', icon: Coffee, color: 'from-teal-400 to-cyan-600', shadow: 'shadow-teal-500/30' },
    { id: 'romantic', label: 'Romantic', icon: Heart, color: 'from-pink-500 to-rose-600', shadow: 'shadow-pink-500/30' },
    { id: 'excited', label: 'Excited', icon: Zap, color: 'from-orange-400 to-red-500', shadow: 'shadow-orange-500/30' },
    { id: 'scared', label: 'Thrilled', icon: Ghost, color: 'from-gray-600 to-slate-800', shadow: 'shadow-gray-500/30' },
    { id: 'nostalgic', label: 'Nostalgic', icon: Clock, color: 'from-violet-500 to-purple-700', shadow: 'shadow-violet-500/30' },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
}

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
}

const MoodSelector = ({ onSelect }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
            {MOODS.map((mood) => {
                const Icon = mood.icon
                return (
                    <motion.button
                        key={mood.id}
                        variants={item}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onSelect(mood.id)}
                        className={`
              relative overflow-hidden p-5 rounded-2xl
              bg-gradient-to-br ${mood.color}
              shadow-lg ${mood.shadow}
              text-white flex flex-col items-center justify-center gap-2
              cursor-pointer border border-white/10
              transition-shadow duration-200 hover:shadow-xl
            `}
                    >
                        {/* Subtle gloss overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                        <Icon size={28} strokeWidth={2} />
                        <span className="text-sm font-semibold tracking-wide">{mood.label}</span>
                    </motion.button>
                )
            })}
        </motion.div>
    )
}

export default MoodSelector
