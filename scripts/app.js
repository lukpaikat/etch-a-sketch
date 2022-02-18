import createGrid from './utils/create-grid.js'
import clearGrid from './utils/clear-grid.js';
import randomColor from './utils/random-color.js';
import config from './etc/config.js';

const clearButton = document.getElementById('clear-button');
clearButton.onclick = clearGrid;

const colorButton = document.getElementById('pen');
colorButton.onclick = (e) => { config.color = () => e.target.value; };
colorButton.onchange = (e) => { config.color = () => e.target.value; };

const randomButton = document.getElementById('random-button');
randomButton.onclick = () => { config.color = () => randomColor() }

const gridSize = document.getElementById('grid-size');
gridSize.onchange = (e) => createGrid(e.target.value)

createGrid(16);