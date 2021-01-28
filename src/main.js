
import data from './data/pokemon/pokemon.js';
import {filterTypes} from './data.js';

const pokemons = data.pokemon;
filterTypes(pokemons);

const cardContainer= document.getElementById('cardContainer');
document.getElementById("allPokemon").addEventListener('click',()=>{
    spacePokeballs.innerHTML = '';
  document.getElementById("btnInitial").style.display= "none";
  document.getElementById("cardContainer").style.display= "block"; 
    for(let i=0;i< pokemons.length;i++){
        document.getElementById("cardContainer").innerHTML+= `<div class="cards">${i}
        <h4>${(pokemons[i].name).toUpperCase(i)}</h4> <img src= "${pokemons[i].img}"> <p>${pokemons[i].type}</p></div>`;  
    }    
// const back= document.createElement("button");
// back.type="button;"
// back.addEventListener('click',function() {
//     back.setAttribute('id',back);
//     buttonBack.appendChild(back);
//     window.history.back();
//     }
//     ,false);
});

const pokemonTypes= ['psychic','ice','fairy','fighting','poison','grass','fire','normal','steel','rock','dark','ground','flying','water','bug','dragon','electric','ghost'];
const spacePokeballs= document.getElementById('spacePokeballs');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeballs").style.display= "block";
       
      pokemonTypes.forEach(typeOfPokemons=>{
       let smallPokeball= document.createElement('button');
       smallPokeball.type= 'button';
       smallPokeball.value= typeOfPokemons;
       smallPokeball.setAttribute('id',typeOfPokemons);
       smallPokeball.setAttribute('class', "miniP");
       spacePokeballs.appendChild(smallPokeball);
      });
    
    spacePokeballs.getElementById('typeOfPokemons').addEventListener('click',(pokemons,type)=>{
      spacePokeballs.innerHTML = '';
      for(let i=0;i< pokemons.length;i++){
        document.getElementById("spacePokeballs").innerHTML+= `<div class="cards">${i}
        <h4>${(pokemons[i].name).toUpperCase(i)}</h4> <img src= "${pokemons[i].img}"> <p>${pokemons[i].type}</p></div>`;  
    }    
    });
})
// spacePokeballs.appendChild(spaceFragment);
// const h2= document.createElement("h2");
// h2.innerHTML="Poke Tipo";
// spacePokeballs.appendChild(h2)