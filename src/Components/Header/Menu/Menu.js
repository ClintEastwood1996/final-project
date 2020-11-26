import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
    <div className="menu">
        <a href="#" className="menu__item">All <span>pokemons</span></a>
        <a href="#" className="menu__item">My <span>pokemons</span></a>
    </div>
    );
  }
}

export default Menu;
