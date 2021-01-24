
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;

const cardContainer= document.getElementById('cardContainer');
document.getElementById("allPokemon").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("cardContainer").style.display= "block"; 
    const contDivCard= document.createElement("div");
    contDivCard.type="div";
    contDivCard.value="card";
    contDivCard.setAttribute('id','cards');
    contDivCard.setAttribute('class','cards');
  
});

const pokemonTypes= ['fire','normal','acero','hada','hielo','lucha','planta','posion','psiquico','roca','siniestro','tierra','volador','agua','bicho','dragon','electrico','fantasma'];
const spacePokeballs= document.getElementById('spacePokeballs');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeballs").style.display= "block";
    // document.getElementsByClassName("miniP").style.display="block";
    const spaceFragment= document.createDocumentFragment();
   
    // console.log(pokemonTypes);
   
     pokemonTypes.forEach(typeOfPokemons=>{
        let smallPokeball= document.createElement('button');
        // console.log(smallPokeball);
        
        smallPokeball.type= 'button';
        smallPokeball.value= typeOfPokemons;
        smallPokeball.setAttribute('id',typeOfPokemons);
        smallPokeball.setAttribute('class', "miniP");
console.log(smallPokeball);
        spaceFragment.appendChild(smallPokeball);
        // console.log(spaceFragment);
        
    });
   
spacePokeballs.appendChild(spaceFragment);
// console.log(pokemons);
const h2= document.createElement("h2");
h2.innerHTML="Poke Tipo";
spacePokeballs.appendChild(h2);

})



//llamo e invoco las funciones 
//DOM - tomo los valores 
/*creacion de documento html dinamico*/