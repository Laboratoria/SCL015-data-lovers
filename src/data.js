//import data  from './data/pokemon/pokemon.js' // importar la data del data.js


export const orderAZ = (arrayPoke) => { 
  arrayPoke.sort(function(a, b) {
      if(a.name > b.name){
          return 1;
      }
  
      if (a.name < b.name) {
          return -1
      }
      });
  }

export const orderZA = (arrayPoke) => {    
    arrayPoke.sort(function(a, b) {
        if(a.name < b.name){
            return 1;
        }
    
        if (a.name > b.name) {
            return -1
        }
        });
    }

  export default {orderAZ, orderZA };

// const funciones = () => {
//   let pokemon = data.pokemon;
//   pokemon.sort(function(a, b) {
//     if(a.name > b.name){
//         return 1;
//     }

//     if (a.name < b.name) {
//         return -1
//     }
//     });
    
//   let sortdata = pokemon.sort() 
//   console.log (sortdata)
//   for (let i=0; i<sortdata.length; i++){
// }
// }

// const validator = { funciones }
// export default validator;
























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
