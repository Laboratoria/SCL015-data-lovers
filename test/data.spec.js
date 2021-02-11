import {filterTypes} from '../src/data.js';
import {aZorder} from '../src/data.js';

const pokemonS= [
  {type:'water',name: "bulbasaur"},
  {type:'grass',name: "ivysaur"},
  {type:'poison',name: "venusaur"}]

describe('filterTypes',()  => {
  it('is a function', () => {
    expect(typeof filterTypes).toBe('function');
  });

  it('filter types of pokemons', () => {
    expect(filterTypes(pokemonS)).toEqual([{type:'water',name: "bulbasaur"}]);
  });
});


describe('aZoreder',()  => {
  it('is a function', () => {
    expect(typeof aZorder).toBe('function');
  });

  it('sort by A-Z the pokemons', () => {
    expect(aZorder(pokemonS,"name")).toEqual([{type:'water',name: "bulbasaur"},{type:'grass',name: "ivysaur"},
    {type:'poison',name: "venusaur"}]);
  });

});

