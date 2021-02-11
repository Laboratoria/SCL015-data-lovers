
import data from './data/pokemon/pokemon.js';
import {filterTypes, aZorder} from './data.js';

const pokemons = data.pokemon;
console.log(pokemons,{aZorder});
// pokemons.sort(aZorder);

const printPokemon= (arrayPokemons)=>{
  let tazo="";
  for(let i=0;i< arrayPokemons.length;i++){
    tazo += `
    <div class="cards">${i}
    <h4>${(arrayPokemons[i].name).toUpperCase(i)}</h4>
    <img src= "${arrayPokemons[i].img}">
    <p>${arrayPokemons[i].type}</p></div>
    `;
  }
    return tazo;  
}


document.getElementById("allPokemon").addEventListener('click', ()=>{
document.getElementById("btnInitial").style.display= "none";
document.getElementById("cardContainer").style.display= "block"; 
document.getElementById("spacePokeball").style.display= "none";
document.getElementById("back").style.display="block";
let buttonTazo=`
<select value= "select" id="selectOrder" class="selectAZ" name="selectAZ">
<option selected disabled>Ordena</option>
<option value="orderAZ" id="orderAZ">Ordena A - Z</option>
<option value="order Z-A" id="orderZA">Ordena Z - A</option>
</select>
`;
  //funcion para el select... llamando a la funcion de ordenar 
    });


const pokemonTypes= ['psychic','ice','fairy','fighting','poison','grass','fire','normal','steel','rock','dark','ground','flying','water','bug','dragon','electric','ghost'];
const spacePokeballs= document.getElementById('spacePokeball');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeball").style.display= "block";
    document.getElementById("back").style.display="block";
       
       let tittleTwo= document.createElement('h2');
       tittleTwo.textContent= 'Poke Tipo';
       spacePokeballs.appendChild(tittleTwo);
      
      pokemonTypes.forEach(typeOfPokemons=>{
       let smallPokeball= document.createElement('button');
       smallPokeball.type= 'button';
       smallPokeball.value= typeOfPokemons;
      //  smallPokeball.textContent=typeOfPokemons;
       smallPokeball.setAttribute('id',typeOfPokemons);
       smallPokeball.setAttribute('class', "miniP");
       spacePokeballs.appendChild(smallPokeball);

       smallPokeball.addEventListener('click',()=>{
         spacePokeballs.innerHTML='';

         let filterPokemon= filterTypes(pokemons, event.target.value);
         const printPokemonFilter= printPokemon(filterPokemon);

         document.getElementById("spacePokeball").innerHTML=printPokemonFilter;
       })
       
      });
      
      // let backButton= document.createElement('input');
      // backButton.type='button';
      // backButton.setAttribute('id',"back");
      // backButton.setAttribute('class',"backButton");
      // spacePokeballs.appendChild(backButton);

      // backButton.addEventListener('click',() =>{
      //   spacePokeballs.innerHTML= '';
      //   document.getElementById("btnInitial").style.display= "block";
      //   // document.getElementById("spacePokeball").style.display= "none";
      // });
});

console.log(1,pokemons);