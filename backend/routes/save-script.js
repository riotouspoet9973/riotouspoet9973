// backend/routes/save-script.js
const express = require('express');
const router = express.Router();

// Handle POST requests to save a script
router.post('/', (req, res) => {
  const { script } = req.body;
  
  // Here you can save the script to a file or database
  console.log('Script received:', script);
  
  res.json({ message: 'Script saved successfully!' });
});

module.exports = router;
