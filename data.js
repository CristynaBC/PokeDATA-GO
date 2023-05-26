


//primeira função: ordernar em ordem alfabética
export const sortByName = (order, pokemones) => {
  const sortedPokemonsByName = [...pokemones].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (order === 'a-z') {
      return nameA.localeCompare(nameB);
    } else if (order === 'z-a') {
      return nameB.localeCompare(nameA);
    } 
    
  });

  return sortedPokemonsByName;
}




// Segunda função, ordenar pelo número da pokédex (mesma lógica da anterior, só muda o parâmetro de name pra num)
export const sortByNum = (order, pokemones) => {
  const sortedPokemonsByNum = [...pokemones].sort((a, b) => {
    const numA = a.num;
    const numB = b.num;
    
    if (order === 'asc') {
      return numA - numB;
    } else if (order === 'desc') {
      return numB - numA;
    }
  });

  return sortedPokemonsByNum;
}





//terceira função: Filtrar por tipo


export const filterByType = (typeInput, pokemones) => {
  const filteredPokemons = pokemones.filter((pokemon) => {
    return pokemon.type.includes(typeInput)
  })
  return filteredPokemons;
}


//quarta função, procurar por nome



export const searchByName = (name, pokemones) => {
  const filteredByName = pokemones.filter((pokemon) => {
    return pokemon.name.includes(name)

  })

  return filteredByName

}