const express = require('express') 
const cors = require('cors')
const dotEnv = require('dotEnv') 

dotEnv.config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/user', (req, res) => {
    res.json({body: `Welcome ${Date.now()}`})
})

// if( process.env.API_PORT){

    app.listen( process.env.API_PORT, () => console.log(`POD Backend App is running on port ${process.env.API_PORT}`))
// }

// git remote add origin https://github.com/Mahesh-Dev23/podback24.git

// export default app