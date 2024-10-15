/// <reference types="webpack/module" /> 
import '../css/main.css';
import  generateJoke  from "./lib/generateJoke";
import { getPokemon } from "./lib/getPokemon";
console.log('Hello, Bradley Parker!')
const joke = generateJoke();
console.log(joke);
// console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error
getPokemon()