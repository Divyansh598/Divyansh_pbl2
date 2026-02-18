# Moodwatch: An AI-Driven Personalized Media Recommendation System 🎬✨

## Project Overview
**Moodwatch** is an advanced recommendation engine designed to provide highly personalized media suggestions (Movies, Series, Anime, and Books) based on the user's current emotional state and specific preferences. Leveraging state-of-the-art Generative AI, the platform addresses "choice paralysis" by providing curated, contextually relevant content suggestions.

## Key Features
- **Emotional Calibration**: Users select from 8 distinct emotional states to seed the recommendation engine.
- **AI-Powered Intelligence**: Integration with **Google Gemini 1.5 Flash** for deep semantic understanding of content and mood alignment.
- **Cross-Media Support**: A unified platform for discovering Films, Anime, TV Series, and Literature.
- **Personalised Watchlist**: Robust local persistence of user selections for future tracking.
- **Premium User Interface**: Modern glassmorphic design principles featuring fluid motion pathing and fully responsive layouts.
- **Administrative Interface**: Dedicated dashboard for monitoring system performance and media trends.

## Technical Implementation
- **Frontend Architecture**: Developed with **React 19**, **Vite**, and **Tailwind CSS v4** for optimal performance and developer experience.
- **Intelligence Layer**: Implemented via structured prompt engineering and direct integration with the Google Generative AI SDK.
- **State Management**: Utilizes React's Context API and custom hooks for scalable business logic.
- **Design System**: Built with **Framer Motion** for micro-interactions and **Lucide React** for consistent iconography.
- **CI/CD Pipeline**: Configured with **GitHub Actions** for automated build and deployment processes.

## System Organization
The project follows a systematic monorepo-style structure for clarity and scalability:
- 📂 **`frontend/`**: Contains the core application logic, components, and design assets.
- 📂 **`backend/`**: A structural placeholder for future expansion into microservices and database integration.
- 📂 **`ai/`**: Documentation of the prompt engineering strategies and AI integration logic.

---
*Developed as a demonstration of sophisticated AI integration within modern web ecosystems.*
