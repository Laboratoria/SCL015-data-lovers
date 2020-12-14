//import { example } from './data.js';
 //import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const botonEntrar=document.getElementById("BotonEntrar")
botonEntrar.addEventListener("click", entrar);
  
function entrar() {
   document.getElementById("Inicio").style.display="none";
   document.getElementById("Tablero").style.display= "block";
    
  }


const botonVolver=document.getElementById("BotonVolver")
botonVolver.addEventListener("click", volver);
  
function volver() {
   document.getElementById("Inicio").style.display="block";
   document.getElementById("Tablero").style.display= "none";
  }

console.log(example, data);


