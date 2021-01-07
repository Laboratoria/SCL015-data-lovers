import { ordenarAZ, filtrar } from "../src/data.js";
import data from "../src/data/rickandmorty/rickandmorty.js";

const rickandmorty = data.results;
const dataGenderless = [
  {
    id: 141,
    name: "Ghost in a Jar",
    status: "Dead",
    species: "Alien",
    type: "Parasite, Ghost",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/141.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/15"],
    url: "https://rickandmortyapi.com/api/character/141",
    created: "2017-12-27T19:14:14.545Z",
  },
  {
    id: 157,
    name: "Hole in the Wall Where the Men Can See it All",
    status: "unknown",
    species: "unknown",
    type: "Hole",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Interdimensional Cable",
      url: "https://rickandmortyapi.com/api/location/6",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/157.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/8"],
    url: "https://rickandmortyapi.com/api/character/157",
    created: "2017-12-29T15:47:57.352Z",
  },
  {
    id: 266,
    name: "Piece of Toast",
    status: "Alive",
    species: "unknown",
    type: "Bread",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Interdimensional Cable",
      url: "https://rickandmortyapi.com/api/location/6",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/266.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/17",
    ],
    url: "https://rickandmortyapi.com/api/character/266",
    created: "2017-12-31T13:48:58.850Z",
  },
  {
    id: 333,
    name: "Stair Goblin",
    status: "Alive",
    species: "Alien",
    type: "Stair goblin",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Fantasy World",
      url: "https://rickandmortyapi.com/api/location/48",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/333.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/25",
    ],
    url: "https://rickandmortyapi.com/api/character/333",
    created: "2018-01-10T16:34:19.420Z",
  },
  {
    id: 372,
    name: "Unity",
    status: "Alive",
    species: "Alien",
    type: "Hivemind",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Unity's Planet",
      url: "https://rickandmortyapi.com/api/location/28",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/372.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/14"],
    url: "https://rickandmortyapi.com/api/character/372",
    created: "2018-01-10T19:20:50.211Z",
  },
  {
    id: 471,
    name: "Little Voltron",
    status: "Alive",
    species: "Robot",
    type: "",
    gender: "Genderless",
    origin: { name: "unknown", url: "" },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/471.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/27"],
    url: "https://rickandmortyapi.com/api/character/471",
    created: "2018-05-22T17:07:21.833Z",
  },
];
const toAZorder = [
  {
    id: 333,
    name: "Stair Goblin",
  },
  {
    id: 141,
    name: "Ghost in a Jar",
  },
  {
    id: 157,
    name: "Hole in the Wall Where the Men Can See it All",
  },
  {
    id: 266,
    name: "Piece of Toast",
  },
];
const resultAZ = [
  {
    id: 141,
    name: "Ghost in a Jar",
  },
  {
    id: 157,
    name: "Hole in the Wall Where the Men Can See it All",
  },
  { 
    id: 266,
    name: "Piece of Toast",
  },
  {
    id: 333,
    name: "Stair Goblin",
  },
];

const resultZA = [
  {
    id: 333,
    name: "Stair Goblin",
  },
  {
    id: 266,
    name: "Piece of Toast",
  },
  {
    id: 157,
    name: "Hole in the Wall Where the Men Can See it All",
  },
  {
    id: 141,
    name: "Ghost in a Jar",
  },
];

describe("filtrar", () => {
  it("is a function", () => {
    expect(typeof filtrar).toBe("function");
  });

  it("gender filter return Genderless", () => {
    expect(filtrar(rickandmorty, "gender", "Genderless")).toEqual(dataGenderless);
  });
});

describe("ordenarAZ", () => {
  it("is a function", () => {
    expect(typeof ordenarAZ).toBe("function");
  });

  it("returns ordenaz", () => {
    expect(ordenarAZ(toAZorder, 1)).toEqual(resultAZ);
  });
});

describe("ordenarAZ", () => {
  it("is a function", () => {
    expect(typeof ordenarAZ).toBe("function");
  });

  it("returns ordenaz", () => {
    expect(ordenarAZ(toAZorder, 2)).toEqual(resultZA);
  });
});

//describe : es el test.
// it : es el caso. El ejemplo. Pueden ser varios casos
// expect: se espera que... (evalúa la función)
// toBe: que sea...