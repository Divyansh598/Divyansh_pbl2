# Moodwatch — AI Recommender 🎬✨

> A premium, AI-driven recommendation engine for movies, anime, series, and books, precisely tailored to your emotional state.

Moodwatch uses the **Google Gemini 1.5 Flash** model to understand the nuance of your mood and suggest the perfect media match. It bypasses the "scrolling fatigue" of modern streaming by providing quality, hand-picked recommendations instantly.

---

## 🛠️ The Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React 19 + Vite | Ultra-fast, modern web framework. |
| **Intelligence** | Google Gemini AI | Advanced LLM for semantic recommendations. |
| **Styling** | Tailwind CSS v4 | High-performance, modern utility CSS. |
| **Animations** | Framer Motion | Fluid transitions and micro-interactions. |
| **Icons** | Lucide React | Minimalist, consistent icon set. |
| **Notifications** | React Hot Toast | Elegant, non-intrusive feedback. |
| **Deployment** | GitHub Actions | Automatic build and CI/CD pipeline. |

---

## 🏗️ Systematic Project Structure

The project is organized following modern best practices for React development:

- **📂 `.github/workflows/`**: Continuous Deployment pipeline for GitHub Pages.
- **📂 `src/components/`**: Modular, reusable UI components.
    - `MoodSelector`: Interactive 8-mood emotional selection grid.
    - `RecommendationForm`: Intelligent preference filtering system.
    - `ResultCard`: High-end display cards with type-based color logic.
    - `LoadingScreen`: Branded, animated AI consultation interface.
- **📂 `src/pages/`**: Centralized routing views (Home, Watchlist, Login, Admin).
- **📂 `src/services/`**: External API integrations (Gemini AI).
- **📂 `src/hooks/`**: Custom logic persistence and state management.
- **📂 `src/utils/`**: Shared helpers and visual configuration tokens.

---

## 🚀 Deployment Instructions

This repository is **pre-configured** for direct opening on GitHub Pages. To activate:

1.  **Clone/Upload** these files to the root of your `Divyansh_pbl2` repository.
2.  Go to **Settings** → **Pages** on your GitHub repo.
3.  Set **Build and deployment > Source** to **"GitHub Actions"**.
4.  Push your code — the build starts automatically!

---

## 🔑 Getting Started (Local)

1.  **Install:** `npm install`
2.  **Config:** Copy `.env.example` to `.env` and add your **Gemini API Key**.
3.  **Run:** `npm run dev`

---

*Curated with ☕ and intelligence.*
