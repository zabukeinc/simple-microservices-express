require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT

app.get('/', (req, res) => {
  res.send('Hello World! Material')
})

app.listen(port, () => {
  console.log(`Material app listening on port ${port}`)
})