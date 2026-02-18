# Moodwatch — AI Recommender 🎬✨

> A premium, AI-driven recommendation engine for movies, anime, series, and books, precisely tailored to your emotional state.

Moodwatch uses the **Google Gemini 1.5 Flash** model to understand the nuance of your mood and suggest the perfect media match.

---

## 🚀 "Direct Opening" Activation (GitHub Pages)

I've configured this project with **HashRouter**, which is the most reliable way to host React apps on GitHub Pages. To activate it in your `Divyansh_pbl2` repo:

1.  **Delete the old clutter:** Ensure the `frontend`, `backend`, and `ai` folders are removed from your GitHub repository.
2.  **Upload the new files:** Drag everything from your local `ai-recommender` folder into the root of your repo.
    - **Crucially:** Ensure the `.github` folder is uploaded (this contains the build instructions).
3.  **Active GitHub Actions:** 
    - Go to **Settings** → **Pages**.
    - Change **Source** to **"GitHub Actions"**.

Your site will automatically build and open at:
👉 **`https://divyansh598.github.io/Divyansh_pbl2/`**

---

## 🛠️ Tech Stack & Components
- **Core:** React 19 + Vite + Tailwind CSS v4.
- **AI:** Google Gemini API 1.5 Flash.
- **Motion:** Framer Motion for premium, fluid animations.
- **Persistence:** Local storage for your watchlist.
- **Authentication:** Demo Login (User & Admin) with protected routes.

---

## 🏗️ Systematic Structure
- **📂 `.github/`**: Automatic Deployment (The "Magic" folder).
- **📂 `src/components/`**: Modularized UI (Cards, Form, Selectors).
- **📂 `src/pages/`**: Home, Watchlist, Login, and Admin Dashboard.
- **📂 `src/services/`**: AI Engine logic.
- **📂 `src/hooks/`**: Custom data hooks.

Built with ✨ and Gemini AI.
