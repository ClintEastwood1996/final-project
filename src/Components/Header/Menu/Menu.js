import React, { Component } from "react";
import changeHeightOfList from "../../PokemonList/changeHeightOfListFunction"

class Menu extends Component {
  allClick() {
    document.querySelectorAll(".pokemon-card").forEach((elem) => {
      elem.style.display = "block";
    });
    changeHeightOfList(580, true);
  }

  myClick() {
    document.querySelectorAll(".disabled").forEach((elem) => {
      elem.style.display = "none";
    });
    changeHeightOfList(580, true);
  }

  render() {
    return (
      <div className="menu">
        <a onClick={this.allClick} href="#" className="menu__item">
          All <span>pokemons</span>
        </a>
        <a onClick={this.myClick} href="#" className="menu__item">
          My <span>pokemons</span>
        </a>
      </div>
    );
  }
}

export default Menu;
