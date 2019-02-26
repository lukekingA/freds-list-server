const router = require('express').Router()

let House = require('../models/houses')

router.get('', (req, res, next) => {
  House.find({}).then(houses => {
    res.status(201).send(houses)
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.post('', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.status(201).send(house)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})


router.get('/:id', (req, res, next) => {
  House.findById(req.params.id).then(house => {
    if (house) {
      return res.status(200).send(house)
    }
    res.status(400).send("no house at  id")
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.put('/:id', (req, res, next) => {
  House.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(house => {
      res.status(200).send(house)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})

router.delete('/:id', (req, res, next) => {
  House.findByIdAndDelete({
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