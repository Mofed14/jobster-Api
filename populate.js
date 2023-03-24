require('dotenv').config({path: './env/.env'})
const mongoose = require('mongoose')
const data = require('./MOCK_DATA.json')
const Jobs = require('./models/Job')

const start = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
         useUnifiedTopology: true 
       })
       console.log('DB is connecting')
       await Jobs.deleteMany()
       await Jobs.create(data)
       console.log('Data is created')
       process.exit(0)
    } catch (error) {
        console.log(error)
       process.exit(0)

    }
}

start()