//import { example } from './data.js';
// import data  from './data/pokemon.js'
import logic from './data.js'
let listPokemon= document.getElementById("dataList"); // seccion HTML para las cards
let contenedorModal= document.getElementById("modal"); //seccion HTML para el modal

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
    //Imprime las card de los Pokemones con Nombre y Imagen 
    const printData = (dataPokemonParameter) => {
      listPokemon.innerHTML ="";      
      for (let i=0; i<dataPokemonParameter.length; i++){
        let card = htmlToElements(
          `<div class ="all-card">
           <img src='${dataPokemonParameter[i].img}'/>
            <p>${dataPokemonParameter[i].name}</p>
          </div>`);
        listPokemon.appendChild(card);
        //aqui estoy imprimiendo la carta de un pokemon, para que al hacer click se imprima una tarjeta con la informacion(el modal)
        card.addEventListener ("click",function() {
          printModal(dataPokemonParameter[i])
          contenedorModal.style.display = "block";
        })
      } 
    }
    printData(dataPokemon); 
    //ORDENAR AZ - ZA
    const orderPoke = document.getElementById("orderPokemon");
    orderPoke.addEventListener("change", () => { //agregamos el evento "change" para que al seleccionar alguna de las opciones, se emplee la funcion ordenar
      const sortByAlphabet = (dataPokemonParameter) => {
        const valueOrder = orderPoke.value;  
        if(valueOrder === "1"){           
          logic.orderAZ(dataPokemonParameter)
        }
        if(valueOrder === "2"){          
          logic.orderZA(dataPokemonParameter)
        }
      }
    sortByAlphabet(dataPokemon)
    printData(dataPokemon)    //dataPokemon es una variable local dentro de fetch
        })
       //FILTRAR POR TIPO   
    const filterPoke = document.getElementById("filterPokemon");
    filterPoke.addEventListener("change", (event) => { //"event" es el parametro que indica que fue lo que cambio - agrego el evento "change",para que al seleccionar la opcion de tipo se ejecute la funcion
      //creo una variable donde se agrupen las coincidencias de tipo de pokemon       
     let pokemonMatches = logic.filterData(dataPokemon,(event.target.value)) // ".target" indica que elemteno se esta cambiando en el select que cambia - con ".value" extraigo el valor del select        
        printData(pokemonMatches)
        }) 
    //MODAL
  

     const printModal = (arrayPokeUnitario) => {
      contenedorModal.innerHTML ="";
      //console.log("data", dataPokemonParameter)
      //for (let i=0; i<dataPokemonParameter.length; i++){
        let modal = htmlToElements(
          `<div class ="modal-content">
            <div class="modal-top">
              <img src='${arrayPokeUnitario.img}' id="PokemonModal"/>
              <span class="close">&times;</span>                          
              </div>
            <div class="modal-body">
              <p>${arrayPokeUnitario.name}</p>
              <p>Tipo:  <br>${arrayPokeUnitario.type}</p>
              <div class="body-resistant">
                <p>Fortalezas: <br> ${arrayPokeUnitario.resistant}</p>
                <p>Debilidades: <br> ${arrayPokeUnitario.weaknesses} </p>
              </div>
            </div> 
        </div>`);
        contenedorModal.appendChild(modal);
        //console.log(modal); //en css debe estar en una posicion absoluta      
     

     // Cuando se haga click <span> (x), cierra el modal
    const spanModalClose = document.getElementsByClassName("close")[0];
    spanModalClose.onclick = () => {    
      contenedorModal.style.display = "none";
    }
    //console.log(spanModalClose);
     
      }         
      })
      .catch(function(error) {
            return ('Hubo un problema con la petición Fetch:' + error.message);
        });      