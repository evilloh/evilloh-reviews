const express = require("express");
const router = express.Router();

const Movie = require("../models/movie-model");

const createDate = arg => {
  const dateString = arg.dateOfView;
  const dateParts = dateString.split("/");
  return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
};

router.get("/getAllMovies", (req, res) => {
  const page = req.headers.page - 1;
  Movie.find()
    .skip(page * 10)
    .limit(10)
    .then(data => {
      let newData = [...data];

      newData.sort(function(a, b) {
        return createDate(a) - createDate(b);
      });

      console.log(newData);
      res.json(newData);
    })
    .catch(err => console.log("Error in retrieving data from DB:", err));
});

router.get("/getOneMovie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log("Error in retrieving data from DB:", err));
});

router.post("/newMovie", (req, res) => {
  Movie.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log("Error in posting a new Movie!! ", err));
});

module.exports = router;
