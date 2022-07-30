const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl = (process.env.NODE_ENV === 'production') ? process.env.MONGODB_URI : `mongodb+srv://skim1571:${process.env.MONGODBPASSWORD}@cluster0.rkif4yl.mongodb.net/strokeCaddy`


mongoose
  .connect(dbUrl) // if we don't have a local database named "productsDatabase" one will be created upon a successful connection
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db