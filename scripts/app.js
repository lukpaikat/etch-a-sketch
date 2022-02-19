import activeToolsIndicator from './utils/active-tools-indicator.js';
import createGrid from './utils/create-grid.js'
import clearGrid from './utils/clear-grid.js';
import randomColor from './utils/random-color.js';
import outlineGrid from './utils/outline-grid.js';
import config from './etc/config.js';

const clearButton = document.getElementById('clear-button');
clearButton.onclick = clearGrid;

const colorButton = document.getElementById('color');
colorButton.onchange = (e) => { config.color = e.target.value; };

const penButton = document.getElementById('pen-button');
penButton.onclick = (e) => {
  config.color = colorButton.value;
  activeToolsIndicator(e.target);
};

const randomButton = document.getElementById('random-button');
randomButton.onclick = (e) => {
  config.color =  randomColor;
  activeToolsIndicator(e.target);
};

const eraserButton = document.getElementById('eraser-button');
eraserButton.onclick = (e) => {
  config.color = '#fff';
  activeToolsIndicator(e.target);
};

const gridButton = document.getElementById('grid-button');
gridButton.onclick = outlineGrid;

const gridSize = document.getElementById('grid-size');
gridSize.onchange = (e) => createGrid(e.target.value)

createGrid(16);