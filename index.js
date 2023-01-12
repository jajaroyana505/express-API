
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')


// Route / URL / Enpoint
app.use(bodyParser.json())


app.get('/', (req, res) => {
   db.query("SELECT * FROM mahasis",(error, result) =>{
      // hasil data dari mysql
      response(200, result, "get all mahasiswa", res)
   })
})
app.get('/home', (req, res) => {
   console.log({urlParams: req.query})
   res.send('Home')
})
app.post('/login', (req, res) =>{
   console.log({requestFromOutSide: req.body.username})
   res.send('login berhasil')
})
app.put('/username', (req,res) =>{
   console.log({updateUsername: req.body})
   res.send('Update Username Berhasil')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})