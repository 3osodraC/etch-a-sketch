const gridContainer = document.querySelector('#grid-container');

for(let i = 0; i < 256; i++) {
    let gridBoxes = document.createElement('div');
    document.getElementById('grid-container').appendChild(gridBoxes);
    gridBoxes.className = 'grid-box';
}

const gridBox = document.querySelectorAll('.grid-box');
gridBox.forEach(gridBox => gridBox.addEventListener('mouseover', () => {
    console.log('hey');
    gridBox.setAttribute('style', 'background-color: black')
}));

// when you add the size selector thingy,
// set the px size of the boxes to 500/boxNumber.