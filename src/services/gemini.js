// ---------------------------------------------------------------
// Gemini AI Service
// ---------------------------------------------------------------
// Connects to Google Gemini 1.5 Flash to generate personalized
// recommendations. Falls back to curated mock data if no API key
// is configured, so the app always works for demos.

import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

// ---------------------------------------------------------------
// Curated fallback data — covers all 4 categories
// ---------------------------------------------------------------
const MOCK_DATA = [
    {
        id: 1,
        title: 'Inception',
        type: 'Movie',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller', 'Mind-Bending'],
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        why: 'Perfect for an adventurous mood — it keeps your brain working overtime.',
    },
    {
        id: 2,
        title: 'Spirited Away',
        type: 'Anime',
        year: 2001,
        genres: ['Fantasy', 'Adventure', 'Coming-of-Age'],
        description: 'A young girl wanders into a world ruled by gods, witches, and spirits, and her parents are transformed into pigs.',
        why: 'A timeless, magical journey that feels warm and whimsical.',
    },
    {
        id: 3,
        title: 'The Midnight Library',
        type: 'Book',
        year: 2020,
        genres: ['Literary Fiction', 'Philosophy', 'Magical Realism'],
        description: 'Between life and death there is a library. Its books give Nora Seed the chance to undo her regrets.',
        why: 'A reflective, hopeful story about the lives we could have lived.',
    },
    {
        id: 4,
        title: 'Stranger Things',
        type: 'Series',
        year: 2016,
        genres: ['Sci-Fi', 'Horror', 'Nostalgia'],
        description: 'When a boy disappears, his friends, family, and local police must confront terrifying supernatural forces to get him back.',
        why: 'Nostalgic 80s vibes with a gripping mystery that pulls you in.',
    },
    {
        id: 5,
        title: 'Cowboy Bebop',
        type: 'Anime',
        year: 1998,
        genres: ['Space Western', 'Jazz', 'Action'],
        description: 'A ragtag crew of bounty hunters chase criminals across the solar system while wrestling with their own troubled pasts.',
        why: 'Cool, stylish, and melancholic — a masterpiece for any mood.',
    },
    {
        id: 6,
        title: 'The Shawshank Redemption',
        type: 'Movie',
        year: 1994,
        genres: ['Drama', 'Hope', 'Friendship'],
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        why: 'One of the most uplifting stories ever told — guaranteed to move you.',
    },
]

// ---------------------------------------------------------------
// Main recommendation function
// ---------------------------------------------------------------
export async function getRecommendations({ mood, category, favorites }) {
    // No API key? Use mock data
    if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
        console.info('ℹ️  Running in demo mode (no API key). Add VITE_GEMINI_API_KEY to .env to use real AI.')
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = category && category !== 'Surprise Me'
                    ? MOCK_DATA.filter((item) => item.type === category)
                    : MOCK_DATA
                resolve(filtered.length > 0 ? filtered : MOCK_DATA)
            }, 1200)
        })
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

        const categoryLine = category && category !== 'Surprise Me'
            ? `Only recommend ${category} titles.`
            : 'Mix different types: include a movie, a series, an anime, and a book.'

        const favoritesLine = favorites?.trim()
            ? `The user already loves: ${favorites}. Use this to calibrate taste and avoid recommending the same titles.`
            : ''

        const prompt = `
You are a world-class entertainment and literature curator with deep knowledge of movies, TV series, anime, and books.

The user is feeling "${mood}" right now.
${categoryLine}
${favoritesLine}

Recommend exactly 6 titles. Return ONLY a raw JSON array — no markdown, no explanation, no code fences.

Each object must have these exact fields:
- "id": number (1 to 6)
- "title": string (exact, well-known title)
- "type": one of "Movie", "Series", "Anime", "Book"
- "year": number (release year)
- "genres": array of 2-3 short genre strings (e.g. ["Thriller", "Sci-Fi"])
- "description": string (1-2 engaging sentences about the plot)
- "why": string (1 sentence explaining why this matches the "${mood}" mood specifically)

Make sure the recommendations are genuinely excellent, well-known, and diverse. Prioritize quality over obscurity.
`

        const result = await model.generateContent(prompt)
        const text = result.response.text()

        // Strip any accidental markdown code fences
        const clean = text
            .replace(/```json/gi, '')
            .replace(/```/g, '')
            .trim()

        const parsed = JSON.parse(clean)
        return Array.isArray(parsed) ? parsed : parsed.recommendations || MOCK_DATA
    } catch (err) {
        console.error('❌ Gemini request failed:', err)
        return MOCK_DATA
    }
}
