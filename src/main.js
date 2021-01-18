// import { alphabetOrderAZ } from './data.js';
// import { alphabetOrderZA } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// console.log(alphabetOrderAZ, data);


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


let orderByName = data.results;
let listOfCharacters = document.getElementById("listCharacters");

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
      <div class="backCardProperty">
        <div class="propertyFlex">
          <p class="propertyStyle">Status:</p>
          <p id="statusChar" class="cardText">${rickandmorty[i].status}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Specie: </p>
          <p id="specieChar" class="cardText">${rickandmorty[i].species}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Gender: </p>
          <p id="genderChar" class="cardText">${rickandmorty[i].gender}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Last known location: </p>
          <p id="locationChar" class="cardText">${rickandmorty[i].location.name}</p><br>
        </div>
      </div>
    </div>
    </div>
    </div>`;
    // console.log(rickandmorty[i]);
  }
  return list;
}
document.getElementById("listCharacters").innerHTML = charactersList();

// const alphabetOrderAZ = (a, b) => {
//   if (a.name < b.name){
//     return -1;
//   }
//   if (a.name > b.name){
//     return 1;
//   }
//   return 0;
// }
// data.results.sort(alphabetOrderAZ);
// console.log(1, data.results);

// Función para ordenar Z-A
// export const alphabetOrderZA = (a, b) => {
//   if (a.name < b.name){
//     return -1;
//   }
//   if (a.name > b.name){
//     return 1;
//   }
//   return 0;
// }
// data.results.reverse(alphabetOrderZA);
// console.log(2,data.results);

const orderFunctions = {

    orderAZ(orderByName) {
      let orderedResults = orderByName.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        { 
          return -1;
        }
      });
      console.log(1, orderedResults);
      return orderedResults;
    },

    orderZA(orderByName) {
      let orderedResults = orderByName.sort(function (a, b) {
        if (a.name < b.name){
          return 1;
        }
        {
          return -1;
        }
      });
      console.log(2, orderedResults);
      return orderedResults;
    },

    orderDefault(orderByName) {
      let orderedResults = orderByName.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }

        {
          return -1;
        }
      });
      console.log(3, orderedResults);
      return orderedResults;
    },
    
}


let select = document.getElementById("selectOrderValue");
select.addEventListener("change", function () {

  if (select.value === "AZorder") {
    listOfCharacters.innerHTML = "";
    let array = orderFunctions.orderAZ(orderByName);
    orderByName = array;
    return charactersList(orderByName);
  }

  else if (select.value === "ZAorder") {
    let array = orderFunctions.orderZA(orderByName);
    orderByName = array;
    return charactersList(orderByName);
  }

  else {
    let array = orderFunctions.orderDefault(orderByName);
    orderByName = array;
    return charactersList(orderByName)
  }

});