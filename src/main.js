//import { } from './data.js';
//import { example } from './data.js';
//import data from './data/lol/lol.js';
//let dataLol = data.data;
import { ordenar } from './data.js';
import data from './data/lol/lol.js';


let arrayDataLol = Object.values(data.data); 
let containerData = document.getElementById("containerData")
const botonEntrar = document.getElementById("BotonEntrar")
const selectAz = document.getElementById("sltOrden")
botonEntrar.addEventListener("click", entrar);

function entrar() {

   document.getElementById("Inicio").style.display="none";
   document.getElementById("Tablero").style.display= "block";

   //let listaData = "";
   var obj = document.getElementById("containerData");
   for(let i = 0; i < arrayDataLol.length; i++){
    // let data = arrayDataLol[i].id;
    obj.innerHTML += `<div class="card">
    <img class="splash" src="${arrayDataLol[i].splash}"><div class="char-name">` + arrayDataLol[i].name + `</div>
  </div>`;
 //return listaData;
}

}

selectAz.addEventListener("change", ordenar);

const botonVolver=document.getElementById("BotonVolver")
botonVolver.addEventListener("click", volver);
 
function volver() {
  document.getElementById("Inicio").style.display="block";
  document.getElementById("Tablero").style.display= "none";
 }

console.log(example, data);