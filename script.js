const container = document.querySelector('.container');

// Add button to the top of the screen
const button = document.createElement('button');
button.textContent = 'Set Grid Size';
document.body.insertBefore(button, container);

// Function to create grid
function createGrid(size) {
  container.innerHTML = ''; // Remove existing squares

  // Dynamically set grid columns and rows
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  // Add event listeners
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'red';
    });
    square.addEventListener('mouseleave', () => {
      square.style.backgroundColor = 'blue';
    });
  });
}

// Initial grid
createGrid(16);

// Button click handler
button.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side (max 100):', 16);
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  createGrid(newSize);
});