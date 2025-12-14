// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from my Dockerized Node.js app on EC2!');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

