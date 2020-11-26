import React, { Component } from "react";

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
      body: JSON.stringify({ name: this.props.name, id: this.props.id }),
    }).then(() => this.setState({ caught: true }));
  };



  render() {
    return (
      <div
        className={(this.state.caught || this.props.caught) ? "pokemon-card" : "pokemon-card disabled"}
      >
        <div className="pokemon-card__title">{this.props.name}</div>
        <img
          src={`./pokemons//${this.props.id}.png`}
          className="pokemon-card__img"
          alt={this.props.name}
        />
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
    );
  }
}

export default Pokemon;
