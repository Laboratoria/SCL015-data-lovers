import  _data  from './data.js';

// import data from './data/pokemon/pokemon.js';

let dataInfo

// funcion para crear e Imprimir un elemento en HTML. Un <template> es un elemento que se utiliza 
//para declarar fragmentos de HTML que se pueden utilizar en scripts.
const htmlToElements= (html) => {
  let stencil = document.createElement('template');
  stencil.innerHTML = html; // .innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
  return stencil.content.firstChild; //Nodo.firstChild = propiedad que devuelve el primer hijo del nodo en el árbol
}

function pokemonesEnPantalla (_dataInfo){ 
    let listPokemon= document.getElementById("dataList"); // seccion en HTML donde se introduciran las cards de los pokemones
    for(let i= 0; i < _dataInfo.length; ++i) {
        //console.log(dataInfo[i].img)
        let card = htmlToElements(`<div class ="all-card">
        <img src='${_dataInfo[i].img}'/>
        <p>'${_dataInfo[i].name}'</p></div>`);
        //console.log(card);
        listPokemon.appendChild(card);
    }
}

fetch('https://luzciel.github.io/SCL015-data-lovers/src/data/pokemon/pokemon.json')
  .then(response => response.json() )
  .then(data => {  
     dataInfo = data.pokemon; // variable que contiene toda la data pokemon del json
     pokemonesEnPantalla (dataInfo)//estoy llamando la funcion pokemones en pantalla a la cual le paso como parametro todo lo que esta en la data info
   })





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
