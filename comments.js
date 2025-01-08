// Create web server
// Create API
// Create routes
// Create comments

// Required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create web server
const app = express();

// Set up body parser
app.use(bodyParser.json());

// Create API
const comments = [];

// Create routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.sendStatus(200);
});

// Create comments
fs.readFile('comments.json', 'utf8', (err, data) => {
  if (err) return;
  comments.push(...JSON.parse(data));
});

// Listen on port 3000
app.listen(3000);