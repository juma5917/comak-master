const express = require('express');
const path = require('path');

const app = express();
const PORT = 5001;

// Serve HTML files from the html directory
app.use('/html', express.static(path.join(__dirname, '../client/html')));

// Serve CSS files from the css directory
app.use('/css', express.static(path.join(__dirname, '../client/css')));

// Serve JS files from the js directory
app.use('/js', express.static(path.join(__dirname, '../client/js')));

// Serve img assets from the img directory
app.use('/client_img', express.static(path.join(__dirname, '../client/img')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/home.html'));
});

app.get('/training', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/training.html'));
});

app.get('/audit', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/audit.html'));
});

app.get('/ppe', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/ppe.html'));
});

app.get('/fire', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/fire.html'));
});

app.get('/aid', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/aid.html'));
});

app.get('/documents', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/html/documents.html'));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});