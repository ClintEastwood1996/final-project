import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon-card">
        <div className="pokemon-card__title">{this.props.name}</div>
        <img
          src={`./pokemons//${this.props.id}.png`}
          className="pokemon-card__img"
          alt={this.props.name}
        />
        <div>
          <button className="pokemon-card__button">Catch</button>
        </div>
      </div>
    );
  }
}

export default Pokemon;
