const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.get('/',  (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
    res.json({body: `Welcome ${Date.now()}`})
})

app.listen(5000, console.log(`The app is running.`))