const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')


router.post('/newMovie', (req, res) => {
  Movie.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log('Error in posting a new Movie!! ', err))
})

module.exports = router