import { pokemons, anotherExample } from '../src/data.js';


describe('pokemons', () => {
  it('should be an object', () => {
    expect(typeof pokemons).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
