import {
  filterByType,
  searchByName,
  sortByName,
  sortByNum,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pkmnDataList = data.pokemon; //pega o banco de dados
const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos
const htmlStatistic = document.getElementById("statistic");
updatePokemonList(pkmnDataList);

/*função de atualizar a lista de pokémons,
ela gera os cards inicialmente e é invocada nos filtros para gerar os cards filtrados
*/

function updatePokemonList(filteredPokemons) {
  pkmCards.innerHTML = "";

  filteredPokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    let typePkm = "";
    pokemon.type.forEach((type) => {
      typePkm += `<p class="type-style ${type}">${type}</p>`;
    });
    card.innerHTML = `
      <div class="pokemon">
        <p class="pokemon-numero">${pokemon.num}</p>
        <div class="pokemon-imagem">
          <img src="${pokemon.img}" alt="Foto pokemon"></img>
        </div>
        <div class="name-contenedor">
          <h2 class="pokemon-name">${pokemon.name}</h2>
        </div>
        <div class="pokemon-type">
          <div class="typePokemon">${typePkm}</div>
        </div>
      </div>
    `;

    pkmCards.appendChild(card);
  });
  htmlStatistic.textContent = " "
}

//filtrar por tipo
const typeInput = document.getElementById("typeFilter");
typeInput.addEventListener("change", () => {
  const selectedType = typeInput.value.toLowerCase();
  const filteredPokemons = filterByType(selectedType, data.pokemon);
  updatePokemonList(filteredPokemons);
  
  const pokemonCount = filteredPokemons.length;
  const typePercentage = (pokemonCount / data.pokemon.length) * 100;
  htmlStatistic.textContent = 
    `There are ${pokemonCount} Pokémon of the selected Type, which is equivalent to ${typePercentage.toFixed(
      2
    )}% of all the 251 Pokémon.`
});

const sortNameInput = document.getElementById("sortName");
sortNameInput.addEventListener("change", () => {
  if (sortNameInput.value === "A-Z") {
    const orderedByNamePokemons = sortByName('a-z', data.pokemon);
    return updatePokemonList(orderedByNamePokemons);
  } else if (sortNameInput.value === "Z-A") {
    const orderedByNamePokemons = sortByName('z-a', data.pokemon);
    return updatePokemonList(orderedByNamePokemons);
  }
});

// Ordenar por número
const sortNumInput = document.getElementById("sortNum");
sortNumInput.addEventListener("change", () => {
  if (sortNumInput.value === "0-9") {
    const orderedByNumPokemons = sortByNum('asc', data.pokemon);
    return updatePokemonList(orderedByNumPokemons);
  } else if (sortNumInput.value === "9-0") {
    const orderedByNumPokemons = sortByNum('desc', data.pokemon);
    return updatePokemonList(orderedByNumPokemons);
  }
});

//procurar por nome
const searchNameInput = document.getElementById("searchByName");
searchNameInput.addEventListener("input", () => {
  const nameInput = searchNameInput.value.toLowerCase();
  const filteredPokemons = searchByName(nameInput, data.pokemon);
  updatePokemonList(filteredPokemons);
});


