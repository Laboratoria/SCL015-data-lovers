import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const charactersBtn = document.getElementById("charactersBtn");
charactersBtn.addEventListener("click", function(){
    const welcomeSection = document.getElementById("welcomeSection");
    welcomeSection.style.display= "none";
    const charactersSection = document.getElementById("charactersSection");
    charactersSection.style.display= "block";
})