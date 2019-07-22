import axios from "axios";

export default class services {
  constructor() {
    this.service = axios.create({
      // baseURL: "https://evilloh-reviews.herokuapp.com/api/"
      baseURL: "http://localhost:5000/api/"
    });
  }

  getAllMovies = arg => {
    let config = {
      headers: {
        page: arg
      }
    };
    return this.service
      .get("getAllMovies", config)
      .then(res => res.data)
      .catch(err =>
        console.log("Error in retrieving the data from the DB:", err)
      );
  };

  getOneMovie = id => {
    return this.service
      .get(`getOneMovie/${id}`)
      .then(res => res.data)
      .catch(err =>
        console.log("Error in retrieving the data from the DB:", err)
      );
  };

  postMovie = movie => {
    return this.service
      .post("postMovie", movie)
      .then(res => res.data)
      .catch(err => console.log("Error in posting a new movie!", err));
  };
}
