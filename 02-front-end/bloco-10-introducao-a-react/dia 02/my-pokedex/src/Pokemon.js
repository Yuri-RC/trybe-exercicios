import React, { Component } from "react";
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const data = this.props.data;
    return (
      data.map((pokemon) => {
        const { measurementUnit, value } = pokemon.averageWeight;
        return (
          <div className="poke-container">
            <div className="poke-info">
              <h4>{pokemon.name}</h4>
              <p>{pokemon.type}</p>
              <p>{value}{measurementUnit}</p>
            </div>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        )
      })
    )
  }
}

export default Pokemon;
