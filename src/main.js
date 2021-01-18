import orderFunctions from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// console.log(alphabetOrderAZ, data);


//---------FUNCION HIDDEN-----------------------------------
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


let printCharacters = data.results;
let listOfCharacters = document.getElementById("listCharacters");

//-------------LLAMAR LISTA DE PERSONAJES-----------------

const charactersList = () => {
  //Declaro una variable para imprimir la lista de personajes
  let list = "";
  //Incio el bucle
  for (let i = 0; i < printCharacters.length; i++) {
    list += `<div class= "cardContainer">
    <div id="printCharacters" class="cardContainer-inner">
    <div class="frontCard">
      <img id="photo" class="photo" src="${printCharacters[i].image}"/>
      <p id="nameChar" class="name-character">${printCharacters[i].name}</p>
    </div>
    <div class="backCard">
    <p id="nameChar" class="nameStyle">${printCharacters[i].name}</p>
      <div class="backCardProperty">
        <div class="propertyFlex">
          <p class="propertyStyle">Status:</p>
          <p id="statusChar" class="cardText">${printCharacters[i].status}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Specie: </p>
          <p id="specieChar" class="cardText">${printCharacters[i].species}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Gender: </p>
          <p id="genderChar" class="cardText">${printCharacters[i].gender}</p><br>
        </div>
        <div class="propertyFlex">
          <p class="propertyStyle">Last known location: </p>
          <p id="locationChar" class="cardText">${printCharacters[i].location.name}</p><br>
        </div>
      </div>
    </div>
    </div>
    </div>`;
    // console.log(printCharacters[i]);
  }
  return list;
}
document.getElementById("listCharacters").innerHTML = charactersList();


//------------------SELECT PARA ORDENAR----------------
let select = document.getElementById("selectOrderValue");
select.addEventListener("change", function () {

  if (select.value === "AZorder") {
    listOfCharacters.innerHTML = "";
    let array = orderFunctions.orderAZ(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
    document.getElementById("listCharacters").innerHTML = charactersList();
  }

  else if (select.value === "ZAorder") {
    let array = orderFunctions.orderZA(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
    document.getElementById("listCharacters").innerHTML = charactersList();
  }

  else {
    let array = orderFunctions.orderDefault(printCharacters);
    printCharacters = array;
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList();
  }

});