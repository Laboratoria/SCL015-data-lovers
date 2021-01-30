import data from './data/rickandmorty/rickandmorty.js';
import orderFunctions from './data.js';

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
//--------------------------------------------------------
let printCharacters = data.results;
const listOfCharacters = document.getElementById("listCharacters");
const searchBar = document.getElementById("searchBar");
//-------------LLAMAR LISTA DE PERSONAJES-----------------

const charactersList = (characters) => {
  //Declaro una variable para imprimir la lista de personajes
  let list = "";
  document.getElementById("listCharacters").innerHTML = "";
  //Incio el bucle
  for (let i = 0; i < characters.length; i++) {
    list += `
    <div class= "cardContainer">
      <div id="printCharacters" class="cardContainer-inner">
        <div class="frontCard">
          <img id="photo" class="photo" src="${characters[i].image}"/>
          <div class="nametag">
          <p id="nameChar" class="name-frontcard">${characters[i].name}</p>
          </div>
        </div>
        <div class="backCard">
              <p id="nameChar" class="name-backcard">${characters[i].name}</p>
            <div class="infoChar"> 
              <div class="propertyFlex">
              <p class="propertyStyle">Status:</p>
              <p id="statusChar" class="cardText">${characters[i].status}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Specie: </p>
              <p id="specieChar" class="cardText">${characters[i].species}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Gender: </p>
              <p id="genderChar" class="cardText">${characters[i].gender}</p><br>
            </div>
            </div>
        </div>
      </div>
    </div>`;
    // console.log(characters[i]);
  }
  document.getElementById("listCharacters").innerHTML = list;
}
charactersList(printCharacters);

//------------------SELECT PARA ORDENAR----------------
let select = document.getElementById("selectOrderValue");
select.addEventListener("change", function () {

  if (select.value === "AZorder") {
    listOfCharacters.innerHTML = "";
    let array = orderFunctions.orderAZ(printCharacters);
    printCharacters = array;
    charactersList(printCharacters); 
  }
  else if (select.value === "ZAorder") {
    let array = orderFunctions.orderZA(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
  }
  else {
    let array = orderFunctions.orderDefault(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
  }
});

//------------------------SEARCH------------------------

searchBar.addEventListener('keyup', (e) => {
  const searchTarget = e.target.value;
  let searchData = orderFunctions.searchFunction(printCharacters, searchTarget);
  charactersList(searchData);
});
//------------------CHECKSQUARE PARA FILTRAR----------------

const checkAlive = document.querySelector('#aliveCheck');
checkAlive.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let status = "Alive";
    let onlyAlive = orderFunctions.statusFunction(printCharacters, status);
    charactersList(onlyAlive);
  } else {
    charactersList(printCharacters);
  }
});

const checkDead = document.querySelector('#deadCheck');
checkDead.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let status = "Dead";
    let onlyDead = orderFunctions.statusFunction(printCharacters, status);
    charactersList(onlyDead);
  } else {
    charactersList(printCharacters)
  }
});

const checkUnkStatus = document.querySelector('#unknownStatusCheck');
checkUnkStatus.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let status = "unknown";
    let onlyUnkStatus = orderFunctions.statusFunction(printCharacters, status);
    charactersList(onlyUnkStatus);
  } else {
    charactersList(printCharacters)
  }
});

const checkHuman = document.querySelector('#humanCheck');
checkHuman.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let species = "Human";
    let onlyHuman = orderFunctions.specieFunction(printCharacters, species);
    charactersList(onlyHuman);
  } else {
    charactersList(printCharacters)
  }
});

const checkAlien = document.querySelector('#alienCheck');
checkAlien.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let species = "Alien";
    let onlyAlien = orderFunctions.specieFunction(printCharacters, species);
    charactersList(onlyAlien);
  } else {
    charactersList(printCharacters)
  }
});


const checkUnkSpecie = document.querySelector('#unknownSpecieCheck');
checkUnkSpecie.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    listOfCharacters.innerHTML = "";
    let species = "unknown";
    let unkSpecie = orderFunctions.specieFunction(printCharacters, species);
    charactersList(unkSpecie);
  } else {
    charactersList(printCharacters)
  }
});