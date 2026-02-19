import React from 'react';
import { motion } from 'framer-motion';
import { BookmarkPlus } from 'lucide-react';

const ResultsDisplay = ({ results, onReset, onSave }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">We Found These For You!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((item, index) => (
                    <motion.div
                        key={item.id || index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 relative group hover:shadow-purple-500/20"
                    >
                        <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(item.title + ' ' + item.type)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gray-700 flex items-center justify-center relative overflow-hidden">
                                <span className="text-gray-500 text-lg font-medium group-hover:scale-110 transition-transform duration-500">{item.type} Cover</span>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                <span className="inline-block bg-purple-900/50 text-purple-200 text-xs px-2 py-1 rounded-full mb-2 border border-purple-700/50">
                                    {item.type}
                                </span>
                                <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                            </div>
                        </a>

                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent opening the link when clicking save
                                onSave(item);
                            }}
                            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-purple-600 text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                            title="Save to Watchlist"
                        >
                            <BookmarkPlus size={20} />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={onReset}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                    Start Over
                </button>
            </div>
        </div>
    );
};

export default ResultsDisplay;
