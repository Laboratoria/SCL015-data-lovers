import { orderFunctions } from '../src/data.js';

const characters = [
  {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}, 
  {name:"Morty Smith", id: 2, species: "Human", status: "Alive"}, 
  {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"}, 
  {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
  {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
];

describe('ordenar de A-Z, Z-A y Default', () => {
  it('is a function', () => {
    expect(typeof orderFunctions).toBe('function');
  });

  it('deberia ordenar de A-Z', () => {
    expect(orderFunctions.orderAZ(characters)).toEqual([
     {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"},
     {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"},
     {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
     {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
     {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"}
     ])
   });

  it('deberia ordenar de Z-A', () => {
    expect(orderFunctions.orderZA(characters)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
      {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
      {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"},
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"} 
    ])
  });

  it('deberia ordenar de por Default', () => {
    expect(orderFunctions.orderDefault(characters)).toEqual([
      {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
      {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"},
      {name:"Amish Cyborg", id: 4, species: "Alien", status: "Dead"},
      {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
      ])
    });
});

// describe('Busca nombre de personaje', () => {
//   it('is a function', () => {
//     expect(typeof buscar).toBe('function');
//   });

//    it('returns `Rick Sanchez`', () => {
//      expect(buscar("Rick Sanchez", characters)).toEqual({name: "Rick Sanchez", id: 1, species: "Human", status: "Alive"},
//    );
//   });
// });

// describe('Filtra por estado de vida', () => {
//   it('is a function', () => {
//     expect(typeof filtrar).toBe('function');
//   });

//   it('deberia filtrar por estado de vida', () => {
//     expect(filtrar("Alive", characters)).toEqual([
//       {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
//       {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
//       {name:"Abadango Cluster Princess", id: 3, species: "Alien", status: "Alive"}
//     ]);

//   it('deberia filtrar por especie', () => {
//     expect(filtrar("Human", characters)).toEqual([
//       {name:"Rick Sanchez", id: 1, species: "Human", status: "Alive"},
//       {name:"Morty Smith", id: 2, species: "Human", status: "Alive"},
//       {name:"Adjudicator Rick", id: 5, species: "Human", status: "Dead"}
//     ]);
//   });

//   });
// });