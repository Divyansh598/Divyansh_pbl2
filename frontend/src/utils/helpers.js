// ---------------------------------------------------------------
// Type → visual style mappings
// ---------------------------------------------------------------

export const TYPE_CONFIG = {
    Movie: {
        gradient: 'from-violet-600 to-purple-800',
        badge: 'bg-violet-900/60 text-violet-200 border-violet-700',
        emoji: '🎬',
        label: 'Movie',
    },
    Series: {
        gradient: 'from-blue-600 to-indigo-800',
        badge: 'bg-blue-900/60 text-blue-200 border-blue-700',
        emoji: '📺',
        label: 'Series',
    },
    Anime: {
        gradient: 'from-pink-600 to-rose-800',
        badge: 'bg-pink-900/60 text-pink-200 border-pink-700',
        emoji: '✨',
        label: 'Anime',
    },
    Book: {
        gradient: 'from-amber-600 to-orange-800',
        badge: 'bg-amber-900/60 text-amber-200 border-amber-700',
        emoji: '📚',
        label: 'Book',
    },
}

export function getTypeConfig(type) {
    return TYPE_CONFIG[type] || TYPE_CONFIG.Movie
}

// ---------------------------------------------------------------
// Mood → display label
// ---------------------------------------------------------------
export const MOOD_LABELS = {
    happy: 'Happy',
    sad: 'Sad / Melancholic',
    adventurous: 'Adventurous',
    chill: 'Chill / Relaxed',
    romantic: 'Romantic',
    excited: 'Excited',
    scared: 'Scared / Thrilled',
    nostalgic: 'Nostalgic',
}

export function getMoodLabel(moodId) {
    return MOOD_LABELS[moodId] || moodId
}
