// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};
import data from './data/lol/lol.js';
//export const anotherExample = () => {
  //return 'OMG';
//};
export const ordenar = () => {
  let opcionSelect = document.getElementById("sltOrden").value
        console.log(opcionSelect);

  let arrayDataLol = Object.values(data.data); 

       
       let datosOrdenados = arrayDataLol.sort((el1,el2) =>{
         return (el1.name > el2.name) ? - 1 : 1
      
       })
        console.log(datosOrdenados);
  }
     