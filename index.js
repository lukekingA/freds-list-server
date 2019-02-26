let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let carRoutes = require('./serverAssets/routers/carRouter')
let houseRoutes = require('./serverAssets/routers/houseRouter')
let jobRoutes = require('./serverAssets/routers/jobRouter')

server.use('/api/cars', carRoutes)
server.use('/api/houses', houseRoutes)
server.use('/api/jobs', jobRoutes)

server.listen(port, () => {
  console.log('server listening on port', port)
})