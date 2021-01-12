
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;

const spacePokeballs=document.getElementById('spacePokeballs');

document.getElementById('button').addEventListener("click",function(){
console.log(spacePokeballs);


let smallPokeball= document.createElement('button');
smallPokeball.Type= 'button';
smallPokeball.value='showTypes';

//smallPokeball.addEventListener('click',showTypes,false);//

spacePokeballs.appendChild(smallPokeball);







})
 
//llamo e invoco las funciones 
//DOM - tomo los valores 
// creacion de documento html dinamico