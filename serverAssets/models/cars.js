let mongoose = require('mongoose')
let Schema = mongoose.Schema


let car = new Schema({
  price: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Cars', car)