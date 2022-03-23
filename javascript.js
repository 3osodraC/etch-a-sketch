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
    let size = 16;
    let numCheck;
    let floatCheck = false;
    do {
        size = prompt('Set grid height & width (i.e 3x3 input: 3)');

        Number(size);
        numCheck = size.match(/[0-9]/);
        // If the remainder of a number divided by 1 != 0, then it's a float.
        size % 1 !== 0 ? floatCheck = true : floatCheck = false;

        if(size === null) {
            resize();
        } else if(size > 100) {
            alert('Max size: 100');
        } else if(size < 1) {
            alert('Minimum size: 1');
        } else if(numCheck === null || floatCheck === true) {
            alert('Non-Integers are invalid.');
        }
    }
    while(size > 100 || size < 1 || numCheck === null || floatCheck === true);

    removePreviousGrid();
    createNewGrid(size);
    resize();
    paint();
});

resetBtn.addEventListener('click', () => {
    reset();
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

function reset() {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));
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