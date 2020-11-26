import React, { Component } from "react";
import Menu from "./Menu/Menu";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo"></div>
        <Menu />
      </header>
    );
  }
}

export default Header;
