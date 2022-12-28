const express = require('express')
require('dotenv').config()
const LocalPort = 3001
const DatabaseConnection = require("./config/db")
const productsRoutes = require('./routes/productsRoutes')
const cors = require('cors')
const mercadopago = require('mercadopago')
let mercadopagoResponse = ""


DatabaseConnection()

const app = express()

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors(
  {
    origin: "*",
    credentials:true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS","HEAD"],
    
  }
))


app.use('/api/products', productsRoutes)

mercadopago.configure({
  access_token: 'TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410'
})


app.get("/", (req, res) => {
  res.send('API Running')
  });


app.post('/checkout', cors(), (req,res) => {
  
  //  Mercadopago Config
let preference = {
  items: req.body.map(x => ({
    title: x.name,
    unit_price: x.price,
    quantity: x.qty

  }))
}

mercadopago.preferences.create(preference)
.then(async (response) =>  {
  mercadopagoResponse = await response.body.init_point
  console.log(mercadopagoResponse)
})

.catch(err => {
  console.log(err)
})

console.log(preference)
})

app.get('/checkout', async (req,res) => {
  setTimeout(() => {
    res.redirect(mercadopagoResponse)
  }, 5000)
})

//port

app.listen(process.env.PORT || LocalPort , () => {
    console.log('Server on port 3001')
})