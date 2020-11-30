import React, { Component } from "react";
import Header from "./Components/Header/Header";
import PokemonList from "./Components/PokemonList/PokemonList";
import ControlButtons from "./Components/ControlButtons";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PokemonList />
        <ControlButtons />
      </React.Fragment>
    );
  }
}

export default App;
