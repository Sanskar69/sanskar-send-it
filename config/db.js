require('dotenv').config();
const mongoose = require("mongoose");

function connectDB() {
  // Database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log('Database connected');
    }).catch(err =>{
        console.log('Error connecting');
    })
}

module.exports = connectDB;  //important