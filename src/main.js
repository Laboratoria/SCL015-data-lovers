import { example } from "./data.js";
// import data from './data/lol/lol.js';
// import data from "./data/pokemon/pokemon.js";
import data from "./data/rickandmorty/rickandmorty.js";

//console.log(example, data);
const rickandmorty = data.results;
//console.log(rickandmorty)
for (let i = 0; i<rickandmorty.length; i++) {
  //console.log(rickandmorty[i]);
}

// creamos la funcion mostrar paginas
function showPages(start, end) {
  console.log(start, end);
  document.getElementById(start).style.display = "none";
  document.getElementById(end).style.display = "block";
}
// se crea funcion para dar click al boton y vaya a la pagina 2
function ir() {
  showPages("pages1", "pages2");
}
document.getElementById("enterbutton").addEventListener("click", ir);

// se crea funcion parar pintar carta (template genera dinamicamente un objeto html) creamos la plantilla de la carta
function drawCard(obj) {
  //destructuracion para usar solo los atributos que necesito
  let { name, image } = obj;
  
  
 let template=`<div class="card">
        <img alt="imagen" class="image-style"  src="${image}" />
        <p class="name-style"> ${name}</p>
      </div>`;


 
  // creamos un elemento carta
  let cards = document.createElement("div");
   //le asignamos la variable template al html del div creado recien
  cards.innerHTML = template;

  let listcard = document.getElementById("cards-container");
  //se le agrega la cardado a la lista de tarjetas
  listcard.appendChild(cards);
  console.log(template)
 

}

// //recorre el arreglo rickandmorty y se pinta en pantalla
// for(let i=0; i<rickandmorty.length;i++){
//   console.log(rickandmorty[i]);
//   drawCard(rickandmorty[i])
// }

// se crea la funcion filtrar
function toFilter() {
  //se crea la variable arrfilter que es igual al arreglo con todo el contenido de rickandmorty
  let ArrFilter = rickandmorty;
  //defino filter gender y tomo el valor del select genero
  let filtergender = document.getElementById("select_genero").value;
  let filterspecies = document.getElementById("select_especie").value;
  let filteraz = document.getElementById("select_az").value;
  console.log(filtergender, filterspecies, filteraz);
  //si no viene vacio ejecuto el filtro de un objeto, si esta vacio me salto ese bloque de codigo.
  if (filtergender) {
    ArrFilter = ArrFilter.filter((elemento) => elemento.gender == filtergender);
  }
  if (filterspecies) {
    ArrFilter = ArrFilter.filter(
      (elemento) => elemento.species == filterspecies
    );
  }

  if (filteraz) {
    if (filteraz == 1) sortJSON(ArrFilter, "name", "asc");
    else sortJSON(ArrFilter, "name", "desc");
  }

  let listcard = document.getElementById("cards-container");
  listcard.innerHTML = ""; //limpia el contenedor del listcard
  //recorre el arreglo rickandmorty y se pinta en pantalla
  for (let i = 0; i < ArrFilter.length; i++) {
    // console.log(ArrFilter[i]);
    drawCard(ArrFilter[i]);
  }
}

toFilter();

document.getElementById("select_genero").addEventListener("change", toFilter);
document.getElementById("select_especie").addEventListener("change", toFilter);
document.getElementById("select_az").addEventListener("change", toFilter);

// rickandmorty.sort(function(a, b){
//   if(a.firstname < b.firstname) { return -1; }
//   if(a.firstname > b.firstname) { return 1; }
//   return 0;
// })

// ordena  un  objeto json(data)  segun la llave pasada como parametro(key) y segun el tipo de orden dado(orden)
function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
    var x = a[key],
      y = b[key];
    if (orden === "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    if (orden === "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}
