import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pokemon extends Component {
  state = {
    caught: false,
  };

  buttonClick = () => {
    fetch("http://localhost:3000/caughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name: this.props.name,
        id: this.props.id,
        date: new Date(),
      }),
    }).then(() => this.setState({ caught: true }));
  };

  render() {
    return (
      <div className="pokemon-wrapper">
        <div
          className={
            this.state.caught || this.props.caught
              ? "pokemon-card"
              : "pokemon-card disabled"
          }
          id={`pokemon-card-${this.props.id}`}
        >
          <div className="pokemon-card__title">{this.props.name}</div>
          <a href={`#/pokemons/${this.props.id}`} target="_blank">
            <img
              src={`./pokemons//${this.props.id}.png`}
              className="pokemon-card__img"
              alt={this.props.name}
            />
          </a>
          <div>
            <button
              disabled={this.state.caught || this.props.caught}
              className={
                !(this.state.caught || this.props.caught)
                  ? "pokemon-card__button"
                  : "pokemon-card__button pokemon-card__button_disabled"
              }
              onClick={this.buttonClick}
            >
              {!this.state.caught ? "Catch" : "Caught"} {/*  innerHtml */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
