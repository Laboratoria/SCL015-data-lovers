
import data from './data/pokemon/pokemon.js';
import {filterTypes,aZorder} from './data.js';
const pokemons = data.pokemon;

// const print=()=>{
//   for(let i=0;i< pokemons.length;i++){
//   `<div class="cards">${i}
//      <h4>${(pokemons[i].name).toUpperCase(i)}</h4> <
//      img src= "${pokemons[i].img}">
//      <p>${pokemons[i].type}</p>
//   </div>`;  
//    }
//  }
//  console.log(print);
//  document.getElementById("cardContainer").innerHTML+=print;

 let tazos= (pokemons.forEach
 `<div class="cards">
 <h4>${(pokemons[i].name).toUpperCase(i)}</h4> <
 img src= "${pokemons[i].img}">
 <p>${pokemons[i].type}</p>
</div>`);  
 

let print =tazos(pokemons);
console.log(print);

  //   spacePokeballs.innerHTML = '';
  // document.getElementById("btnInitial").style.display= "none";
  // document.getElementById("cardContainer").style.display= "block"; 
  //   for(let i=0;i< pokemons.length;i++){
  //       document.getElementById("cardContainer").innerHTML+= `<div class="cards">${i}
  //       <h4>${(pokemons[i].name).toUpperCase(i)}</h4> <img src= "${pokemons[i].img}"> <p>${pokemons[i].type}</p></div>`;  
  //   }
  

const pokemonTypes= ['psychic','ice','fairy','fighting','poison','grass','fire','normal','steel','rock','dark','ground','flying','water','bug','dragon','electric','ghost'];
const spacePokeballs= document.getElementById('spacePokeballs');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeballs").style.display= "block";
       
       let tittleTwo= document.createElement('h2');
       tittleTwo.textContent= 'Poke Tipo';
       spacePokeballs.appendChild(tittleTwo);
      
      pokemonTypes.forEach(typeOfPokemons=>{
       let smallPokeball= document.createElement('button');
       smallPokeball.type= 'button';
       smallPokeball.value= typeOfPokemons;
       //smallPokeball.textContent=typeOfPokemons;
       smallPokeball.setAttribute('id',typeOfPokemons);
       smallPokeball.setAttribute('class', "miniP");
       spacePokeballs.appendChild(smallPokeball);

       smallPokeball.addEventListener('click',()=>{
         let filterPokemon= filterTypes(pokemons, event.target.value);
         console.log(filterPokemon);
       })
      });

      let backButton= document.createElement('button');
      backButton.type='button';
      backButton.setAttribute('id',"back");
      spacePokeballs.appendChild(backButton);

      backButton.addEventListener('click',()=>{
        spacePokeballs.innerHTML = '';
        
})});
// const back= document.createElement("button");
// back.type="button;"
// back.addEventListener('click',function() {
//     back.setAttribute('id',back);
//     buttonBack.appendChild(back);
//     window.history.back();
//     }
//     ,false);

pokemons.sort(aZorder);
console.log(1,pokemons);