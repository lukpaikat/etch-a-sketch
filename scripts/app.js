import createGrid from './utils/create-grid.js'
import clearGrid from './utils/clear-grid.js';

const clearButton = document.getElementById('clear-button');

clearButton.onclick = clearGrid;
createGrid(16);