import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import MoodSelector from '../components/MoodSelector'
import RecommendationForm from '../components/RecommendationForm'
import LoadingScreen from '../components/LoadingScreen'
import ResultsGrid from '../components/ResultsGrid'
import { getRecommendations } from '../services/gemini'
import { useWatchlist } from '../hooks/useWatchlist'
import { getMoodLabel } from '../utils/helpers'

// Step flow: mood → form → loading → results
const STEPS = { MOOD: 'mood', FORM: 'form', LOADING: 'loading', RESULTS: 'results' }

const pageVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.25, ease: 'easeIn' } },
}

const Home = () => {
    const [step, setStep] = useState(STEPS.MOOD)
    const [mood, setMood] = useState('')
    const [results, setResults] = useState([])
    const { add, has, watchlist } = useWatchlist()

    // Build a Set of saved item keys for O(1) lookup
    const savedIds = new Set(watchlist.map((w) => `${w.title}-${w.year}`))

    const handleMoodSelect = (selectedMood) => {
        setMood(selectedMood)
        setStep(STEPS.FORM)
    }

    const handleFormSubmit = useCallback(async ({ category, favorites }) => {
        setStep(STEPS.LOADING)
        try {
            const recs = await getRecommendations({ mood, category, favorites })
            setResults(recs)
            setStep(STEPS.RESULTS)
        } catch {
            toast.error('Something went wrong. Showing demo picks instead.')
            setStep(STEPS.RESULTS)
        }
    }, [mood])

    const handleReset = () => {
        setStep(STEPS.MOOD)
        setMood('')
        setResults([])
    }

    const handleSave = (item) => {
        const key = `${item.title}-${item.year}`
        if (savedIds.has(key)) {
            toast('Already in your watchlist!', { icon: '📌' })
            return
        }
        add(item)
        toast.success(`Saved "${item.title}" to watchlist!`)
    }

    return (
        <div className="min-h-[70vh] flex flex-col">
            <AnimatePresence mode="wait">

                {/* ── Step 1: Mood Selection ── */}
                {step === STEPS.MOOD && (
                    <motion.div key="mood" {...pageVariants} className="flex-1">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-700/30 text-violet-400 text-sm mb-4">
                                <Sparkles size={14} />
                                AI-Powered Recommendations
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                                How are you feeling<br />
                                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                                    right now?
                                </span>
                            </h1>
                            <p className="text-gray-500 text-lg max-w-md mx-auto">
                                Pick your mood and we'll find the perfect movie, anime, series, or book for you.
                            </p>
                        </div>
                        <MoodSelector onSelect={handleMoodSelect} />
                    </motion.div>
                )}

                {/* ── Step 2: Preference Form ── */}
                {step === STEPS.FORM && (
                    <motion.div key="form" {...pageVariants} className="flex-1">
                        <button
                            onClick={() => setStep(STEPS.MOOD)}
                            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm mb-6 transition-colors"
                        >
                            <ArrowLeft size={15} />
                            Change mood
                        </button>
                        <RecommendationForm onSubmit={handleFormSubmit} selectedMood={mood} />
                    </motion.div>
                )}

                {/* ── Step 3: Loading ── */}
                {step === STEPS.LOADING && (
                    <motion.div key="loading" {...pageVariants} className="flex-1">
                        <LoadingScreen />
                    </motion.div>
                )}

                {/* ── Step 4: Results ── */}
                {step === STEPS.RESULTS && (
                    <motion.div key="results" {...pageVariants} className="flex-1">
                        <ResultsGrid
                            results={results}
                            onReset={handleReset}
                            onSave={handleSave}
                            savedIds={savedIds}
                        />
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    )
}

export default Home
