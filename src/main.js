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

const charactersList = () => {
  //Declaro una variable para llamar la data desde rickandmorty.js
  const rickandmorty = data.results;
  //Declaro una variable para imprimir la lista de personajes
  let list = ""
  //Incio el bucle
  for (let i = 0; i < rickandmorty.length; i++) {
    list += `<div class= "cardContainer">
    <div id="rickandmorty" class="cardContainer-inner">
    <div class="frontCard">
      <img id="photo" class="photo" src="${rickandmorty[i].image}"/>
      <p id="nameChar" class="name-character">${rickandmorty[i].name}</p>
    </div>
    <div class="backCard">
    <p id="nameChar" class="nameStyle">${rickandmorty[i].name}</p>
    <p id="statusChar" class="cardText">
    ${rickandmorty[i].status + " - " + rickandmorty[i].species}</p>
    <p class="descriptionCard">Gender:</p>
    <p id="genderChar" class="cardText">${rickandmorty[i].gender}</p>
    <p class="descriptionCard">Last known location:</p>
    <p id="locationChar" class="cardText">${rickandmorty[i].location.name}</p>
    </div>
    </div>
    </div>`;
    // console.log(rickandmorty[i]);
  }
  return list;
}
document.getElementById("listCharacters").innerHTML = charactersList();
