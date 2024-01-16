const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  res.send('Hello World!')
})

app.get('/api/user', (req, res) => {
    res.json({body: `Welcome ${Date.now()}`})
})

app.listen(3000, console.log(`The app is running.`))