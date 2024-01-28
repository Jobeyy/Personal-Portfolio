const express = require('express')
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors'); 

const PORT = 8080

let db;
(async () => {
	db = await open({
		filename: 'database.sqlite',
		driver: sqlite3.Database
	});
})();

const app = express()
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors()); 

app.get('/data', async (req, res) => {
  const data = await db.all(`SELECT * FROM projectCard`)
	res.json(data)
})



app.listen(PORT)