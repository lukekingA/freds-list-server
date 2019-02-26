let mongoose = require('mongoose')

const conectStr = 'mongodb://fredslistserv:fredserv*@den1.mongo1.gear.host:27001/fredslistserv'

let connection = mongoose.connection

mongoose.connect(conectStr, {
  useNewUrlParser: true
})

connection.on('error', err => console.log('database error', err))

connection.once('open', () => {
  console.log('sucessful connection')
})