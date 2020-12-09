import { example } from './data.js';
 import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const botonEntrar=document.getElementById("Entrar")
botonEntrar.addEventListener("click", entrar);
//otorga un evento click a ingresar

  function entrar() {
   document.getElementById("Entrar").style.display="none";
   document.getElementById("Inicio").style.display="none";
   document.getElementById("Tablero").style.display= "block";
    //escondo y muestro pagina
  }

console.log(example, data);
