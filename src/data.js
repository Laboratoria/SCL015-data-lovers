export const ordenar = (ordenarPor, arrayDataLol) => {

  let datosOrdenados;
  const ordenAleatorio = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }


  if (ordenarPor == "Z-A") {
    datosOrdenados = arrayDataLol.sort((el1, el2) => {
      return (el1.name > el2.name) ? - 1 : 1

    });

  }
  else if (ordenarPor == "A-Z") {
    datosOrdenados = arrayDataLol.sort((el1, el2) => {
      return el1.name < el2.name ? - 1 : 1

    });

  }

  else if (ordenarPor == "Ordenar") {
    datosOrdenados = arrayDataLol.sort((el1, el2) => {
      return el1.name < el2.name ? - 1 : 1

    });

  }

  else if (ordenarPor == "Aleatorio") {
    datosOrdenados = ordenAleatorio(arrayDataLol)

  }
  return datosOrdenados

}




export const buscar = (name, arrayDataLol) => {

  const buscadorNombre = arrayDataLol.filter(campeon => campeon.name.toLowerCase().indexOf(name.toLowerCase()) > -1);


  return buscadorNombre;
};

export const filtrar = (filtrarPor, arrayDataLol) => {

  let rolesFiltrados;

  if (filtrarPor == "rols") {
    rolesFiltrados = arrayDataLol;
  }
  else {
    rolesFiltrados = arrayDataLol.filter(element => {
      return element.tags.includes(filtrarPor);
    });
  }

  return rolesFiltrados;

}