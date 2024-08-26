require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
  res.send('TalhaKhan')
})
app.get('/login',(req,res)=>{
  res.send('<h1>please login</h1>')
})

app.get("/youtube",(req,res)=>{
  res.send('<h1>Chai aur Kiya</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log(process.env) // remove this after you've confirmed it is working
