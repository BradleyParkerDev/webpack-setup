/// <reference types="webpack/module" /> 
import '../css/main.css';
import components from './components';
import lib from './lib';
import 'htmx.org';

const {confetti, counter} = components
const {messageInnerText} = lib


const confettiDiv = document.getElementById("confetti-div")

confettiDiv?.addEventListener('click',()=>{
    console.log("Showing confetti!!!")
    confetti.startConfettiEffect()
})

counter.setup("count", "increment-button", "decrement-button")


// Get the element by ID and check for null
let message = document.getElementById("message"); // Ensure the correct ID is used

if (message) { // Ensure the element is not null
    message.innerText = messageInnerText();
} else {
    console.error('Element with ID "message" not found.');
}




