
import data from './data/pokemon/pokemon.js';

//en esta función queremos que al presionar pokebola de agua, apareceran los de tipo agua
const pokemons = data.pokemon;

function filterWater(){
// espacio que contiene los distintos tipos (los elementos)
// let space = "";
    for (let index=0;index<pokemons.length;index++){
        let position= pokemons[index].type;
        console.log (position);
        console.log (typeof(position));
        if (position.includes("fire")){
            console.log("hola");
        }
          //  console.log(pokemons[index].name);
          //console.log(position);
        //}

   // console.log(pokemons[index].type);
    }
    
//console.log(pokemones[index].name);
}
filterWater(pokemons);



 
//llamo e invoco las funciones 
//DOM - tomo los valores 
// creacion de documento