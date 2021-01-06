import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


//FUNCION HIDDEN-----------------------------------
document.getElementById("startButton")
  .addEventListener("click", function () {
    document.getElementById("welcomeScreen").hidden = true;
    document.getElementById("charactersScreen").hidden = false;
  }, false);

document.getElementById("returnButton")
  .addEventListener("click", function () {
    document.getElementById("charactersScreen").hidden = true;
    document.getElementById("welcomeScreen").hidden = false;
  }, false);

//LLAMAR LISTA DE PERSONAJES

function charactersList() {
  //Declaro una variable para llamar la data desde rickandmorty.js
  const rickandmorty = data.results;
  //Declaro una variable para imprimir la lista de personajes
  let list = ""
  //Incio el bucle
  for (let i = 0; i < rickandmorty.length; i++) {
    list += `<div class= "cardContainer">
    <div id="rickandmorty" class="cardContainer-inner">
    <div class="frontCard">
    <p id="nameChar">${rickandmorty[i].name}
    <img id="photo" class="photo" src="${rickandmorty[i].image}"/>
    </p>
    </div>
    <div class="backCard">
    <p id="statusChar" >${rickandmorty[i].status}</p>
    <p id="genderChar" >${rickandmorty[i].gender}</p>
    <p id="speciesChar" >${rickandmorty[i].species}</p>
    </div>
    </div>
    </div>`;
    // console.log(rickandmorty[i]);

  }
  return list;
}
document.getElementById("listCharacters").innerHTML = charactersList();

