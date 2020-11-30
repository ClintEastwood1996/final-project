import React, { Component } from "react";
import Pokemon from "./Pokemon/Pokemon";

class PokemonList extends Component {
  state = {
    pokemons: [],
    caughts: [{}],
  };

  loadPokemons = () => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data });
      });
  };

  loadCaughts = () => {
    fetch("http://localhost:3000/caughts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ caughts: data });
      });
  };

  componentDidMount() {
    this.loadPokemons();
    this.loadCaughts();
  }

  render() {
    const PokemonsTamplate = this.state.pokemons.map((item) => {
      return (
          <Pokemon
            name={item.name}
            id={item.id}
            caught={this.state.caughts.find((elem) => item.id == elem.id)}
          />
      );
    });

    return (
      <section className="pokemon-list" id="pokemon-list">
        <div className="pokemon-list-wrapper" id="list-wrapper">
          {PokemonsTamplate}
        </div>
      </section>
    );
  }
}

export default PokemonList;
