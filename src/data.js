// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};


export const anotherExample = () => {
  return 'OMG';
};


fetch('https://luzciel.github.io/SCL015-data-lovers/src/data/pokemon/pokemon.json')
.then(response => response.json() )
.then(data =>git));

var namesPokemon = data.pokemon.name

const alphabeticalOrder (name){
  //orden ascendente
namesPokemon.sort((a,b){return a - b})
//orden descentente
namesPokemon.sort((a,b){return b - a})
console.log(namesPokemon)
}

function organizeInfo(data) {
  data.data.forEach(alphabeticalOrder);
}