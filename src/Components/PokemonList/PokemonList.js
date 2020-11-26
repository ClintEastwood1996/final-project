import React, { Component } from "react";
import Pokemon from "./Pokemon/Pokemon";

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  loadPokemons = () => {
    fetch(this.props.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data });
      });
  };

  componentDidMount() {
    this.loadPokemons();
  }

  render() {
    const PokemonsTamplate = this.state.pokemons.map(function (item, index) {
      return (
        <div key={item.id}>
          <Pokemon name={item.name} id={item.id}/>
        </div>
      );
    });

    return (
      <section className="pokemon-list">
        {PokemonsTamplate}
      </section>
    );
  }
}

export default PokemonList;
