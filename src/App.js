import React, { Component } from 'react'

import MovieDetails from './components/MovieDetails'
import Search from './components/Search'

class App extends Component {
  state = {
    movies: [],
    isFetching: false,
movie: '',
    search: false
  }

  // aumentar = () => {
  //   let id = Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.max)
  //   this.setState({id})
  // }

  // componentDidMount () { 
  //   let id = Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.max)
  //   this.setState({id})
  // }


  myChangeHandler = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setSearch = () => {
      this.setState({
        isFetching: true
      })

      // const URL = `https://api.themoviedb.org/3/movie/${this.props.movieId}?api_key=f1eef2ee60f5fa6ef35fcfe1806367fe` 
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=f1eef2ee60f5fa6ef35fcfe1806367fe&query=${this.state.movie}`
      fetch(URL)
        .then(res => res.json())
        .then(movies => this.setState({
          movies: movies.results,
          isFetching: false
        }))
    }

  render () {
    const { movies, isFetching} = this.state
    return (
      <div className="container">
          <h1 className="text-center">Peliculas</h1>
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

