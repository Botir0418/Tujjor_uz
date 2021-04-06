const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/umd'
const connectDB = async () => {
   try{
      const conn = await mongoose.connect(db, {
         useNewUrlParser: true,
         useFindAndModify: true,
         useCreateIndex: true,
         useUnifiedTopology: true
      })
      console.log(`MongoDB connected: ${conn.connection.host}`)
   }
   catch(err){
      console.log(err)
   }
}

module.exports = connectDB