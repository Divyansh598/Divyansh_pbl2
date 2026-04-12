import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'VaadaTracker API', version: '1.0.0' });
});

/**
 * Claude AI Proxy
 * Routes AI requests through the server to keep API key secure
 * Set ANTHROPIC_API_KEY in .env to enable real AI responses
 */
app.post('/api/ai/:endpoint', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    return res.status(200).json({
      mock: true,
      message: 'AI is running in mock mode. Set ANTHROPIC_API_KEY in server/.env for real responses.',
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Claude API error:', error);
    res.status(500).json({ error: 'AI service unavailable' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n  🏛️  VaadaTracker API Server`);
  console.log(`  ─────────────────────────`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Health:  http://localhost:${PORT}/api/health`);
  console.log(`  AI Mode: ${process.env.ANTHROPIC_API_KEY ? '🟢 Live (Claude API)' : '🟡 Mock (no API key)'}`);
  console.log(`\n  "Ek vaada, ek zimmedaari."\n`);
});
