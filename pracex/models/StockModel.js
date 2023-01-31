
const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
  b: String, 
  c: String, 
  y: String, 
  h: String, 
  l: String, 
})

const StockModel = mongoose.model('stock', stockSchema)



module.exports = StockModel