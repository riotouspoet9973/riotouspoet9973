// backend/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Routes
const saveScriptRoute = require('./routes/save-script');
app.use('/api/save-script', saveScriptRoute);

// Start server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
