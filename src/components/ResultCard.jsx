import React from 'react'
import { motion } from 'framer-motion'
import { Bookmark, BookmarkCheck, Calendar, Tag } from 'lucide-react'
import { getTypeConfig } from '../utils/helpers'

const ResultCard = ({ item, onSave, isSaved }) => {
    const config = getTypeConfig(item.type)

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col"
        >
            {/* Poster area — colored gradient with emoji */}
            <div className={`relative h-44 bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                    }}
                />
                <span className="text-6xl select-none drop-shadow-lg">{config.emoji}</span>

                {/* Save button */}
                <button
                    onClick={() => onSave(item)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm border transition-all duration-200 ${isSaved
                            ? 'bg-violet-600 border-violet-500 text-white'
                            : 'bg-black/40 border-white/20 text-white/70 opacity-0 group-hover:opacity-100 hover:bg-violet-600 hover:border-violet-500 hover:text-white'
                        }`}
                    title={isSaved ? 'Saved to watchlist' : 'Save to watchlist'}
                >
                    {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Type badge + year */}
                <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${config.badge}`}>
                        {item.type}
                    </span>
                    {item.year && (
                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                            <Calendar size={11} />
                            {item.year}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-1 leading-snug line-clamp-2">
                    {item.title}
                </h3>

                {/* Genre tags */}
                {item.genres?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {item.genres.slice(0, 3).map((g) => (
                            <span key={g} className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                                {g}
                            </span>
                        ))}
                    </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-3 flex-1">
                    {item.description}
                </p>

                {/* Why this matches mood */}
                {item.why && (
                    <div className="mt-auto pt-3 border-t border-white/5">
                        <p className="text-xs text-violet-400 italic leading-relaxed">
                            💡 {item.why}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ResultCard
