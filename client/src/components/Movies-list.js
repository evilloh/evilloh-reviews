import React, { Component } from "react";
import MovieServices from "../services/movies-services";
import MovieCard from "./Movie-card";
import Navbar from "./Navbar";
import "../movieList.css";
import classnames from "classnames";
// import MovieForm from './movie-form'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], page: undefined, loaded: false };
    this.services = new MovieServices();
  }

  getMovies = arg => {
    this.setState({ page: arg, loaded: false });
    this.services
      .getAllMovies(arg)
      .then(allMovies => this.setState({ movies: allMovies, loaded: true }));
  };

  componentDidMount() {
    this.getMovies(8);
  }

  render() {
    const prev = "<";
    const next = ">";
    return (
      <div className="movieList_container">
        <Navbar />
        <div className="moviePages">
          <ul>
            <li>
              <p
                onClick={() =>
                  this.state.page < 8 && this.getMovies(this.state.page + 1)
                }
              >
                {prev}
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 8
                })}
                onClick={() => this.getMovies(8)}
              >
                1
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 7
                })}
                onClick={() => this.getMovies(7)}
              >
                2
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 6
                })}
                onClick={() => this.getMovies(6)}
              >
                3
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 5
                })}
                onClick={() => this.getMovies(5)}
              >
                4
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 4
                })}
                onClick={() => this.getMovies(4)}
              >
                5
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 3
                })}
                onClick={() => this.getMovies(3)}
              >
                6
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 2
                })}
                onClick={() => this.getMovies(2)}
              >
                7
              </p>
            </li>
            <li>
              <p
                className={classnames({
                  activepage: this.state.page === 1
                })}
                onClick={() => this.getMovies(1)}
              >
                8
              </p>
            </li>
            <li>
              <p
                onClick={() =>
                  this.state.page > 1 && this.getMovies(this.state.page - 1)
                }
              >
                {next}
              </p>
            </li>
          </ul>
        </div>

        {this.props.userInSession ? <h2> Hello bieatch </h2> : null}
        {!this.state.loaded && (
          <img
            src="/images/ajax-loader.gif"
            alt="loader spinner"
            className="loading"
          />
        )}
        {this.state.loaded && (
          <div className="movies_list">
            {this.state.movies.map((theMovie, idx) => (
              <MovieCard key={idx} {...theMovie} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
