let mongoose = require('mongoose')
let Schema = mongoose.Schema


let schema = new Schema({
  price: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  levels: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Houses', schema)