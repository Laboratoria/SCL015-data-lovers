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

 export const filterTypes= (pokemons)=>{
// espacio que contiene los distintos tipos (los elementos)
// let space = "";
    for (let index=0;index<pokemons.length;index++){
        let position= pokemons[index].type;
        //console.log (position);
        //console.log (typeof(position));
        if (position.includes("water")){
            console.log("hola");
        }
          //  console.log(pokemons[index].name);
          //console.log(position);
        //}

   // console.log(pokemons[index].type);
    }
    
//console.log(pokemones[index].name);
}

export const helloPokemons= (pokemons) => {
  pokemons.forEach(eachPokemons =>{
    console.log(eachPokemons.name)
  });
}