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
        <div onClick={this.allClick} className="menu__item">
          All <span>pokemons</span>
        </div>
        <div onClick={this.myClick} className="menu__item">
          My <span>pokemons</span>
        </div>
      </div>
    );
  }
}

export default Menu;
