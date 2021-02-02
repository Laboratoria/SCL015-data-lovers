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
export const orderPokemons= (pokemons) => {
let pokemonOrderAZ=[]
// let pokemonOrderZA=[]
    for (let index=0;index<pokemons.length;index++){
      let order=pokemons[index].name;
      if (order.sort =="A-Z"){
        pokemonOrderAZ.push(pokemons[index])

      }
      return pokemonOrderAZ;
    

      // else (order.reverse =="A-Z"){        
      //   pokemonOrderZA.push(pokemons[index])
      // }
      // return pokemonOrderZA;
    }  
}
