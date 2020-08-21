import React, { Component } from 'react'

import Movies from './components/Movies'

class DidUpdate extends Component {
  state = {
    id: 100
  }

  aumentar = () => {
    this.setState(state => ({
      id: state.id + 1
    }))
  }

  render () {
    const { id } = this.state
    return (
      <div>
        <h1>componentDidUpdate</h1>
        <h2>ID: { id }</h2>
        <button onClick={this.aumentar}>
          Aumentar
        </button>
        <Movies
          movieId={id}
        />
      </div>
    )
  }
}

export default DidUpdate

