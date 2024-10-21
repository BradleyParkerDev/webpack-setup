/// <reference types="webpack/module" /> 
import '../css/main.css';
import { getPokemon } from "./api/getPokemon";
import messageInnerText from './lib';


// console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error
getPokemon();

// Get the element by ID and check for null
let message = document.getElementById("message"); // Ensure the correct ID is used

if (message) { // Ensure the element is not null
    message.innerText = messageInnerText();
} else {
    console.error('Element with ID "message" not found.');
}




