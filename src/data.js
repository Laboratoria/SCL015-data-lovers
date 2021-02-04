

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
 

/*export const ordenIn= (pokemons) =>{
      pokemons.sort((nameA, nameB)=>{
    return nameA.name + nameB.name;
  })};
console.log(ordenIn);
;

export const ordenIn= (pokemons)=>{pokemons.sort(function(prev,next){
  if (prev.name>next.name){
  return 1;
  }{
  return -1;
  }
  });
  console.log(3,ordenIn)
  return ordenIn;
  
  }

/*export const orderPokemons= (pokemons,name) => {
  let pokemonOrderAZ=[]
  // let pokemonOrderZA=[]
      for (let index=0;index<pokemons.length;index++){
        let order=pokemons[index].name;
        if (order.sort =="A-Z"){
          pokemonOrderAZ.includes(name);
          pokemonOrderAZ.push(pokemons[index])
          
        
        }
        return pokemonOrderAZ;
    
      }  
  }*/
