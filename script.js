
// Defining the button element
const button = document.getElementById('btn-main');

// Listener for click event so it changes the color randomly
button.addEventListener('click', function() {
    // Generate random RGB color
    const randomColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    button.style.backgroundColor = randomColor;
});

