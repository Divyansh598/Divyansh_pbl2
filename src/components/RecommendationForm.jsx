import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2 } from 'lucide-react'
import { getMoodLabel } from '../utils/helpers'

const CATEGORIES = ['Movie', 'Series', 'Anime', 'Book', 'Surprise Me']

const RecommendationForm = ({ onSubmit, selectedMood }) => {
    const [category, setCategory] = useState('Surprise Me')
    const [favorites, setFavorites] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ category, favorites })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-lg mx-auto"
        >
            {/* Mood badge */}
            <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-violet-900/50 border border-violet-700/50 text-violet-300 text-sm font-medium">
                    Feeling {getMoodLabel(selectedMood)}
                </span>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
                <h3 className="text-xl font-bold mb-5 text-white">What are you in the mood for?</h3>

                {/* Category selector */}
                <div className="mb-5">
                    <label className="block text-gray-400 text-sm mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${category === cat
                                        ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Favorites input */}
                <div className="mb-6">
                    <label className="block text-gray-400 text-sm mb-2">
                        Anything you already love?{' '}
                        <span className="text-gray-600">(optional)</span>
                    </label>
                    <input
                        type="text"
                        value={favorites}
                        onChange={(e) => setFavorites(e.target.value)}
                        placeholder="e.g. Inception, Attack on Titan, Harry Potter..."
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                    <p className="text-gray-600 text-xs mt-1.5">
                        The AI uses this to calibrate your taste.
                    </p>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-violet-500/30 transition-all duration-200"
                >
                    <Wand2 size={18} />
                    Get My Recommendations
                </motion.button>
            </form>
        </motion.div>
    )
}

export default RecommendationForm
