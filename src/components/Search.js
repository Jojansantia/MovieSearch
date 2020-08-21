import React, { Component } from 'react'

export default class componentName extends Component {

  render() {
    return (
     <div className="input-group mb-3">
        <input 
          name="movie"
          onChange={this.props.myChangeHandler}
          type="text" className="form-control" placeholder="Buscar Pelicula"
        />
        <div className="input-group-append">
          <button 
            onClick={this.props.setSearch}
            className="btn btn-secondary" type="button" 
          >
            <svg width="1.2em" height="1.2em" viewBox="0 0 20 20" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>Buscar
          </button>
        </div>
      </div>
    )
  }
}
