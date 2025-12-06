
// Defining the button element
const button = document.getElementById('btn-main');

// Listener for click event so it changes the color randomly
button.addEventListener('click', function() {
    // Generate random RGB color
    button.style.backgroundColor = randomColor();
    button.style.color = randomTextColor();
});

// Defining the spam button 
const buttonSpam = document.getElementById('btn-spam');

// Listener for click event to change the color rapidly
buttonSpam.addEventListener('click', function(){
    // Loop 5x to create a rainbow effect
    for(let i = 0; i<= 5; i++){
        setTimeout(function() {
            button.style.backgroundColor = randomColor();
            button.style.color = randomTextColor();
        }, i * 250); // Delay increases per iteration
    }
})

// Defining the loop button 
const buttonLoop = document.getElementById('btn-loop');

// Listener for click event to change the color continuously
let loopInterval; // Variable to hold the interval ID
buttonLoop.addEventListener('click', function(){
    // If loop is already running, stop it
    if(loopInterval){ // if there is a loop interval running
        clearInterval(loopInterval); // Clear the interval to stop the loop
        loopInterval = null; // Reset the interval variable
        buttonLoop.textContent = "🔁"; // change icon back to loop 
    } else {
        // Start a new interval to change colors every 500ms
        loopInterval = setInterval(function() {
            button.style.backgroundColor = randomColor();
            button.style.color = randomTextColor();
        }, 250); // 500 ms? 
        buttonLoop.textContent = "🛑"; // change icon to stop 
    }
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
        // Generate dark random color (extreme range to ensure darkness)
        let darkR = randomNumber255() * 0.3;
        let darkG = randomNumber255() * 0.3;
        let darkB = randomNumber255() * 0.3;
        return `rgb(${darkR}, ${darkG}, ${darkB})`;
    }else{
        // Generate light random color (extreme range to ensure lightness)
        let lightR = 175 + randomNumber255() * 0.3;
        let lightG = 175 + randomNumber255() * 0.3;
        let lightB = 175 + randomNumber255() * 0.3;
        return `rgb(${lightR}, ${lightG}, ${lightB})`;
    }
}

// Dark Mode Toggle Button
const buttonDarkMode = document.getElementById('btn-darkmode');

buttonDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // IF ELSE STATEMENT TO TOGGLE ICON, BASICALLY IF MOON SET TO SUN, ELSE SET TO MOON 
    buttonDarkMode.textContent = buttonDarkMode.textContent === "🌙" ? "☀️" : "🌙";
});

// Start with Dark Mode
buttonDarkMode.click();