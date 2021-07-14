// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close buttons
const closeBtn = document.getElementById('closeBtn');
const closeX = document.getElementById('closeX');

// Listen for click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeX.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}