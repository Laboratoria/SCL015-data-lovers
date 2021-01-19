
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;


const pokemonTypes= ['fire','normal'];
const spacePokeballs= document.getElementById('spacePokeballs');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeballs").style.display= "block";
    const spaceFragment= document.createDocumentFragment();
   console.log(pokemonTypes);
   
;    pokemonTypes.forEach(typeOfPokemons=>{
        let smallPokeball= document.createElement('button');
        console.log(smallPokeball);
        smallPokeball.type= 'button';
        smallPokeball.value= typeOfPokemons;
        smallPokeball.textContent= typeOfPokemons;
        smallPokeball.setAttribute('id',typeOfPokemons);
        smallPokeball.setAttribute('class', "miniP");
console.log(smallPokeball);
        spaceFragment.appendChild(smallPokeball);
        console.log(spaceFragment);
    });
   
spacePokeballs.appendChild(spaceFragment);
console.log(spacePokeballs);
})



//llamo e invoco las funciones 
//DOM - tomo los valores 
/*creacion de documento html dinamico*/