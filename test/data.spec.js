import {filterTypes} from '../src/data.js';


describe('should return type of pokemons', () => {
    expect(filterTypes()).toEqual( 
      expect.arrayContaining([
        expect.objectContaining({
          type: 'water'
        })
      ])
    );

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('filterTypes', () => {
//   it('is a function', () => {
//     expect(typeof filterTypes).toBe('function');
//   });

//   it('returns `filterTypes`', () => {
//     expect(filterTypes()).toBe('water');
//   });
});
