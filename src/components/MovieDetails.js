import React, { Component } from 'react'
import imgDefault from '../img/default.jpg'
export default class MovieDetails extends Component {

  state = {
    newGenres: []
  }

  componentDidMount () {
    const {film, genres} = this.props
    if(film.genre_ids){
      film.genre_ids.map(
        (genre) => {
          let newGenre = genres.genres.find(newGenres => newGenres.id === genre)
          this.setState(state => ({
            newGenres: [
              ...state.newGenres,
              newGenre
            ]
          }))
          return true
        }
      ) 
    }
  }

  render() {
 
    const {film} = this.props

    return (
      <>
        <div className="card m-1" style={{width: '18rem'}}>
          <img src= {film.poster_path ? `https://image.tmdb.org/t/p/original${film.poster_path}` : imgDefault } className="card-img-top" alt={film.original_title} />
          <div className="card-body text-center">
            <h5 className="card-title">{film.original_title}</h5>
            <h5 className="card-subtitle mb-2 text-muted text-left">Popularity {film.vote_average*10} %</h5>
            <p className="card-text text-left">{film.overview}</p>
            {this.state.newGenres &&
              this.state.newGenres.map((genre, index)=>  (
                <span key={index} className="badge badge-pill badge-success m-1">{genre.name}</span>
              ))
            }
            {film.homepage && <a href={film.homepage} className="btn btn-primary center">Homepage</a>}
          </div>
        </div>
        {/* <pre>
          { JSON.stringify(film, null, 4 ) }
        </pre> */}
      </>
    )

  }

}
