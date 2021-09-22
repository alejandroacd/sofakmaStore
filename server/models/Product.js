const mongoose = require('mongoose')

 const productSchema = new mongoose.Schema({
 
     name: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     price: {
         type: Number,
         required: true
     },
     imgUrl: {
        type: String,
        required: false
    },
     countInStock: {
         type: Number,
         required: true
     },
 
 })

 const Product = mongoose.model('product', productSchema)

 module.exports = Product