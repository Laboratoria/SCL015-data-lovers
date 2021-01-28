// estas funciones son de ejemplo
//import {pokemons} from './main.js';
/*export const filterTypes = () => {
  return 'pokemons';
};

export const  = () => {s
  return 'OMG';
};*/

// creo las funciones para filtrar y ordenar
//en esta función queremos que al presionar pokebola de agua, apareceran los de tipo agua

 export const filterTypes= (pokemons,type)=>{
// espacio que contiene los distintos tipos (los elementos)
// let space = "";
let pokemonfilter=[]
    for (let index=0;index<pokemons.length;index++){
        let types= pokemons[index].type;
        
        //console.log (typeof(position));
        if (types.includes(type)){
          pokemonfilter.push(pokemons[index]) 
          // console.log(pokemons[index]);
        }
          
    }
  return pokemonfilter;  
//console.log(pokemones[index].name);
};