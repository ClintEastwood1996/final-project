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
        <div key={item.id}>
          <Pokemon name={item.name} id={item.id} caught={this.state.caughts.find(elem => item.id == elem.id)} />
        </div>
      );
    });

    return <section className="pokemon-list" id="pokemon-list">{PokemonsTamplate}</section>;
  }
}

export default PokemonList;
