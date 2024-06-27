// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import module
const comments = require('./comments');

// Set up the server
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});