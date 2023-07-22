const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8008;

// Middleware to parse JSON data
app.use(express.json());

// GET route for "/numbers"
app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'No URLs provided in query parameters' });
  }

  try {
    const mergedNumbers = await getMergedUniqueIntegers(urls);

    return res.json({ numbers: mergedNumbers });
  }