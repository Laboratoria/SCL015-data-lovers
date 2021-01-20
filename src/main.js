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

//
let printCharacters = data.results;
let listOfCharacters = document.getElementById("listCharacters");

//-------------LLAMAR LISTA DE PERSONAJES-----------------

const charactersList = () => {
  //Declaro una variable para imprimir la lista de personajes
  let list = "";
  //Incio el bucle
  for (let i = 0; i < printCharacters.length; i++) {
    list += `
    <div class= "cardContainer">
      <div id="printCharacters" class="cardContainer-inner">
        <div class="frontCard">
          <img id="photo" class="photo" src="${printCharacters[i].image}"/>
          <p id="nameChar" class="name-frontcard">${printCharacters[i].name}</p>
        </div>
        <div class="backCard">
              <p id="nameChar" class="name-backcard">${printCharacters[i].name}</p>
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


//------------------CHECKSQUARE PARA FILTRAR----------------
  //Creamos un array vacío que llamarémos OnlyAlive
  let onlyAlive = [];
  //Recorremos el array printCharacters con el ciclo for
  for (let i = 0; i< printCharacters.length; i++) {
    //Creamos una variable para llamar a la especificación del filtro, en este caso el Status
    let currentStatus= printCharacters[i].status;
    //En cada repetición del ciclo preguntamos si el valor actual es igual a ''Alive''
    if (currentStatus === "Alive") {
      //En caso de serlo, se le agrega al Array el OnlyAlive
      onlyAlive.push(currentStatus)
    }
  }
  console.log(4, onlyAlive);

  let onlyDead = [];
  for (let i = 0; i< printCharacters.length; i++) {
    let currentStatus = printCharacters[i].status;
    if (currentStatus === "Dead") {
      onlyDead.push(currentStatus)
    }
  }
  // console.log(5, onlyDead);

  let onlyStatusUnk = [];
  for (let i = 0; i< printCharacters.length; i++) {
    let currentStatus = printCharacters[i].status;
    if (currentStatus === "unknown") {
      onlyStatusUnk.push(currentStatus)
    }
  }
  // console.log(6, onlyStatusUnk);

  let onlyHuman = [];
  for (let i = 0; i< printCharacters.length; i++) {
    let currentSpecie = printCharacters[i].species;
    if (currentSpecie === "Human") {
      onlyHuman.push(currentSpecie)
    }
  }
  // console.log(7, onlyHuman);

  let onlyAlien = [];
  for (let i = 0; i< printCharacters.length; i++) {
    let currentSpecie = printCharacters[i].species;
    if (currentSpecie === "Alien") {
      onlyAlien.push(currentSpecie)
    }
  }
  // console.log(8, onlyAlien);

  let onlySpecieUnk = [];
  for (let i = 0; i< printCharacters.length; i++) {
    let currentSpecie = printCharacters[i].species;
    if (currentSpecie === "unknown") {
      onlySpecieUnk.push(currentSpecie)
    }
  }
  // console.log(9, onlySpecieUnk);

