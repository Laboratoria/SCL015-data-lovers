
/*export const order= (pokemons) => {s
  return 'OMG';
};*/

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
