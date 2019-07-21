import React, { Component } from "react";
import MovieServices from "../services/movies-services";
import MovieCard from "./Movie-card";
import Navbar from "./Navbar";
// import MovieList from './movies-list';
import { Link } from "react-router-dom";
import "../home.css";
// import MovieForm from './movie-form'
import Fade from "react-reveal/Fade";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.services = new MovieServices();
  }

  componentDidMount() {
    this.services
      .getAllMovies()
      .then(allMovies => this.setState({ movies: allMovies }));
  }

  render() {
    return (
      <div className="homepage_container">
        <div className="hero">
          <Navbar />
          <div className="hero_description">
            <h1>Evilloh's reviews</h1>
            <h2>Recensioni senza pretese di film</h2>
            <h2>di un nessuno qualsiasi sul web</h2>
          </div>
        </div>
        <div className="secondSection">
          <div className="appearthisshit" style={{ overflow: "hidden" }}>
            <Fade right big>
              <p>Markup that will be revealed on scroll</p>
            </Fade>
            <h1>Evilloh's reviews</h1>
            <h2>Recensioni senza pretese di film</h2>
            <h2>di un nessuno qualsiasi sul web</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
