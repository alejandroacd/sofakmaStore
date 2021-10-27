const express = require('express')
require('dotenv').config()
const LocalPort = 3001
const DatabaseConnection = require("./config/db")
const productsRoutes = require('./routes/productsRoutes')
const cors = require('cors')

DatabaseConnection()

const app = express()
//middlewares
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });

app.use('/api/products', productsRoutes)

app.listen(process.env.PORT || LocalPort , () => {
    console.log('Server on port 3001')
})