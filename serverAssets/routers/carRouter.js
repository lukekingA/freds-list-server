const router = require('express').Router()

let Car = require('../models/cars')

router.get('', (req, res, next) => {
  Car.find({}).then(cars => {
    res.status(201).send(cars)
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.post('', (req, res, next) => {
  Car.create(req.body)
    .then(car => {
      res.status(201).send(car)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})


router.get('/:id', (req, res, next) => {
  Car.findById(req.params.id).then(car => {
    if (car) {
      return res.status(200).send(car)
    }
    res.status(400).send("no car at  id")
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.put('/:id', (req, res, next) => {
  Car.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(car => {
      res.status(200).send(car)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})

router.delete('/:id', (req, res, next) => {
  Car.findByIdAndDelete({
      _id: req.params.id
    })
    .then(oldData => {
      res.status(200).send('deleted')
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})


module.exports = router