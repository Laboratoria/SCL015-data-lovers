//import { example, anotherExample } from '../src/data.js';
import logic from '../src/data.js'

// const examploData = [ {
//   "name": "bulbasaur", "type": [
//     "grass",
//     "poison"
//   ],
//   },
//   { 
//   "name": "pikachu",
//   "type": [
//     "electric"
//   ],
//   },
//   {
//   "name": "raichu",
//   "type": [
//     "electric"
//   ],
//   }
// ]

describe('logic', () => {
  it('debería ser un objeto', () => {
    expect(typeof logic).toBe('object');
  });

  describe('logic.orderAZ', () => {
    it('debería ser una función', () => {
      expect(typeof logic.orderAZ).toBe('function');
    });
  });
    describe('logic.orderZA', () => {
      it('debería ser una función', () => {
        expect(typeof logic.orderAZ).toBe('function');
        console.log(typeof logic.orderAZ)
      });
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