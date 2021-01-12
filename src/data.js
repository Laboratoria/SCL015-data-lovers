//Creamos la función ordenar para el select
export const toOrderAZ = (arrayrickymorty, orderType) => {
  if (orderType == 1) sortJSON(arrayrickymorty, "name", "asc");
  else sortJSON(arrayrickymorty, "name", "desc");

  return arrayrickymorty;
};
export const sortJSON = (data, key, order) => {
  return data.sort(function (a, b) {
    let x = a[key],
      y = b[key];
    if (order === "asc") {
      return x < y ? -1 : 1;
    }
    else{
      return x > y ? -1 : 1;
    }
  });
};
//Creamos la función para filtrar con los otros dos select
export const toFilter = (arrayrickymorty, elementName, filterValue) => {
  arrayrickymorty = arrayrickymorty.filter((theElement) => theElement[elementName] === filterValue);
  return arrayrickymorty;
};
//Creamos la función para el buscador para el select
export const search = (arrayrickymorty, characterName) => {
  let arrayrickymortyTwo = arrayrickymorty.filter(element => element.name.includes(characterName));
  return arrayrickymortyTwo;
};