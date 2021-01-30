import orderFunctions from '../src/data.js';

const characters = [
  {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}, 
  {name:"Morty Smith", id: 2, species: "Human", status: "Alive"}, 
  {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"}, 
  {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
  {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
];

describe('orderFunctions', () => {
  it('is a object', () => {
    expect(typeof orderFunctions).toBe('object');
  });})

describe('orderFunctions.orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.orderAZ).toBe('function');
  });

  it('should return order AZ', () => {
    expect(orderFunctions.orderAZ(characters)).toEqual([
    {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"},
    {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"},
    {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
    {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
    {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}]);
  });
});


describe('orderFunctions.orderZA', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.orderZA).toBe('function');
  });

  it('should return order ZA', () => {
    expect(orderFunctions.orderZA(characters)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
      {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
      {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"},
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"}
    ]);
  });
});

describe('orderFunctions.orderDefault', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.orderDefault).toBe('function');
  });

  it('should return order default', () => {
    expect(orderFunctions.orderDefault(characters)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
      {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"},
      {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
      {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
    ]);
  });
});

describe('orderFunctions.statusFunction', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.speciesFilter).toBe('function');
  });

  it('should return alive status if selected', () => {
    expect(orderFunctions.statusFunction(characters, "Alive")).toEqual([
    {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"},
    {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
    {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}
    ]);
  });

  it('should return dead status if selected', () => {
    expect(orderFunctions.statusFunction(characters, "Dead")).toEqual([
    {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"},
    {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
    ]);
  });
});


describe('orderFunctions.specieFunction', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.specieFunction).toBe('function');
  });

  it('should return human specie if selected', () => {
    expect(orderFunctions.specieFunction(characters, "Human")).toEqual([
    {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}, 
    {name:"Morty Smith", id: 2, species: "Human", status: "Alive"}, 
    {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
    ]);
  });

  it('should return alien specie if selected', () => {
    expect(orderFunctions.specieFunction(characters, "Alien")).toEqual([
    {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"}, 
    {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
    ]);
  });
});

describe('orderFunctions.searchCharacter', () => {
  it('is a function', () => {
    expect(typeof orderFunctions.searchCharacter).toBe('function');
  });

  it('should return Character name with A letter', () => {
    expect(orderFunctions.searchCharacter(characters, "A")).toEqual([{name:"Agency Director", id: 1, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}]);
  });

  it('should return Character name with B letter', () => {
    expect(orderFunctions.searchCharacter(characters, "B")).toEqual([{name: "Bobby Moynihan", id: 2, species: "Human", gender: "Male"}]);
  });
});
