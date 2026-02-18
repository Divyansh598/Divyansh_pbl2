const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('Moodwatch API Server Running');
});

/**
 * FUTURE IMPLEMENTATION:
 * 
 * app.post('/api/recommendations', async (req, res) => {
 *   const { mood, preferences } = req.body;
 *   // Logic to contact Gemini API securely from the server
 *   res.json({ recommendations: [] });
 * });
 */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
