//import { example } from './data.js';
// import data  from './data/pokemon.js'
import logic from './data.js'


//let dataInfo
let listPokemon= document.getElementById("dataList"); // seccion HTML para las cards
//const orderPoke = document.getElementById("orderPokemon")

// Imprimir un elemento en HTML. 
const htmlToElements= (html) => {
  let stencil = document.createElement('template');
  stencil.innerHTML = html; // .innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
  return stencil.content.firstChild; //Nodo.firstChild = devuelve el primer hijo del nodo
}

//data .JSON
fetch('https://luzciel.github.io/SCL015-data-lovers/src/data/pokemon/pokemon.json')
  .then(response => response.json() )
  .then(data => { 
    const dataPokemon = data.pokemon; // data pokemon del json
    console.log(dataPokemon);

    // orderPoke.addEventListener("change", () => { 
    //   console.log("hola", orderPoke.value);
    //   sortByAlphabet(dataPokemon, orderPoke) 
    //   printData(dataPokemon) }

  //Imprime las card de los Pokemones con Nombre y Imagen 
    const printData = (dataPokemonParameter) => {
      listPokemon.innerHTML ="";
      // console.log("data", dataPokemonParameter)
      for (let i=0; i<dataPokemonParameter.length; i++){
        let card = htmlToElements(`<div class ="all-card">
        <img src='${dataPokemonParameter[i].img}'/>
        <p>'${dataPokemonParameter[i].name}'</p></div>`);
        listPokemon.appendChild(card);
      } 
    }
    printData(dataPokemon); 

    //Ordenar AZ - ZA
    const orderPoke = document.getElementById("orderPokemon");
    orderPoke.addEventListener("change", () => {
      const sortByAlphabet = (dataPokemonParameter) => {
        const valueOrder = orderPoke.value;
        //console.log("entro en IF")
        if(valueOrder === "1"){ 
          //console.log("entro en 1")
          logic.orderAZ(dataPokemonParameter)
          //console.log(dataPokemonParameter);
        }
        if(valueOrder === "2"){
          //console.log("entro en 2")
          logic.orderZA(dataPokemonParameter)
         }
        }
    sortByAlphabet(dataPokemon)
    printData(dataPokemon)
      



        })
      })

      .catch(function(error) {
            return ('Hubo un problema con la petición Fetch:' + error.message);

        });
        
    