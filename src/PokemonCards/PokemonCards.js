import React, { Component } from "react";

class PokemonCards extends Component {
  state = {
    pokemon: {},
    caughtPokemon: {},
  };

  getPokemon = () => {
    fetch(`http://localhost:3000/pokemons/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemon: data });
      });
  };

  getCaught = () => {
    fetch(`http://localhost:3000/caughts/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ caughtPokemon: data });
      });
  };

  componentDidMount() {
    this.getPokemon();
    this.getCaught();
  }

  render() {
    const pokemon = this.state.pokemon;
    const c_pokemon = this.state.caughtPokemon;

    console.log(c_pokemon);

    return (
      <section className="pokemon-page">
        <div className="pokemon-card">
          <h1 className="pokemon-card__title">{pokemon.name}</h1>
          <img className="pokemon-card__logo" src={`./pokemons//${pokemon.id}.png`} />
          <div className="pokemon-card__date">
            {c_pokemon.id
              ? `caught: ${c_pokemon.date.substring(0, 10)}`
              : `not caught`}
          </div>
        </div>
      </section>
    );
  }
}

export default PokemonCards;
