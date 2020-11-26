import React, { Component } from "react";
import Header from "./Components/Header/Header";
import PokemonList from "./Components/PokemonList/PokemonList";
import LoadMore from "./Components/LoadMore";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PokemonList />
        <LoadMore />
      </React.Fragment>
    );
  }
}

export default App;
