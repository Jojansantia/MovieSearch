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
    populars: [],
    msg: false,
    API_KEY : process.env.REACT_APP_API_KEY
  }

  componentDidMount () {
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.state.API_KEY}&language=en-US`
    const urlPopulars = `https://api.themoviedb.org/3/movie/popular?api_key=${this.state.API_KEY}&page=1`
    
    fetch(urlGenres)
      .then(res => res.json())
      .then(genres => this.setState({
        genres: genres,
      }))
    fetch(urlPopulars)
      .then(res => res.json())
      .then(populars => this.setState({
        populars: populars.results,
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

      const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_KEY}&query=${this.state.movie}` 
      fetch(urlMovies)
        .then(res => res.json())
        .then(movies => this.setState({
          movies: movies.results,
          isFetching: false
        }))
    }

  }

  render () {

    const { msg, populars, movies, genres, isFetching} = this.state

    return (
      <div className="container p-4" >
          <h1 className="text-center" onClick={() => this.setState({movies: []})}>Movie Search</h1>
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

          { isFetching ? 
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
          : 
            <>
              <h2 className="text-center">{movies.length === 0 ? 'Populares' : 'Movies'}</h2>
              <div className="d-flex flex-row flex-wrap justify-content-center">
                {movies.length !== 0 ?
                  movies.map(film => (
                    <MovieDetails 
                      key={film.id}
                      genres={genres}
                      film={film} />
                  ))
                : 
                  (populars && 
                    populars.map(film => (
                      <MovieDetails 
                        key={film.id}
                        genres={genres}
                        film={film} />
                    ))
                  )
                }
              </div>
            </>
          }
        </div>
      </div>
    )

  }

}

export default App

