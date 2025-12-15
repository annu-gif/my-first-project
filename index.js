// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from my Dockerized Node.js app on EC2!');
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
;

