import { ordenar, buscar, filtrar } from '../src/data.js';

const arrayTest=[
  {name: "Aatrox", title: "the Darkin Blade", info: {attack: 8, defense: 4, magic: 3, difficulty: 4},tags: ["Fighter", "Tank"]},
  {name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
  {name: "Gnar", title: "the Missing Link", info: {attack: 6, defense: 5, magic: 5, difficulty: 8}, tags:["Fighter", "Tank"]},
  {name: "Jhin", title: "the Virtuoso", info: {attack: 10, defense: 2, magic: 6, difficulty: 6}, tags:["Marksman", "Assassin"]},
  {name: "Jinx", title: "the Loose Cannon", info: {attack: 9, defense: 2, magic: 4, difficulty: 6}, tags: ["Marksman"]},
  {name: "Xin Zhao", title: "the Seneschal of Demacia", info: {attack: 8, defense: 6, magic: 3, difficulty: 2}, tags: ["Fighter", "Assassin"]},
  {name: "Zyra", title: "Rise of the Thorns", info: {attack: 4, defense: 3, magic: 8, difficulty: 7}, tags: ["Mage", "Support"]},
  ];


describe('ordenar de A-Z, Z-A y ALEATORIO', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('deberia ordenar de Z-A', () => {
    expect(ordenar("Z-A", arrayTest)).toEqual([{name: "Zyra", title: "Rise of the Thorns", info: {attack: 4, defense: 3, magic: 8, difficulty: 7}, tags: ["Mage", "Support"]},
    {name: "Xin Zhao", title: "the Seneschal of Demacia", info: {attack: 8, defense: 6, magic: 3, difficulty: 2}, tags: ["Fighter", "Assassin"]},
    {name: "Jinx", title: "the Loose Cannon", info: {attack: 9, defense: 2, magic: 4, difficulty: 6}, tags: ["Marksman"]},
    {name: "Jhin", title: "the Virtuoso", info: {attack: 10, defense: 2, magic: 6, difficulty: 6}, tags:["Marksman", "Assassin"]},
    {name: "Gnar", title: "the Missing Link", info: {attack: 6, defense: 5, magic: 5, difficulty: 8}, tags:["Fighter", "Tank"]},
    {name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
    {name: "Aatrox", title: "the Darkin Blade", info: {attack: 8, defense: 4, magic: 3, difficulty: 4},tags: ["Fighter", "Tank"]}]);
  });



 it('deberia ordenar de A-Z', () => {
   expect(ordenar("A-Z", arrayTest)).toEqual([{name: "Aatrox", title: "the Darkin Blade", info: {attack: 8, defense: 4, magic: 3, difficulty: 4},tags: ["Fighter", "Tank"]},
   {name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
   {name: "Gnar", title: "the Missing Link", info: {attack: 6, defense: 5, magic: 5, difficulty: 8}, tags:["Fighter", "Tank"]},
   {name: "Jhin", title: "the Virtuoso", info: {attack: 10, defense: 2, magic: 6, difficulty: 6}, tags:["Marksman", "Assassin"]},
   {name: "Jinx", title: "the Loose Cannon", info: {attack: 9, defense: 2, magic: 4, difficulty: 6}, tags: ["Marksman"]},
   {name: "Xin Zhao", title: "the Seneschal of Demacia", info: {attack: 8, defense: 6, magic: 3, difficulty: 2}, tags: ["Fighter", "Assassin"]},
   {name: "Zyra", title: "Rise of the Thorns", info: {attack: 4, defense: 3, magic: 8, difficulty: 7}, tags: ["Mage", "Support"]}]);
});
});


describe('Busca nombre de campeon', () => {
  it('is a function', () => {
    expect(typeof buscar).toBe('function');
  });


   it('returns `Akali`', () => {
     expect(buscar("Akali", arrayTest)).toEqual([{name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
    ]);
   });
  });

describe('Filtra por roles', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('deberia filtrar por roles', () => {
    expect(filtrar("Assassin", arrayTest)).toEqual([{name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
    {name: "Jhin", title: "the Virtuoso", info: {attack: 10, defense: 2, magic: 6, difficulty: 6}, tags:["Marksman", "Assassin"]},
    {name: "Xin Zhao", title: "the Seneschal of Demacia", info: {attack: 8, defense: 6, magic: 3, difficulty: 2}, tags: ["Fighter", "Assassin"]}]);
  });


it('deberia filtrar por roles', () => {
  expect(filtrar("rols", arrayTest)).toEqual([
    {name: "Aatrox", title: "the Darkin Blade", info: {attack: 8, defense: 4, magic: 3, difficulty: 4},tags: ["Fighter", "Tank"]},
    {name: "Akali", title: "the Fist of Shadow", info: {attack: 5, defense: 3, magic: 8, difficulty: 7}, tags: ["Assassin"]},
    {name: "Gnar", title: "the Missing Link", info: {attack: 6, defense: 5, magic: 5, difficulty: 8}, tags:["Fighter", "Tank"]},
    {name: "Jhin", title: "the Virtuoso", info: {attack: 10, defense: 2, magic: 6, difficulty: 6}, tags:["Marksman", "Assassin"]},
    {name: "Jinx", title: "the Loose Cannon", info: {attack: 9, defense: 2, magic: 4, difficulty: 6}, tags: ["Marksman"]},
    {name: "Xin Zhao", title: "the Seneschal of Demacia", info: {attack: 8, defense: 6, magic: 3, difficulty: 2}, tags: ["Fighter", "Assassin"]},
    {name: "Zyra", title: "Rise of the Thorns", info: {attack: 4, defense: 3, magic: 8, difficulty: 7}, tags: ["Mage", "Support"]},
    ]);
});
});