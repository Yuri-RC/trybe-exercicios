import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Data from './Data'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <main>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          <Pokemon data={Data} />
        </div>
      </main>
    )
  }
}

export default Pokedex;