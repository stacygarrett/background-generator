const css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let button = document.getElementById('button');
let newColor1;
let newColor2;

// Page to load same values in the gradient input as are showing in the background
color1.value = ('#ff0000');
color2.value = ('#ffff00');
 
// Display CSS code with rgb values under input boxes
function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background}`;
}

// Display CSS code to show rgb values from page load
let originalPage = window.addEventListener('DOMContentLoaded', (setGradient)
);

//Random number generator for each hex code value
function createRandom() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
    newColor += hex[Math.floor(Math.random() * 16)];
    }   
    return newColor;
}

// put new variable into new gradient that will update background
function setNewGradient() {
    newColor1 = createRandom();
    newColor2 = createRandom();
    color1.value = newColor1;
    color2.value = newColor2;
    setGradient();
};

// Event Listeners
button.addEventListener('click', setNewGradient);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
