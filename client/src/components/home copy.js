import React, { Component } from 'react'
import MovieServices from '../services/movies-services'
import MovieCard from './Movie-card'
// import MovieList from './movies-list';
import { Link } from 'react-router-dom'

// import MovieForm from './movie-form'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { movies: [] }
    this.services = new MovieServices()
  }


  componentDidMount() {
    this.services.getAllMovies()
      .then(allMovies => this.setState({ movies: allMovies }))
  }


  render() {
    return (
      <div className="container">

        <h1>Welcome to the homepage</h1>
        <Link to={'/movies'}>Cosaaaa</Link>

        {this.props.userInSession ? <h2> Hello bieatch </h2> : null}


        <div className="movies-list">

          {this.state.movies.map((theMovie, idx) => <MovieCard key={idx} {...theMovie} />)}

        </div>

      </div>
    )
  }
}

export default Home