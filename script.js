//your JS code here. If required.
// script.js

// Function to determine the DOM level of an element
function getDOMLevel(element) {
    let level = 0;
    while (element) {
        level++;
        element = element.parentElement;
    }
    return level;
}

// Find the element with id 'level'
const targetElement = document.getElementById('level');

// Compute its DOM level
const domLevel = getDOMLevel(targetElement);

// Display the result using alert
alert(`The level of the element is: ${domLevel}`);
