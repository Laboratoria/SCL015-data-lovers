//FUNCION ORDENAR de la A a  la Z
const orderAZ = (arrayPoke) => {
    let orderIndicatorName = arrayPoke.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    });
    return orderIndicatorName;
};

//FUNCION ORDENAR de la Z a la A
const orderZA = (arrayPoke) => {
    const orderIndicatorName = arrayPoke.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
    });
    return orderIndicatorName;
};

//FUNCION FILTRAR
const filterData = (arrayPoke, typePoke) => {
    const allFilter = arrayPoke.filter(arrayPokeUnitario => { //arrayPokeUnitario es toda la data de un solo pokemon        
        return arrayPokeUnitario.type.includes(typePoke);//includes devuelve verdadero y falso, Aqui le pido que compare si encuentra algo con las mismas caracteristicas de tipo
    })
    return allFilter;
}

//FUNCION BUSCADOR
const searchCharacter = (arrayPoke, words) => {
    const filteredCharacter = arrayPoke.filter((character) => {
        return character.name.includes(words)
    })
    return filteredCharacter
}
// console.log(searchCharacter(datapoke, "chu"))

//CALCULAR %
const computeData = (arrayPoke, typePoke) => {
    let percentajeByType = [];
    for (let i = 0; i < arrayPoke.length; i++) {
        if (arrayPoke[i].type.includes(typePoke)) {
            percentajeByType.push(arrayPoke[i].type);
        }
    }
    return ((percentajeByType.length) / arrayPoke.length * 100).toFixed(1) + '%';
};

export default { orderAZ, orderZA, filterData, computeData, searchCharacter };

