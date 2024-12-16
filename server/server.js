const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3
const cors = require('cors');

const PORT = 8080;

// Create and connect to SQLite database
const db = new sqlite3.Database('Experience.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());


app.get('/projects-data', (req, res) => {
  const query = 'SELECT * FROM Projects';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.json(rows);
    }
  });
});

app.get('/experience-data', (req, res) => {
  const query = 'SELECT * FROM Experience';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.json(rows);
    }
  });
});


app.get('/experience-data-python', (req,res)=>{
  const query = 'SELECT * FROM Experience WHERE '
})

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
