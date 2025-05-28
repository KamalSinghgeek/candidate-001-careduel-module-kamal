// mockServer.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock endpoint to simulate creating a payment intent
app.post('/create-payment-intent', (req, res) => {
  const { amount, currency } = req.body;

  if (!amount || !currency) {
    return res.status(400).json({ error: 'Missing amount or currency' });
  }

  console.log('Received mock payment intent request:', { amount, currency });

  // Simulate a payment intent response
  const fakeClientSecret = `pi_mock_${Math.random().toString(36).substring(2, 15)}_secret_mock`;

  res.status(200).json({
    clientSecret: fakeClientSecret,
    message: 'Mock payment intent created successfully',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Mock server running at http://localhost:${PORT}`);
});
