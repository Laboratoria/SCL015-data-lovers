// //Función para ordenar A-Z

const orderFunctions = {

  orderAZ(printCharacters) {
    let orderedResults = printCharacters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      { 
        return -1;
      }
    });
    // console.log(1, orderedResults);
    return orderedResults;
  },

  orderZA(printCharacters) {
    let orderedResults = printCharacters.sort(function (a, b) {
      if (a.name < b.name){
        return 1;
      }
      {
        return -1;
      }
    });
    // console.log(2, orderedResults);
    return orderedResults;
  },

  orderDefault(printCharacters) {
    let orderedResults = printCharacters.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      {
        return -1;
      }
    });
    // console.log(3, orderedResults);
    return orderedResults;
  },

  statusFunction(printCharacters, status){
    let onlyStatus = printCharacters.filter((character) => {
    return character.status === status;
    });
    // console.log(onlyStatus);
    return onlyStatus;
  },

  specieFunction(printCharacters, species){
    let onlySpecies = printCharacters.filter((character) => {
    return character.species === species;
    });
    // console.log(onlySpecies);
    return onlySpecies;
  }
}
export default orderFunctions
