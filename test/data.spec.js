//import { example, anotherExample } from '../src/data.js';
import logic from '../src/data.js'

let pokemon;

const pokemonAZ =[ 
  { name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  { name: 'charmander', type: ['fire']},
  { name: 'pikachu', type: [ 'electric' ]},
  { name: 'raichu', type: [ 'electric' ] } 
]

const pokemonZA =[ 
  { name: 'raichu', type: [ 'electric' ] },
  { name: 'pikachu', type: [ 'electric' ] },
  { name : 'charmander', type : ['fire']},
  { name: 'bulbasaur', type: [ 'grass', 'poison' ]} 
]
const pokemonElectric = [
  {name: "pikachu", type: [ "electric"]},
  {name: "raichu", type: [ "electric"] }
]

beforeEach(() => {
  pokemon = [
    {name: "charmander", type: ["fire"]},
    {name: "pikachu", type: [ "electric"]},
    {name: "raichu", type: [ "electric"] },
    {name: "bulbasaur", type: [ "grass","poison"]},
  ]
});

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

  describe('logic.filterData', () => {
    it('debería ser una función', () => {
      expect(typeof logic.filterData).toBe('function');
    });

    it('deberia devolver los pokemones electricos (pikachu y raichu)', () => {
      console.log(logic.filterData(pokemon, "electric"))
      console.log(pokemonElectric)
      expect(logic.filterData(pokemon, "electric")).toEqual(expect.arrayContaining(pokemonElectric))
      expect(pokemonElectric).toEqual(expect.arrayContaining(logic.filterData(pokemon, "electric")))

    })
  });

  describe('logic.computeData',() =>{
    it('deberia ser una funcion',()=>{
      expect(typeof logic.computeData).toBe('function');
    });

    it('debeia devolver el porcentaje de pokemones por tipo', () => {
      expect(logic.computeData(pokemon,'electric')).toEqual('0.8%');
    });
    
  })

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