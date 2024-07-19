const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors'); 

const PORT = 8080

mongoose.connect('mongodb+srv://dbJobey:<password>@cluster0.gcyfftt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const app = express()
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors()); 

app.get('/data', async (req, res) => {
  const data = await db.all(`SELECT * FROM projectCard`)
	res.json(data)
})



app.listen(PORT)