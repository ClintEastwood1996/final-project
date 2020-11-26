import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/reset.css";
import "./assets/styles/styles.scss";
import "./assets/img/pokemons/1.png";

// import all imgs
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("./assets/img/pokemons", true, /\.png|jpe?g|svg$/));
// finish import all imgs

ReactDOM.render(<App />, document.getElementById("root"));


