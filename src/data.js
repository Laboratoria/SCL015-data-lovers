//import data  from './data/pokemon/pokemon.js' // importar la data del data.js

const orderAZ = (arrayPoke) => { 
    let orderIndicatorName = arrayPoke.sort(function(a, b) {
      if(a.name > b.name){
          return 1;
      }
  
      if (a.name < b.name) {
          return -1
      }
      }); 
  return orderIndicatorName;
  }


const orderZA = (arrayPoke) => {    
    const orderIndicatorName = arrayPoke.sort(function(a, b) {
        if(a.name < b.name){
            return 1;
        }
        if (a.name > b.name) {
            return -1
        }
        });
        return orderIndicatorName;
    }
    
  export default {orderAZ, orderZA };





// const orderAZ = (arrayPoke) => { 
//   arrayPoke.sort(function(a, b) {
//       if(a.name > b.name){
//           return 1;
//       }
  
//       if (a.name < b.name) {
//           return -1
//       }
//       });
//   }
















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
