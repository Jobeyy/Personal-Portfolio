const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors'); 
const username = encodeURIComponent("dbJobey")
const password = encodeURIComponent("MCJJODRocks7!7")

const PORT = 8080

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.gcyfftt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

const app = express()
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors()); 

app.get('/data', async (req, res) => {
  const data = await db.all(`SELECT * FROM projectCard`)
	res.json(data)
})

app.get('/', (req, res) =>{
  res.send("Hello World")
})



app.listen(PORT)