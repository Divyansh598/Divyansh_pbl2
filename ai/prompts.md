# Moodwatch AI - Prompt Engineering

This directory contains documentation on how the AI recommendation engine works.

## Current Prompt Logic (Gemini 1.5 Flash)

The main logic resides in `frontend/src/services/gemini.js`. It uses a carefully crafted prompt to ensure high-quality recommendations in JSON format.

### Key Prompt Elements:
- **Expert Persona:** Acts as a world-class curator.
- **Mood Context:** Feeling "${mood}" right now.
- **Category Filtering:** "Only recommend ${category} titles" or "Mix different types".
- **User Taste Calibration:** Avoids previously liked titles from `${favorites}`.
- **Structured Output:** Strictly raw JSON array with release years, genres, and specific mood-reasoning (`why`).

### Future Improvements:
- Fine-tune parameters like `temperature` for more creative vs focused picks.
- Use a vector database (RAG) to recommend even more obscure gems.
