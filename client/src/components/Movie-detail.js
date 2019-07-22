import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieServices from "../services/movies-services";
import Navbar from "./Navbar";
import "../movieDetail.css";
import Axios from "axios";
const API_KEY = process.env.REACT_APP_OMDBAPI_API_KEY;

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      movieDetail: {
        Actors: "N.A.",
        Awards: "N.A.",
        BoxOffice: "N.A.",
        Country: "N.A.",
        DVD: "N.A.",
        Director: "N.A.",
        Genre: "N.A.",
        Language: "N.A.",
        Metascore: "N.A.",
        Plot: "N.A.",
        Poster: "N.A.",
        Production: "N.A.",
        Rated: "N.A.",
        Ratings: ["N.A."],
        Released: "N.A.",
        Response: "N.A.",
        Runtime: "N.A.",
        Title: "N.A.",
        Type: "N.A.",
        Website: "N.A.",
        Writer: "N.A.",
        Year: "N.A.",
        imdbID: "N.A.",
        imdbRating: "N.A.",
        imdbVotes: "N.A."
      }
    };
    this.services = new MovieServices();
  }

  componentDidMount() {
    this.services.getOneMovie(this.props.match.params.id).then(theMovie => {
      this.setState({ movie: theMovie });
      const title = this.state.movie.title;

      Axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=$${title}`)
        .then(data => {
          const dataTitle = data.data.Title.toLowerCase();
          const ourTitle = this.state.movie.title.toLowerCase();
          if (dataTitle === ourTitle) {
            this.setState({ movieDetail: data.data });
          }
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    return (
      <div className="detail_container">
        <Navbar />
        <div className="detail_infos_container">
          <div className="detail_infos_high">
            <figure>
              <img
                className="card-img"
                src={this.state.movie.imageUrl}
                alt={this.state.movie.title}
              />
            </figure>
            <div className="detail_infos_high_text">
              <p>
                Data di rilascio: <span>{this.state.movieDetail.Released}</span>
              </p>
              <p>
                Genere: <span>{this.state.movieDetail.Genre}</span>
              </p>
              <p>
                Regista: <span>{this.state.movieDetail.Director}</span>
              </p>
              {this.state.movieDetail.Ratings.map((theMovie, idx) => (
                <p key={idx}>
                  {theMovie.Source}: <span>{theMovie.Value}</span>
                </p>
              ))}

              <p>
                Premi: <span>{this.state.movieDetail.Awards}</span>
              </p>
            </div>
          </div>
          <p className="detail_infos_trama">
            Trama: <span>{this.state.movieDetail.Plot}</span>
          </p>
        </div>
        <div className="detail_description_container">
          <h1>{this.state.movie.title}</h1>
          <h4>Visto il: {this.state.movie.dateOfView}</h4>
          <p>
            {this.state.movie.review &&
              this.state.movie.review.split("\\n").map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                    <br />
                  </span>
                );
              })}
          </p>
          <h2>Voto: {this.state.movie.vote}</h2>
          <Link className="back_btn" to={"/movies"}>
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
