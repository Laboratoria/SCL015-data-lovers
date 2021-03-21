import logic from './data.js'
const containerSearch = document.getElementById("search"); // input en HTML para el Buscador por nombre
const orderPoke = document.getElementById("orderPokemon"); //Selec en HTML para ordenar
const filterPoke = document.getElementById("filterPokemon"); //Selec en HTML filtrar por tipos
const listPokemon = document.getElementById("dataList"); // seccion HTML para las cards
const containerModal = document.getElementById("modal"); //seccion HTML para el modal
const containerPercentage = document.getElementById("percentage"); // seccion HTML para el porcentaje
const containerClassPercentage = document.getElementById("percentageSeccion");

// Imprimir un elemento en HTML. 
const htmlToElements = (html) => {
  let stencil = document.createElement('template');
  stencil.innerHTML = html; // .innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
  return stencil.content.firstChild; //Nodo.firstChild = devuelve el primer hijo del nodo
}

//data .JSON
fetch('https://github.com/luzciel/POKEDATOS/blob/master/src/data/pokemon/pokemon.json')
  .then(response => response.json())
  .then(data => {
    const dataPokemon = data.pokemon; // data pokemon del json    
    //Imprime las card de los Pokemones con Nombre y Imagen 
    const printData = (dataPokemonParameter) => {
      listPokemon.innerHTML = "";
      for (let i = 0; i < dataPokemonParameter.length; i++) {
        let card = htmlToElements(
          `<div class ="all-card">
           <img src='${dataPokemonParameter[i].img}'/>
            <p>${dataPokemonParameter[i].name}</p>
            <button class="button-card">Ver Perfil</button>
          </div>`);
        listPokemon.appendChild(card);
        //Al hacer click en la Card, se imprime el Modal con la informacion de ese pokemon
        card.addEventListener("click", function () {
          printModal(dataPokemonParameter[i])
          containerModal.style.display = "block";
        })
      }
    }

    printData(dataPokemon);
    //ORDENAR AZ - ZA
    orderPoke.addEventListener("change", () => { //agregamos el evento "change" para que al seleccionar alguna de las opciones, se emplee la funcion ordenar
      const sortByAlphabet = (dataPokemonParameter) => {
        const valueOrder = orderPoke.value;
        if (valueOrder === "1") {
          logic.orderAZ(dataPokemonParameter)
        }
        if (valueOrder === "2") {
          logic.orderZA(dataPokemonParameter)
        }
      }
      sortByAlphabet(dataPokemon)
      printData(dataPokemon)    //dataPokemon es una variable local dentro de fetch
      containerClassPercentage.style.display = "none"; // Desaparece el contenedor del porcentaje 
      document.getElementById("filterPokemon").value = 0; // coloca el select de Filtar en el valor 0 ("Tipos")
      document.getElementById("search").value = ""; // Deja en blanco el contenido del buscador
    })

    //BUSCADOR
    containerSearch.addEventListener("keyup", (words) => { //keyup = el evento se dispara cuando se suelta una tecla.
      const searchString = words.target.value.toLowerCase(); // valor de las letras en minusculas
      const searchPokemon = logic.searchCharacter(dataPokemon, searchString)
      printData(searchPokemon)
      document.getElementById("orderPokemon").value = 0; //coloca el select de Ordenar en el valor 0 ("Ordenar por")
      document.getElementById("filterPokemon").value = 0; //coloca el select de Filtar en el valor 0 ("Tipos")
      containerClassPercentage.style.display = "none"; //Desaparece el contenedor del porcentaje 
    })

    //FILTRAR POR TIPO   
    filterPoke.addEventListener("change", (event) => { //"event" es el parametro que indica que fue lo que cambio - agrego el evento "change",para que al seleccionar la opcion de tipo se ejecute la funcion
      //creo una variable donde se agrupen las coincidencias de tipo de pokemon       
      let pokemonMatches = logic.filterData(dataPokemon, (event.target.value)) // ".target" indica que elemteno se esta cambiando en el select que cambia - con ".value" extraigo el valor del select        
      printData(pokemonMatches)
      printPercentage(event.target.value) // imprime el porcentaje segun el tipo
      containerClassPercentage.style.display = "block"; // Aparece la sesion del porcentaje 
      document.getElementById("orderPokemon").value = 0; //  coloca el select de Ordenar en el valor 0 ("Ordenar por")
      document.getElementById("search").value = ""; //Deja en blanco el contenido del buscador
    })

    //PORCENTAJE POR TIPO
    const printPercentage = (typeFilter) => {
      containerPercentage.innerHTML = "";
      let seccionPercentage = htmlToElements(`<h3>Sabias que el porcentaje total de pokemones de tipo ${typeFilter} es de un ${logic.computeData(dataPokemon, typeFilter)}</strong> </h3>`);
      return containerPercentage.appendChild(seccionPercentage);
    }

    //MODAL
    const printModal = (arrayPokeUnitario) => {
      containerModal.innerHTML = "";
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
        </div>`);
      // join() une todos los elementos de un array formando una cadena y separándolos con aquel argumento que definamos.
      containerModal.appendChild(modal);
      
      // Cuando se haga click <span> (x), cierra el modal
      const spanModalClose = document.getElementsByClassName("close")[0];
      spanModalClose.onclick = () => {
        containerModal.style.display = "none";
      }
    }
     
  })
  .catch(function (error) {
    return ('Hubo un problema con la petición Fetch:' + error.message);
  });      
