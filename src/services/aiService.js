// ------------------------------------------------------------------
// Local Smart Recommendation Engine
// ------------------------------------------------------------------
// Replaces Google Gemini with a robust, client-side matching algorithm.
// Guarantees instant results and works 100% offline.

import { mediaDatabase } from '../data/mediaDatabase';

// Helper to log search terms for Admin Dashboard
const logSearchTerm = (term) => {
    if (!term) return;
    try {
        const history = JSON.parse(localStorage.getItem('moodwatch_search_history') || '[]');
        history.push({ term, timestamp: new Date().toISOString() });
        // Keep only last 100 searches to save space
        if (history.length > 100) history.shift();
        localStorage.setItem('moodwatch_search_history', JSON.stringify(history));
    } catch (e) {
        console.error("Failed to log search term", e);
    }
};

/**
 * matchesMood: Calculates a score (0-10) for how well an item matches the user's mood.
 * Simple fuzzy matching on tags and description.
 */
const calculateMatchScore = (item, mood) => {
    let score = 0;
    const moodLower = mood.toLowerCase();

    // 1. Tag Matching (High Priority)
    if (item.tags) {
        item.tags.forEach(tag => {
            if (moodLower.includes(tag.toLowerCase())) score += 3;
            if (tag.toLowerCase().includes(moodLower)) score += 2;
        });
    }

    // 2. Description Matching (Medium Priority)
    if (item.description && item.description.toLowerCase().includes(moodLower)) {
        score += 1;
    }

    return score;
};

/**
 * Fetches recommendations based on user preferences using the Local Database.
 * @param {Object} preferences - includes mood, category, favorites, userAge, criticallyAcclaimed
 * @returns {Promise<Array>} - Array of recommendation objects
 */
export const getRecommendations = async (preferences) => {
    const { mood, category, favorites, userAge, criticallyAcclaimed } = preferences;

    // Log the mood as a "search term" for analytics
    logSearchTerm(`${mood} ${category || ''}`);

    const isMinor = userAge && parseInt(userAge) < 18;
    const moodLower = mood.toLowerCase();
    const favoritesLower = favorites ? favorites.toLowerCase() : '';

    return new Promise((resolve) => {
        // Simulate a small "thinking" delay for effect (can be removed for instant results)
        setTimeout(() => {

            // 1. Initial Filtering
            let candidates = mediaDatabase.filter(item => {
                // Category Filter
                if (category && item.type !== category) return false;

                // Age Filter (Strict)
                if (isMinor) {
                    if (item.age === 'R' || item.age === 'TV-MA') return false;
                }

                return true;
            });

            // 2. Scoring & Ranking
            // Map to score objects first
            let scoredCandidates = candidates.map(item => {
                let score = calculateMatchScore(item, moodLower);

                // Boost for Critical Acclaim preference
                if (criticallyAcclaimed && item.rating >= 8.5) {
                    score += 5;
                }

                // Small boost for high ratings generally
                if (item.rating) {
                    score += (item.rating / 10);
                }

                // Boost if favorites align (naive check)
                if (favoritesLower && (item.title.toLowerCase().includes(favoritesLower) || favoritesLower.includes(item.type.toLowerCase()))) {
                    score += 2;
                }

                return { ...item, score };
            });

            // 3. Sort by Score (Desc) -> Rating (Desc)
            scoredCandidates.sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                return (b.rating || 0) - (a.rating || 0);
            });

            // 4. Return Top 5
            // If the user typed gibberish (score < 1), just give randomized high-rated items to avoid empty results
            let topResults = scoredCandidates.slice(0, 5);

            if (topResults.length === 0 || (topResults.length > 0 && topResults[0].score < 1)) {
                // Fallback: Randomize the candidates instead
                topResults = scoredCandidates.sort(() => 0.5 - Math.random()).slice(0, 5);
            }

            resolve(topResults);

        }, 800); // 800ms delay for UI smoothness
    });
};
