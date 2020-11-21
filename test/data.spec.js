//import { example, anotherExample } from '../src/data.js';
import logic from '../src/data.js'
//import data from '../src/data/pokemon/pokemon.js'

const pokemon = [
  {name: "charmander", type: ["fire"]},
  {name: "pikachu", type: [ "electric"]},
  {name: "raichu", type: [ "electric"] },
  {name: "bulbasaur", type: [ "grass","poison"]},
]
const pokemonAZ =[ 
  { name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  { name: "charmander", type: ["fire"]},
  { name: 'pikachu', type: [ 'electric' ]},
  { name: 'raichu', type: [ 'electric' ] } 
]

const pokemonZA =[ 
  { name: 'raichu', type: [ 'electric' ] },
  { name: 'pikachu', type: [ 'electric' ] },
  { name : "charmander", type : ["fire"]},
  { name: 'bulbasaur', type: [ 'grass', 'poison' ]} 
]
const pokemonElectri = [
  {name: "pikachu", type: [ "electric"]},
  {name: "raichu", type: [ "electric"] }
]


const pokemonElectric =

describe('logic', () => {
  it('debería ser un objeto', () => {
    expect(typeof logic).toBe('object');
  });

  describe('logic.orderAZ', () => {
    it('debería ser una función', () => {
      expect(typeof logic.orderAZ).toBe('function');
    });

    it('debería ordenar alfabeticamente de la A-Z', () => {
      expect(logic.orderAZ(pokemon)).toEqual(pokemonAZ);
    });
  });

  describe('logic.orderZA', () => {
      it('debería ser una función', () => {
        expect(typeof logic.orderAZ).toBe('function');
      });

      it('debería ordenar alfabeticamente Z-A', () => {
        expect(logic.orderZA(pokemon)).toEqual(pokemonZA);
      });
  });

  describe('logic.filterType', () => {
    it('debería ser una función', () => {
      expect(typeof logic.filterType).toBe('function');
    });

    it('logit.filterType', () => {
      expect(logic.filterType(pokemon).toEqual(pokemonElectric))
    })



  });


});



// describe('example', () => {
//   skip.it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   skip.it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// skip.describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   skip.it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });