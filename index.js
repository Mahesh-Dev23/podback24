const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const app = express()


app.use(cors())
app.get('/',  (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
    res.json({body: `Welcome ${Date.now()}`})
})

connectDB()

app.listen(8000, console.log(`The app is running.`))