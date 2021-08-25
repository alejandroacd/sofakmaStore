require('dotenv').config()
const mongoose = require('mongoose')

const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,

        })
        console.log('Conexión exitosa a base de datos')
    } 
    catch(e) {
        console.error(e)
        process.exit(1)
    }
}

module.exports = DatabaseConnection
