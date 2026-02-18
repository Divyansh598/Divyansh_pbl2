import React from 'react'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import ResultCard from './ResultCard'

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

const ResultsGrid = ({ results, onReset, onSave, savedIds }) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">Your Picks</h2>
                    <p className="text-gray-500 text-sm mt-0.5">{results.length} recommendations just for you</p>
                </div>
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm transition-all"
                >
                    <RotateCcw size={14} />
                    Start Over
                </button>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                {results.map((item, index) => (
                    <ResultCard
                        key={`${item.title}-${index}`}
                        item={item}
                        onSave={onSave}
                        isSaved={savedIds.has(`${item.title}-${item.year}`)}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default ResultsGrid
