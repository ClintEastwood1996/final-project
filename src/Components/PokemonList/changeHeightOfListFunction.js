function changeHeightOfListFunction(reset) {
  const PADDING_TOP_OF_POKEMON_LIST = 160;
  const WRAPPER_HEIGHT = document.getElementById("list-wrapper").offsetHeight;
  const HEIGHT_OF_CARD = document.querySelector(".pokemon-wrapper")
    .offsetHeight;

  let pokemonList = document.getElementById("pokemon-list");
  let currentHeight = pokemonList.offsetHeight - PADDING_TOP_OF_POKEMON_LIST;

  let newHeight = currentHeight + HEIGHT_OF_CARD*2;

  if (newHeight > WRAPPER_HEIGHT) {
    newHeight = WRAPPER_HEIGHT;
  }

  if (reset) {
    newHeight = HEIGHT_OF_CARD * 2;
  }

  pokemonList.style.height = `${newHeight}px`;
}

export default changeHeightOfListFunction;
