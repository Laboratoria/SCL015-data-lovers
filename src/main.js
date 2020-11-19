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
    //console.log("hola", dataPokemon);
    
    //console.log("hola", printData(dataPokemon));

    // orderPoke.addEventListener("change", () => { 
    //   console.log("hola", orderPoke.value);
    //   sortByAlphabet(dataPokemon, orderPoke) 
    //   printData(dataPokemon) }

  //Imprime las card de los Pokemones con Nombre y Imagen 
    const printData = (dataPokemonParameter) => {
      listPokemon.innerHTML ="";
      console.log("data", dataPokemonParameter)
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
        
      // dataInfo = data.pokemon; // variable que contiene toda la data pokemon del json
      // dataOrden.ordenar(dataInfo)
      // //console.log(dataInfo[0].name); 
      // const listPokemon = document.getElementById("dataList");
      // for (let i=0; i<dataInfo.length; i++){
      //   let card = htmlToElements(`<div class ="all-card">
      //   <img src='${dataInfo[i].img}'/>
      //   <p>'${dataInfo[i].name}'</p></div>`);
      //   listPokemon.appendChild(card);
      // } 



      // dataInfo = data.pokemon; // variable que contiene toda la data pokemon del json
  //console.log(dataInfo[0].name);
    // for(let i= 0; i < dataInfo.length; ++i) {
    // //console.log(dataInfo[i].img)
    // let card = htmlToElements(`<div class ="all-card">
    // <img src='${dataInfo[i].img}'/>
    // <p>'${dataInfo[i].name}'</p></div>`);
    //   //console.log(card);
    //   listPokemon.appendChild(card);
    // }

//console.log(dataInfo.name.sort())


  // const orderPoke = document.getElementById("orderPokemon").value; 
  // const sortByAlphabet = () => {
     
  // }


// fetch('https://luzciel.github.io/SCL015-data-lovers/src/data/pokemon/pokemon.json')
//   .then(response => response.json() )
// .then(data => {
//  <p> ${data.pokemon[i].name}</p>

//     let primerPokemon= document.getElementById("orden")
//     primerPokemon.innerHTML= `
//     <img src='${data.pokemon[0].img}' />
//     <p> ${data.pokemon[0].name}</p>
//     `
//     console.log(data.pokemon[0].name)
//   })
