const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    dateOfView: String,
    imageUrl: String,
    review: String,
    vote: String,
    adviceable: Boolean
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
