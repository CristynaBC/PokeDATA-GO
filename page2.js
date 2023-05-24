import data from "./data/pokemon/pokemon.js";

const pokemonDataList = [...data.pokemon];
//peguei a lista de pokémons em uma array



const firstPokemonForm = document.getElementById("firstPokeForm") 


firstPokemonForm.addEventListener("submit", (event) => { //event listener de submit no form

    event.preventDefault();           //prevent default para não tentar enviar
    
    const firstSelectedPokemon = document.getElementById("pokeNameInputFirst").value.toLowerCase()    //pega o valor do input do nome do pokemon digitado
    
    const firstSearchedPoke = pokemonDataList.find(pokemon => pokemon.name === firstSelectedPokemon) //usa o método find para percorrer o objeto e achar um pokémon com o nome

    
   
   
  if (firstSearchedPoke) {           //como if usa lógica booleana, dá para escrever assim, é como se fosse if firstSearchedPoke == true
        
        const pokemonCardOne = document.querySelector("#pokémon-card-one-container")
        let typePkm = ""
        firstSearchedPoke.type.forEach((type) => {
          typePkm += `<p class="type-style ${type}">${type}</p>`
        });

        pokemonCardOne.innerHTML = `
               
        <div class="pokémon-card" id="pokemon-card-one">
            <p id="firstPokeNum"> # ${firstSearchedPoke.num}</p>
            <img id="firstPokeImg" src="${firstSearchedPoke.img}">
            <p id="firstPokeName">${firstSearchedPoke.name.toUpperCase()}</p>
            <div class="pokeTypeContainer"><p id="firstPokeType" class="type-style">${typePkm}</p></div>
        </div>
        <div class="pokeStats" id="firstPokeStats">
            <p class="pokeStatsStyle" class="firstPokeHP">Max Health Points: ${firstSearchedPoke.stats["max-hp"]}</p>
            <p class="pokeStatsStyle">Max Combat Points: ${firstSearchedPoke.stats["max-cp"]}</p>
            <p class="pokeStatsStyle">Base Attack: ${firstSearchedPoke.stats["base-attack"]}</p>
            <p class="pokeStatsStyle">Base Defense: ${firstSearchedPoke.stats["base-defense"]}</p>
        </div>
        
        
        `
        
        
  } else {
    alert("Please, insert a valid pokémon name")
  }



})



// segundo pokémon



const secondPokemonForm = document.getElementById("secondPokeForm")

secondPokemonForm.addEventListener("submit", (event) => { 
  event.preventDefault();           
    
    const secondSelectedPokemon = document.getElementById("pokeNameInputSecond").value.toLowerCase()    
    
    const secondSearchedPoke = pokemonDataList.find(pokemon => pokemon.name === secondSelectedPokemon) 
    
   
    if (secondSearchedPoke) {          
        // console.log("teste")
        
        const pokemonCardTwo = document.querySelector("#pokémon-card-two-container")
        let typePkm = ""
        secondSearchedPoke.type.forEach((type) => {
          typePkm += `<p class="type-style ${type}">${type}</p>`
        });
        pokemonCardTwo.innerHTML = `
        
        
                   
        <div class="pokémon-card" id="pokemon-card-two">
            <p id="secondPokeNum"> # ${secondSearchedPoke.num}</p>
            <img id="secondPokeImg" src="${secondSearchedPoke.img}">
            <p id="secondPokeName">${secondSearchedPoke.name.toUpperCase()}</p>
            <div class="pokeTypeContainer"><p id="secondPokeType" class="type-style">${typePkm}</p></div>
        </div>
        <div class="pokeStats" id="secondPokeStats">
            <p class="pokeStatsStyle" class="secondPokeHP">Max Health Points: ${secondSearchedPoke.stats["max-hp"]}</p>
            <p class="pokeStatsStyle">Max Combat Points: ${secondSearchedPoke.stats["max-cp"]}</p>
            <p class="pokeStatsStyle">Base Attack: ${secondSearchedPoke.stats["base-attack"]}</p>
            <p class="pokeStatsStyle">Base Defense: ${secondSearchedPoke.stats["base-defense"]}</p>
        </div>
        
        
        `
        
        
  } else {
    alert("Please, insert a valid pokémon name")
  }


})





