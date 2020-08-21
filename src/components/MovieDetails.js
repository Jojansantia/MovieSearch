import React, { Component } from 'react'
import imgDefault from '../img/default.jpg'
export default class MovieDetails extends Component {

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.film.id !== this.props.film.id) {
      return true
    }
    return false
  }

  render() {
    const {film} = this.props
console.log(film);
    return (
      <>
        <div className="card m-1" style={{width: '18rem'}}>
          <img src= {film.poster_path ? `https://image.tmdb.org/t/p/original${film.poster_path}` : imgDefault } className="card-img-top" alt={film.original_title} />
          <div className="card-body text-center">
            <h5 className="card-title">{film.original_title}</h5>
            <p className="card-text">{film.overview}</p>
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
