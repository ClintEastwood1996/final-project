function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./assets/img/pokemons", true, /\.png|jpe?g|svg$/));

export default importAll;
