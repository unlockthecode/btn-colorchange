
// Defining the button element
const button = document.getElementById('btn-main');

// Listener for click event so it changes the color randomly
button.addEventListener('click', function() {
    // Generate random RGB color
    button.style.backgroundColor = randomColor();
    button.style.color = randomColor();
});


// Helper function to generate a random number between 0 and 255
function randomNumber255(){
    return Math.round(Math.random() * 255);
}

// Make the random color generator a function to reuse 
function randomColor(){
    return `rgb(${randomNumber255()}, ${randomNumber255()}, ${randomNumber255()})`;
}