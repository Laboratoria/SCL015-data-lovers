
export const filterTypes= (pokemons,type)=>{
  let pokemonFilter=[]
    for (let index=0;index<pokemons.length;index++){
        let types= pokemons[index].type;
          if (types.includes(type)){
          pokemonFilter.push(pokemons[index]) 
        }
    }
  return pokemonFilter;  
  };
  
export const aZorder= (namepokemons)=>{
let orderPokemon= namepokemons.sort((dev,next)=>{
    if (dev.name < next.name){
          return -1;
        }
        if (dev.name > next.name){
          return 1;
        }
        return 0;
  });
    return orderPokemon
};
