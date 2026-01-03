const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express()
const port = 3000
dotenv.config()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/testing',(req,res) => {
  res.json({data:"Testing is solved"});
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
