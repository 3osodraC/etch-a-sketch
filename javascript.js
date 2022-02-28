const gridContainer = document.querySelector('#grid-container');

let gridBoxes = [];
for(let i = 0; i < 256; i++) {
    gridBoxes[i] = document.createElement('div');
    document.getElementById('grid-container').appendChild(gridBoxes[i]);
    gridBoxes[i].className = 'grid-box';
}