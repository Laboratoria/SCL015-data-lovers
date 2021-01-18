
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;

const spacePokeballs=document.getElementById('spacePokeballs');

function ocultar() {
document.getElementById('btnTypes').addEventListener("click",function () {
    document.getElementById("btnInitial").hidden = true;
    document.getElementById("spacePokeballs").hidden = false;
    
},false);
}

//llamo e invoco las funciones 
//DOM - tomo los valores 
// creacion de documento html dinamico