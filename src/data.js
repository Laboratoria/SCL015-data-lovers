// //Función para ordenar A-Z

// export const alphabetOrderAZ = (a, b) => {
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
//   if (a.name > b.name){
//     return 1;
//   }
//   if (a.name < b.name){
//     return -1;
//   }
//   return 0;
// }
// data.results.sort(alphabetOrderZA);
// console.log(2,data.results);

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
    console.log(1, orderedResults);
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
    console.log(2, orderedResults);
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
    console.log(3, orderedResults);
    return orderedResults;
  },
}

export default orderFunctions