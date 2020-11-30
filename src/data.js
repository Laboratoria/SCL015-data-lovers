//import data  from './data/pokemon/pokemon.js' // importar la data del data
//const datapoke= data.pokemon;
let pokemon = [
    {name: "charmander", type: ["fire"]},
    {name: "pikachu", type: [ "electric"]},
    {name: "raichu", type: [ "electric"] },
    {name: "bulbasaur", type: [ "grass","poison"]},
  ]

//FUNCION ORDENAR de la A a  la Z
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
//FUNCION ORDENAR de la Z a la A
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
    //FUNCION FILTRAR
    const filterData = (arrayPoke, typePoke) => {
        const allFilter = arrayPoke.filter(arrayPokeUnitario => { //arrayPokeUnitario es toda la data de un solo pokemon        
            return arrayPokeUnitario.type.includes(typePoke);//includes devuelve verdadero y falso, Aqui le pido que compare si encuentra algo con las mismas caracteristicas de tipo
        })    
        return allFilter;
    }      
    //CALCULAR %
    const computeData = (arrayPoke, typePoke) => {
        let percentajeByType = [];         
         for (let i = 0; i < arrayPoke.length; i++) {           
          if (arrayPoke[i].type.includes(typePoke)) { 
            percentajeByType.push(arrayPoke[i].type);            
          }
        }
        return ((percentajeByType.length) / 251 * 100).toFixed(1) + '%';
    };
    console.log(computeData(pokemon,'electric'))
  export default {orderAZ, orderZA, filterData,computeData}; 