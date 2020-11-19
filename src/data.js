//import data  from './data/pokemon/pokemon.js' // importar la data del data.js


const orderAZ = (arrayPoke) => { 
  arrayPoke.sort(function(a, b) {
      if(a.name > b.name){
          return 1;
      }
  
      if (a.name < b.name) {
          return -1
      }
      });
  }

const orderZA = (arrayPoke) => {    
    arrayPoke.sort(function(a, b) {
        if(a.name < b.name){
            return 1;
        }
    
        if (a.name > b.name) {
            return -1
        }
        });
    }
    console.log(typeof orderAZ)
    
  export default {orderAZ, orderZA };






















// import data  from './data/pokemon.js'

// const  pokemon = data.pokemon; 
// // estas funciones son de ejemplo

// // export const example = () => {
// //   return 'example';
// // };

// // export const anotherExample = () => {
// //   return 'OMG';
// // };

// let ordenaz = document.getElementById("clickme");
// ordenaz.addEventListener("click", function (a, b) {
//     if(a.name > b.name){
//         return 1;
//     }

//     if (a.name < b.name) {
//         return -1
//     }

//     return 0;

// });



// // pokemon.sort(function(a, b) {
// //   if(a.name > b.name){
// //       return 1;
// //   }

// //   if (a.name < b.name) {
// //       return -1
// //   }

// //   return 0;
// // });

// // console.log(pokemon);*/
