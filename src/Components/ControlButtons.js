import React, { Component } from "react";
import changeHeightOfList from "./PokemonList/changeHeightOfListFunction";

class ControlButtons extends Component {
  loadMore = () => {
    changeHeightOfList(false);
  };

  render() {
    return (
      <section className="control-buttons">
        <button id={"load-more-button"} onClick={this.loadMore}>
          LOAD MORE
        </button>
      </section>
    );
  }
}

export default ControlButtons;
