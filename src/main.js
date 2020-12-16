//import { } from './data.js';
//import { example } from './data.js';
import data from './data/lol/lol.js';
let dataLol = data.data;
let arrayDataLol = Object.values(data.data); 
let containerData = document.getElementById("containerData")
const botonEntrar = document.getElementById("BotonEntrar")
botonEntrar.addEventListener("click", entrar);
 
function entrar() {

  document.getElementById("Inicio").style.display="none";
  document.getElementById("Tablero").style.display= "block";

  for (let i = 0 ; i < arrayDataLol.length; i++){
   let names = arrayDataLol[i].id;
 //  let imagenes = arrayDataLol[i].splash;
  // let tipo = arrayDataLol[i].tags;
   //let info = arrayDataLol[i].info;
  //console.log(names, imagenes);
  containerData.innerHTML += names;
 }
 }

const botonVolver=document.getElementById("BotonVolver")
botonVolver.addEventListener("click", volver);
 
function volver() {
  document.getElementById("Inicio").style.display="block";
  document.getElementById("Tablero").style.display= "none";
 }
