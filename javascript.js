const gridContainer = document.querySelector('#grid-container');
const resetBtn = document.querySelector('.reset-btn');

// Creates a 16x16 grid of white squares inside the board.
for(let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridContainer.appendChild(gridBox);
    gridBox.className = 'grid-box';
}

const gridBoxes = document.querySelectorAll('.grid-box');

let pxSize = 500 / 16 - 2;
let previousNumberOfBoxes = 256;

// Reset & Resize button.
resetBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));

    let size = 16;
    do {
        size = prompt('Set Size:');
        parseInt(size, 10);
    } while(size > 100);

    pxSize = 500 / size - 2.001;

    createNewGrid(size);
    resize();
});

paint();

// Functions:

// Uses the user's input (size) to create a new grid with the desired size.
function createNewGrid(size) {
    for(let i = 0; i < size * size - previousNumberOfBoxes; i++) {
        let gridBox = document.createElement('div');
        document.getElementById('grid-container').appendChild(gridBox);
        gridBox.className = 'grid-box';
        gridBox.setAttribute('style', `height: ${pxSize}px; width: ${pxSize}px;`);
    }
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