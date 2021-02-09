import {filterTypes} from '../src/data.js';
import {orderPokemons} from '../src/data.js';

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


describe('orderPokemons',()  => {
  it('is a function', () => {
    expect(typeof orderPokemons).toBe('function');
  });

  it('sort by A-Z the pokemons', () => {
    expect(orderPokemons(pokemonS,"name")).toEqual([{type:'water',name: "bulbasaur"},{type:'grass',name: "ivysaur"},
    {type:'poison',name: "venusaur"}]);
  });

  // it('sort by Z-A the pokemons',() => {
  //   expect(orderPokemons(pokemonS)).toEqual([{name:"venusaur"},{name: "ivysaur"},{name: "bulbasaur"}]);
  // });
});

