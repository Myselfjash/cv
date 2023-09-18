// Get the h1 element
const h1Element = document.querySelector('.font-wala');

// Define the text to display and initialize the index
const textToType = "I'm Jashan Preet";
let currentIndex = 0;

// Function to add characters to the h1 element with a typing effect
function typeText() {
    if (currentIndex < textToType.length) {
        // Add the next character to the h1 element
        h1Element.textContent += textToType.charAt(currentIndex);
        currentIndex++;

        // Call the function recursively with a delay
        setTimeout(typeText, 500); // Adjust the typing speed (e.g., 100 milliseconds)
    }
}

// Call the typing function when the page loads
window.addEventListener('load', typeText);
