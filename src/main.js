import { ordenarAZ, filtrar } from "./data.js";
// import data from './data/lol/lol.js';
// import data from "./data/pokemon/pokemon.js";
import data from "./data/rickandmorty/rickandmorty.js";

//console.log(example, data);
const rickandmorty = data.results;
//console.log(rickandmorty)
for (let i = 0; i < rickandmorty.length; i++) {
  //console.log(rickandmorty[i]);
}

function drawmodal(element) {
  // console.log(element);
  document.getElementById("createmodal").innerHTML=
 ` <img alt="imagen modal" class="modal-image-style" src="${element.image}"></img> 
 <h2 class="modal-font-style">Nombre: ${element.name}</h2>
 <h2 class="modal-font-style">Especie: ${element.species}</h2>
 <h2 class="modal-font-style">Estado: ${element.status}</h2>
 <h2 class="modal-font-style">Genero: ${element.gender}</h2`;
  window.location.href = "#openModal";
}
// creamos la funcion mostrar paginas
function showPages(start, end) {
  // console.log(start, end);
  document.getElementById(start).style.display = "none";
  document.getElementById(end).style.display = "block";
}
// se crea funcion para dar click al boton y vaya a la pagina 2
function ir() {
  showPages("pages1", "pages2");
}
document.getElementById("enterbutton").addEventListener("click", ir);

// se crea funcion parar pintar carta (template genera dinamicamente un objeto html) creamos la plantilla de la carta
function drawCard(element) {
  //destructuracion para usar solo los atributos que necesito
  let { name, image } = element;

  let template = `<div class="card" >
        <img alt="imagen" class="image-style"  src="${image}" />
        <p class="name-style"> ${name}</p>
     
      </div>`;

  // creamos un elemento carta
  let cards = document.createElement("div");
  //le asignamos la variable template al html del div creado recien
  cards.className="contentcardunic"
  cards.innerHTML = template;

  let listcard = document.getElementById("cards-container");
  //se le agrega la card a la lista de tarjetas
  listcard.appendChild(cards);
  cards.addEventListener("click", function () {
    drawmodal(element);
  });
  // //recorre el arreglo rickandmorty y se pinta en pantalla
  // for(let i=0; i<rickandmorty.length;i++){
  //   console.log(rickandmorty[i]);
  //   drawCard(rickandmorty[i])
  // }
}
// se crea la funcion filtrar
function selectFunction() {
  //se crea la variable arrfilter que es igual al arreglo con todo el contenido de rickandmorty
  let ArrFilter = rickandmorty;
  //defino filter gender y tomo el valor del select genero
  let filtergender = document.getElementById("select_genero").value;

  let filterspecies = document.getElementById("select_especie").value;
  let ordenaz = document.getElementById("select_az").value;
  //si no viene vacio ejecuto la funcion filtrar que me devolvera  el arreglo con los datos filtrados
  if (filtergender != "") {
    ArrFilter = filtrar(ArrFilter, "gender", filtergender);
  }
  if (filterspecies != "") {
    ArrFilter = filtrar(ArrFilter, "species", filterspecies);
  }
  if (ordenaz != "") {
    ArrFilter = ordenarAZ(ArrFilter, ordenaz);
  }
  let listcard = document.getElementById("cards-container");
  listcard.innerHTML = ""; //limpia el contenedor del listcard
  //recorre el arreglo rickandmorty y se pinta en pantalla
  for (let i = 0; i < ArrFilter.length; i++) {
    // console.log(ArrFilter[i]);
    drawCard(ArrFilter[i]);
  }
  // let cards = document.getElementsByClassName("card");
  // for (let i = 0; i < cards.length; i++) {
  //    console.log('hola',cards[i]);
  //   cards[i].addEventListener("click", function () {
  //     showmodal(cards[i]);
  //   });
  // }
}
// function showmodal(elementoCard) {
//   console.log(elementoCard.dataset.id);
//   let dato_encontrado = encontrar(rickandmorty, "id", elementoCard.dataset.id);
//   window.location.href = "#openModal";
//   document.getElementById("modal_name").innerHTML =
//     "Nombre:" + dato_encontrado.name;
//   document.getElementById("modal_specie").innerHTML =
//     "Especie:" + dato_encontrado.species;
//   document.getElementById("modal_gender").innerHTML = dato_encontrado.gender;
//   document.getElementById("modal_status").innerHTML = dato_encontrado.status;
//   document.getElementById("modal_img").src = dato_encontrado.image;

// }
selectFunction();

document
  .getElementById("select_genero")
  .addEventListener("change", selectFunction);
document
  .getElementById("select_especie")
  .addEventListener("change", selectFunction);
document.getElementById("select_az").addEventListener("change", selectFunction);

// let modalBackground = document.querySelector(".modal-background");
// let modalClose = document.querySelector(".modal-close");

// modalClose.addEventListener("click", function () {
//   console.log("cerrar");
//   modalBackground.classList.remove("background-active");
// });
