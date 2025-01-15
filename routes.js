// API Routes Handler
const express = require('express');
const router = express.Router();

// GET endpoint
router.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users', status: 'success' });
});

// POST endpoint
router.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'User created', name, email, status: 'success' });
});

// GET by ID
router.get('/api/users/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}`, status: 'success' });
});

// DELETE endpoint
router.delete('/api/users/:id', (req, res) => {
  res.json({ message: `User ${req.params.id} deleted`, status: 'success' });
});

module.exports = router;
