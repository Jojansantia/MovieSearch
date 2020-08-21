import React, { PureComponent } from 'react'

export default class MovieDetails extends PureComponent {
  render() {
    const {film} = this.props
    return (
      <>
        {Object.keys(film).length !== 0 &&
          <>
            <div className="card m-2" style={{width: '18rem'}}>
              <img src= {`https://image.tmdb.org/t/p/original${film.poster_path}` } className="card-img-top" alt={film.original_title} />
              <div className="card-body text-center">
                <h5 className="card-title">{film.original_title}</h5>
                <p className="card-text">{film.overview}</p>
                <a href={film.homepage} className="btn btn-primary center">Homepage</a>
              </div>
            </div>
            {/* <pre>
              { JSON.stringify(film, null, 4 ) }
            </pre> */}
          </>
        }
      </>
    )
  }
}
