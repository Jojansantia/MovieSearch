import React, {Component}  from 'react';
import MovieDetails from './MovieDetails'

export default class Movies extends Component {
  state = {
    movies: [],
    movie: {},
    isFetching: false
  }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps, prevState) {

    if (prevState.movie.id !== this.state.movie.id) {
      this.setState(state => ({
        movies: [
          ...state.movies,
          state.movie
        ]
      }))
    }

    if (prevProps.movieId !== this.props.movieId) {
      this.fetchData()
    }

  }

  fetchData = () => {
    this.setState({
      isFetching: true
    })

    const URL = `https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=f1eef2ee60f5fa6ef35fcfe1806367fe` 
    fetch(URL)
      .then(res => res.json())
      .then(movie => this.setState({
        movie,
        isFetching: false
      }))

  }

  render () {
    const {movies, isFetching } = this.state
    return (
      <div>
        <h2>movie Details</h2>
        { isFetching 
          ? <h1>Cargando...</h1>
          : (
            <div className="d-flex flex-row flex-wrap">
              {movies.length !== 0 && 
                movies.map(film => (
                  <MovieDetails 
                    key={film.id}
                    film={film} />
                ))
              }
            </div>
          )
        }
      </div>
    )
  }
}