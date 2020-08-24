import React, { Component } from 'react'

import MovieDetails from './components/MovieDetails'
import Search from './components/Search'

class App extends Component {

  state = {
    movies: [],
    isFetching: false,
    movie: '',
    search: false,
    genres: [],
    msg: false
  }

  componentDidMount () {
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=f1eef2ee60f5fa6ef35fcfe1806367fe&language=en-US`

    fetch(urlGenres)
      .then(res => res.json())
      .then(genres => this.setState({
        genres: genres,
        isFetching: false
      }))
  }

  myChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setSearch = () => {

    if(this.state.movie.trim() === ''){
      this.setState({msg: true})
      setTimeout(() => {
        this.setState({msg: false})
      }, 3000);
    }else{
      this.setState({
        isFetching: true
      })

      const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=f1eef2ee60f5fa6ef35fcfe1806367fe&query=${this.state.movie}` 
      fetch(urlMovies)
        .then(res => res.json())
        .then(movies => this.setState({
          movies: movies.results,
          isFetching: false
        }))
    }

  }

  render () {

    const { msg, movies, genres, isFetching} = this.state

    return (
      <div className="container" >
          <h1 className="text-center">Movies</h1>
          {msg && 
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>¡Error! </strong> Introduce a movie.
            </div>
          }
          <Search
            myChangeHandler={this.myChangeHandler}
            setSearch={this.setSearch}

          />
        <div>
          { isFetching 
            ? 
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
              </div>
            : 
              <div className="d-flex flex-row flex-wrap justify-content-center">
              {movies && 
                movies.map(film => (
                  <MovieDetails 
                    key={film.id}
                    genres={genres}
                    film={film} />
                ))
              }
            </div>
          }
        </div>
      </div>
    )

  }

}

export default App

