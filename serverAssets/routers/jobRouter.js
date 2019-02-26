const router = require('express').Router()

let Job = require('../models/jobs')

router.get('', (req, res, next) => {
  Job.find({}).then(jobs => {
    res.status(201).send(jobs)
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.post('', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})


router.get('/:id', (req, res, next) => {
  Job.findById(req.params.id).then(job => {
    if (job) {
      return res.status(200).send(job)
    }
    res.status(400).send("no job at  id")
  }).catch(err => {
    res.status(500).send({
      Error: err
    })
  })
})

router.put('/:id', (req, res, next) => {
  Job.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(job => {
      res.status(200).send(job)
    }).catch(err => {
      res.status(500).send({
        Error: err
      })
    })
})

router.delete('/:id', (req, res, next) => {
  Job.findByIdAndDelete({
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