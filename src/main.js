import { toOrderAZ, toFilter, search } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
const rickandmorty = data.results;
//Función para crear el modal
function drawModal(element){
  document.getElementById("createModal").innerHTML=
 ` <img alt="imagen modal" class="modal-image" src="${element.image}"></img> 
 <h2>Nombre: ${element.name}</h2>
 <h2>Especie: ${element.species}</h2>
 <h2>Estado: ${element.status}</h2>
 <h2>Genero: ${element.gender}</h2`;
  window.location.href = "#openModal";
}
//Función para mostrar y ocultar páginas
function showPages(start, end){
  document.getElementById(start).style.display = "none";
  document.getElementById(end).style.display = "block";
}
//Función para dar evento de click al botón y que vaya a la página 2
function toPage2() {
  showPages("pages1", "pages2");
}
document.getElementById("enterButton").addEventListener("click", toPage2);
//Función para pintar la plantilla de la carta (el template genera dinámicamente html)
function drawCard(element) {
//Destructuración para usar solo los atributos que necesitamos
  let { name, image, } = element;
  let template = `<div class="card" >
        <img alt="imagen" class="card-image"  src="${image}" />
        <p class="card-name"> ${name}</p>
        </div>`;
  //Creamos el contenedor de la carta
  let cards = document.createElement("div");
  //Guardamos en una variable el template del html del div recién creado
  cards.className="cardsDinamicContainer"
  cards.innerHTML = template;
  let listCard = document.getElementById("cardsContainer");
  //Agregamos la carta a la lista de cartas
  listCard.appendChild(cards);
  //Agregamos el evento click a la carta para activar el modal
  cards.addEventListener("click", function () {
    drawModal(element);
  });
}
//Función para filtrar la data
function selectFunction() {
  let TheFiltersArray = rickandmorty;
  let filterGender = document.getElementById("selectGender").value;
  let filterSpecies = document.getElementById("selectSpecies").value;
  let orderAZ = document.getElementById("selectOrderAZ").value;
  let searchBar = document.getElementById("searchInput").value;
  //si el filtro no viene vacío se ejecuta la función filtrar, que devolverá el arreglo con los datos filtrados
  if (filterGender != "") {
    TheFiltersArray = toFilter(TheFiltersArray, "gender", filterGender);
  }
  if (filterSpecies != "") {
    TheFiltersArray = toFilter(TheFiltersArray, "species", filterSpecies);
  }
  if (orderAZ != "") {
    TheFiltersArray = toOrderAZ(TheFiltersArray, orderAZ);
  }
  if (searchBar != "") {
    TheFiltersArray = search(TheFiltersArray, searchBar);
  }
  //Limpiamos el contenedor de las cartas
  let cleanContainer = document.getElementById("cardsContainer");
  cleanContainer.innerHTML = "";
  //Recorremos el arreglo rickandmorty y pinta las cartas otra vez, pero con la data filtrada
  for (let i = 0; i < TheFiltersArray.length; i++){
    drawCard(TheFiltersArray[i]);
  }
}
selectFunction();
document.getElementById("selectGender").addEventListener("change", selectFunction);
document.getElementById("selectSpecies").addEventListener("change", selectFunction);
document.getElementById("selectOrderAZ").addEventListener("change", selectFunction);
document.getElementById("searchInput").addEventListener("keyup", selectFunction);