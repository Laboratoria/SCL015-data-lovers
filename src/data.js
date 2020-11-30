// import data  from './data/pokemon/pokemon.js' // importar la data del data
// const datapoke= data.pokemon;

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
        let tipoPorcen = [];
        for (let i = 0; i < arrayPoke.length; i++) {
          for (let x = 0; x < arrayPoke[i].type.length; x++) {
            if (arrayPoke[i].type[x] === typePoke) {
              tipoPorcen.push(arrayPoke[i].type[x]);
              //console.log(tipoPorcen);
            }
          }
        }
        return ('El porcentaje del pokemon de tipo ' + typePoke + ' es: ' + ((tipoPorcen.length) / 151 * 100) + '%');
      };


  export default {orderAZ, orderZA, filterData,computeData };