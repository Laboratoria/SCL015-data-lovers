import { example } from "./data.js";
// import data from './data/lol/lol.js';
// import data from "./data/pokemon/pokemon.js";
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

// creamos la funcion mostrar paginas
function showPages(start, end) {
  console.log(start, end);
  document.querySelector(start).style.display = "none";
  document.querySelector(end).style.display = "block";
}
// se crea funcion para dar click al boton y vaya a la pagina 2
function ir() {
  showPages("pages1", "pages2");
}
document.getElementById("enterbutton").addEventListener("click", ir);
// se crea funcion parar pintar carta
// function drawCard(obj){
//   let template=` <div class="card">
//   <div class="card-images">
//     <img src="${obj.image}" />
//   </div>
//   <div class="card-content">
//     <div class="card-title">${obj.name}</div>
//   </div>
// </div>
//   `
//   // creamos un elemento li
//   let li= document.createElement("li")
//   li.className="cards-item"
//   li.innerHTML= 
//   let list=document.getElementById("card_list")
// console.log(template);
// }
// drawCard(data.results[1])
// console.log(data.results)