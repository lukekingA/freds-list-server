let mongoose = require('mongoose')
let Schema = mongoose.Schema


let schema = new Schema({

  jobTitle: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Job', schema)