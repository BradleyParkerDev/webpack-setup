/// <reference types="webpack/module" /> 
import '../css/main.css';
import lib from './lib';
import Alpine from 'alpinejs'
import 'htmx.org';

const {messageInnerText, confettiComponent} = lib


window.Alpine = Alpine
Alpine.data('confettiComponent', confettiComponent);
Alpine.start()



// Get the element by ID and check for null
let message = document.getElementById("message"); // Ensure the correct ID is used

if (message) { // Ensure the element is not null
    message.innerText = messageInnerText();
} else {
    console.error('Element with ID "message" not found.');
}




