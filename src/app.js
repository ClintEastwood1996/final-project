import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header"
import PokemonList from "./Components/PokemonList/PokemonList"

class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Header />
        <PokemonList url={this.props.url}/>
    </React.Fragment>
    );
  }
}

export default App;
