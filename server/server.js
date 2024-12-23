const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const PORT = 8080;
const connection = require('./db')



const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

// Route to fetch all projects data
app.get('/projects-data', async (req, res) => {
  connection.query('SELECT * FROM `Projects`', (err, results)=>{
    if (err){
      return res.status(500).send('Error fetching data from database')
    }
    res.json(results)
  })
});

app.get('/experience-data', async (req, res) => {
  connection.query('SELECT * FROM `Experience`', (err, results)=>{
    if (err){
      return res.status(500).send('Error fetching data from database')
    }
    res.json(results)
  })
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
