import React, { Component } from "react";

class LoadMore extends Component {
  state = {
    heightOfList: 580*2,
  };

  loadMore = () =>  {
        this.setState({
            heightOfList: this.state.heightOfList + 580
        })

        const height = this.state.heightOfList;

        document.getElementById("pokemon-list").style.height = `${height}px`;
  }

  render() {
    return (
      <section className="load-more">
        <button onClick={this.loadMore}>LOAD MORE</button>
      </section>
    );
  }
}

export default LoadMore;
