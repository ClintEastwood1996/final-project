import React, { Component } from "react";


class Menu extends Component {
  allClick() {
    document.querySelectorAll(".pokemon-card").forEach((elem) => {
      elem.style.display = "block";
    });
  }

  myClick() {
    document.querySelectorAll(".disabled").forEach((elem) => {
      elem.style.display = "none";
    });
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
