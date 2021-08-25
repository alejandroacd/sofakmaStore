const express = require('express')
require('dotenv').config()
const PORT = 3001
const DatabaseConnection = require("./config/db")
const productsRoutes = require('./routes/productsRoutes')

DatabaseConnection()

const app = express()
//middlewares
app.use(express.json())



app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });


app.use('/api/products', productsRoutes)

app.listen(PORT, () => {
    console.log('Server on port 3001')
})