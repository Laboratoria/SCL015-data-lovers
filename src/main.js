// import data  from './data/pokemon.js'
import logic from './data.js'
let listPokemon= document.getElementById("dataList"); // seccion HTML para las cards
let contenedorModal= document.getElementById("modal"); //seccion HTML para el modal
const containerPercentage= document.getElementById("percentage"); // seccion HTML para el porcentaje

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
            <button class="button-card">Ver Perfil</button>
          </div>`);
        listPokemon.appendChild(card);
        //Al hacer click en la Card, se imprime el Modal con la informacion de ese pokemon
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
    containerPercentage.style.display = "none"; // Desaparece el contenedor del porcentaje 
    document.getElementById("filterPokemon").value=0;  // coloca el select de Filtar en el valor 0 ("Tipos")
    

        })
       //FILTRAR POR TIPO   
    const filterPoke = document.getElementById("filterPokemon");
    filterPoke.addEventListener("change", (event) => { //"event" es el parametro que indica que fue lo que cambio - agrego el evento "change",para que al seleccionar la opcion de tipo se ejecute la funcion
      //creo una variable donde se agrupen las coincidencias de tipo de pokemon       
      let pokemonMatches = logic.filterData(dataPokemon,(event.target.value)) // ".target" indica que elemteno se esta cambiando en el select que cambia - con ".value" extraigo el valor del select        
      printData(pokemonMatches)
      printPercentage(event.target.value) // imprime el porcentaje segun el tipo
      containerPercentage.style.display = "block"; // Aparece la sesion del porcentaje 
      document.getElementById("orderPokemon").value=0; //  coloca el select de Ordenar en el valor 0 ("Ordenar por")
    }) 


  //PORCENTAJE POR TIPO
    const printPercentage = (typeFilter) => {
      containerPercentage.innerHTML ="";
      let seccionPercentage = htmlToElements(`<h3 class="percentage-text">Sabias que el porcentaje total de pokemones de tipo ${typeFilter} es de un  </h3>`);
      return containerPercentage.appendChild(seccionPercentage);
    }
    
    
   //MODAL
     const printModal = (arrayPokeUnitario) => {
      contenedorModal.innerHTML ="";
        let modal = htmlToElements(
          `<div class ="modal-content">
            <div class="modal-top">
              <figure class="top-figure">
                <img src='${arrayPokeUnitario.img}' id="PokemonModal"/>
              </figure>
              <span class="close">&times;</span>
              </div>
            <div class="modal-body">
              <p class= "modal-name"><strong>${arrayPokeUnitario.name.toUpperCase()}</strong></p>
              <p><strong>Tipo:</strong>  <br> ${arrayPokeUnitario.type.join(', ')}</p>
              <div class="body-resistant">
              <p class="resistant-title"><strong>Fortalezas:</strong></p>
              <p><strong>Debilidades:</strong></p>
              </div>
              <div class="items">
              <p class="resistant">${arrayPokeUnitario.resistant.join("\n")}</p>
              <p class=weaknesses>${arrayPokeUnitario.weaknesses.join("\n")}</p>
            </div>
            </div> 
        </div>`);
        // join() une todos los elementos de un array formando una cadena y separándolos con aquel argumento que definamos.
        contenedorModal.appendChild(modal);
             
     

     // Cuando se haga click <span> (x), cierra el modal
    const spanModalClose = document.getElementsByClassName("close")[0];
    spanModalClose.onclick = () => {
      contenedorModal.style.display = "none";
    }

      }         
      })
      .catch(function(error) {
            return ('Hubo un problema con la petición Fetch:' + error.message);
        });      