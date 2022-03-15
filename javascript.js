const gridContainer = document.querySelector('#grid-container');
const resetResizeBtn = document.querySelector('.reset-resize-btn');
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
resetResizeBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));

    let size = 16;
    let alphCheck;
    do {
        size = prompt('Set grid height & width (i.e 3x3 input: 3)');

        alphCheck = size.match(/[abcdefghijklmnopqrstuvwxyz]/i);

        parseInt(size, 10);
    } while(size > 100 || size < 1 || alphCheck != null);

    removePreviousGrid();
    createNewGrid(size);
    resize();
    paint();
});

// Reset button.
resetBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white; '))
    resize();
});

// Functions:

function removePreviousGrid() {
    gridBoxes.forEach(gridBox => {
        gridContainer.removeChild(gridBox);
    });
}

// Uses the user's input (size) to create a new grid with the desired size.
function createNewGrid(size) {
    pxSize = 500 / size - 2;

    for(let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
        document.getElementById('grid-container').appendChild(gridBox);
        gridBox.className = 'grid-box';
    }
    // Reassigns the query selector to the new grid.
    gridBoxes = document.querySelectorAll('.grid-box');
}

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