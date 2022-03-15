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

resetResizeBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));

    let size = 16;
    let numCheck;
    let floatCheck = false;
    do {
        size = prompt('Set grid height & width (i.e 3x3 input: 3)');

        numCheck = size.match(/[1234567890]/);
        Number(size);

        // If the remainder of a number divided by 1 != 0, then it's a float.
        if(size % 1 !== 0) {
            floatCheck = true;
        } else {
            floatCheck = false;
        }

    } while(size > 100 || size < 1 || numCheck === null || floatCheck === true);

    removePreviousGrid();
    createNewGrid(size);
    resize();
    paint();
});

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