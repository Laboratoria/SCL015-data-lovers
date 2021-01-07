// estas funciones son de ejemplo
// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };
//se crea la funcion ordenar y filtrar
export const ordenarAZ = (arrayrickymorty, tipodeorden) => {
  if (tipodeorden == 1) sortJSON(arrayrickymorty, "name", "asc");
  else sortJSON(arrayrickymorty, "name", "desc");

  return arrayrickymorty;
};
const sortJSON = (data, key, orden) => {
  return data.sort(function (a, b) {
    var x = a[key],
      y = b[key];
    if (orden === "asc") {
      return x < y ? -1 : 1;
    }
// if (x < y) {
    //  return -1;
    // } else {
    //   if (x > y) {
    //   return  1;
    //   } else {
    //   return  0;
    //   }
    // }
    // if (orden === "desc") {
      else{
      return x > y ? -1 : 1;
    }
  });
};

export const filtrar = (arrayrickymorty, nombreElemento, valoraFiltrar) => {
  arrayrickymorty = arrayrickymorty.filter(
    (elemento) => elemento[nombreElemento] == valoraFiltrar
  );
  // console.log (JSON.stringify(arrayrickymorty));
  return arrayrickymorty;
};
// export const encontrar = (arrayrickymorty, nombreElemento, valorEncontrar) => {
//   arrayrickymorty = arrayrickymorty.find(
//     (elemento) => elemento[nombreElemento] == valorEncontrar
//   );
//   return arrayrickymorty;
// };
