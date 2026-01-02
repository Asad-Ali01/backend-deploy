const express = require('express')
const dotenv = require('dotenv');
const app = express()
const port = 3000
dotenv.config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/testing',(req,res) => {
  res.json({myobj:"Here is testing answer"});
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
