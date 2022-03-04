const gridContainer = document.querySelector('#grid-container');
const resetBtn = document.querySelector('.reset-btn');

// Creates a 16x16 grid of white squares inside the board.
for(let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    document.getElementById('grid-container').appendChild(gridBox);
    gridBox.className = 'grid-box';
}

const gridBoxes = document.querySelectorAll('.grid-box');

let currentPxSize = 500 / 16 - 2;
resetBtn.addEventListener('click', () => {
    gridBoxes.forEach(gridBoxes => gridBoxes.setAttribute('style', 'background-color: white;'));

    let size = 16;
    do {
        size = prompt('Set Size:');
        parseInt(size, 10);
    } while(size > 100);
    console.log(size);

    currentPxSize = 500 / size - 2;
    resize(size);
});

function resize(size) {
    for(let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
        document.getElementById('grid-container').appendChild(gridBox);
        gridBox.className = 'grid-box';
    }
    gridBoxes.forEach(gridBoxes => {
        gridBoxes.setAttribute('style', `height: ${currentPxSize}px; width: ${currentPxSize}px;`);
    });
}

// Turns the squares black when the cursor touches them.
gridBoxes.forEach(gridBoxes => gridBoxes.addEventListener('mouseover', () => {
    gridBoxes.setAttribute('style',
    `background-color: black; border: solid 0.5px #070707;
    height: ${currentPxSize}px; width: ${currentPxSize}px;`)
}));

// when you add the size selector thingy,
// set the px size of t to 500/Number.
// MAYBE add the remainder of 500/boxNumber to  container h & w.