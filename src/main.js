
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;

const spacePokeballs=document.getElementById('spacePokeballs');
function ocultar() {
    
}
const title = document.createComment("PokeTipo");
document.getElementById('btn_types').addEventListener("click",function () {
    document.getElementById("btn_initial").hidden = true;
    document.getElementById("spacePokeballs").hidden = false;
    
},false);
console.log(title);


let smallPokeball= document.createElement('button');
smallPokeball.Type= 'button';
smallPokeball.value='showTypes';

//smallPokeball.addEventListener('click',showTypes,false);//

spacePokeballs.appendChild(smallPokeball);





//llamo e invoco las funciones 
//DOM - tomo los valores 
// creacion de documento html dinamico