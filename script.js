
// Defining the button element
const button = document.getElementById('btn-main');

// Listener for click event so it changes the color randomly
button.addEventListener('click', function() {
    // Generate random RGB color
    button.style.backgroundColor = randomColor();
    button.style.color = randomTextColor();
});


// Global RGB values
let r, g, b;

// Helper function to generate a random number between 0 and 255
function randomNumber255(){
    return Math.round(Math.random() * 255);
}

// Make the random color generator a function to reuse 
function randomColor(){
    r = randomNumber255();
    g = randomNumber255();
    b = randomNumber255();
    return `rgb(${r},${g},${b})`;
}

// Brightness Calculation function
function brightness(r, g, b) {
    // standard relative luminance formula
    return Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
}

function dynamicTextColor(){
    // return light or dark if brightness, passing along rgb values is less than or greater than 128
    return brightness(r, g, b) < 128 ? 'light' : 'dark';
}

function randomTextColor(){
    if (dynamicTextColor() == "light"){
        // Generate dark random color
        let darkR = randomNumber255() * 0.5;
        let darkG = randomNumber255() * 0.5;
        let darkB = randomNumber255() * 0.5;
        return `rgb(${darkR}, ${darkG}, ${darkB})`;
    }else{
        // Generate light random color
        let lightR = 128 + randomNumber255() * 0.5;
        let lightG = 128 + randomNumber255() * 0.5;
        let lightB = 128 + randomNumber255() * 0.5;
        return `rgb(${lightR}, ${lightG}, ${lightB})`;
    }
}