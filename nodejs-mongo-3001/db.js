require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`

async function connectDb(){
    try{
        await mongoose.connect(MONGO_URL, {
            authSource:`${process.env.MONGO_SOURCE}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Done connecting to MongoDB')
    } catch(error){
        console.log(error)
        console.error('Connect Error!')
        process.exit(1)
    }
}
module.exports = connectDb