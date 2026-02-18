# Moodwatch 🎬✨

An AI-powered recommendation engine for movies, anime, series, and books. This repository is configured to **automatically deploy** and "directly open" as a live website.

## How to make the website "Directly Open" 🚀

I've set up an automatic **GitHub Action** that builds your code and hosts it on GitHub Pages. To activate it in this repository:

1.  **Push your current code** to GitHub (ensure the folders `src`, `public`, `.github` etc. are at the top level).
2.  Open your repository on GitHub.com.
3.  Click **Settings** (top bar).
4.  Click **Pages** (left sidebar).
5.  Under **Build and deployment > Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**.

Once you do this, GitHub will automatically build your app and host it at `divyansh598.github.io/Divyansh_pbl2/`.

---

## Getting Started (Local Development)

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set up API key:**
    Copy `.env.example` to `.env` and add your **Gemini API Key**.
3.  **Launch:**
    ```bash
    npm run dev
    ```

---

## Features
- **AI-Powered:** Uses Google Gemini 1.5 Flash.
- **8 Moods:** Tailored recommendations for any vibe.
- **Watchlist:** Save your favorites locally.
- **Premium Design:** Glassmorphism UI with smooth animations.

*Built with ✨ and Gemini AI.*
