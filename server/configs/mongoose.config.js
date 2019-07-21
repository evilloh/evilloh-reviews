const mongoose = require("mongoose");

mongoose
  // .connect('mongodb://localhost/evillohReviewsDB', { useNewUrlParser: true })
  .connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

module.exports = mongoose;
