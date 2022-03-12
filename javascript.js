const gridContainer = document.querySelector('#grid-container');
const resetBtn = document.querySelector('.reset-btn');
let gridBox;

// Creates a 16x16 grid of white squares inside the board.
for(let i = 0; i < 256; i++) {
    gridBox = document.createElement('div');
    gridContainer.appendChild(gridBox);
    gridBox.className = 'grid-box';
}
let gridBoxes = document.querySelectorAll('.grid-box');

let pxSize = 500 / 16 - 2;

paint();

// Reset & Resize button.
resetBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));

    let size = 16;
    do {
        size = prompt('Set Size:');
        parseInt(size, 10);
    } while(size > 100);

    pxSize = 500 / size - 2.001;

    removePreviousGrid();
    createNewGrid(size);
    resize();
    paint();
});

// Functions:

function removePreviousGrid() {
    gridBoxes.forEach(gridBox => {
        gridContainer.removeChild(gridBox);
    });
}

// Uses the user's input (size) to create a new grid with the desired size.
function createNewGrid(size) {
    pxSize = 500 / size - 2.001;

    for(let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
        document.getElementById('grid-container').appendChild(gridBox);
        gridBox.className = 'grid-box';
    }
    // Reassigns the query selector to the new grid.
    gridBoxes = document.querySelectorAll('.grid-box');
}

// Resizes the grid's boxes to fit the container.
function resize() {
    gridBoxes.forEach(gridBox => {
        gridBox.setAttribute('style', `height: ${pxSize}px; width: ${pxSize}px;`);
    });
}

// Turns the squares black when the cursor hovers over them.
function paint() {
    gridBoxes.forEach(gridBoxes => gridBoxes.addEventListener('mouseover', () => {
    gridBoxes.setAttribute('style',
    `background-color: black; height: ${pxSize}px; width: ${pxSize}px;`)
    }));
}