// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
import data from './data/rickandmorty/rickandmorty.js';

//Función para ordenar A-Z

export const alphabetOrderAZ = (a, b) => {
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  return 0;
}
data.results.sort(alphabetOrderAZ);
console.log(1,data.results);

//Función para ordenar Z-A
export const alphabetOrderZA = (a, b) => {
  if (a.name > b.name){
    return 1;
  }
  if (a.name < b.name){
    return -1;
  }
  return 0;
}
data.results.sort(alphabetOrderZA);
console.log(2,data.results);