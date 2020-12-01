import React, { Component } from "react";
import Header from "./Components/Header/Header";
import PokemonList from "./Components/PokemonList/PokemonList";
import ControlButtons from "./Components/ControlButtons";
import PokemonCards from "./PokemonCards/PokemonCards";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <PokemonList />
            <ControlButtons />
          </Route>
          <Route path="/pokemons/:id" component={PokemonCards}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
