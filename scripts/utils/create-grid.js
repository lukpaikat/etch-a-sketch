import colorBlock from './color-block.js';
import config from '../etc/config.js';

const createGrid = (gridSize) => {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  let mousedown = false;
  gridContainer.onmousedown = () => mousedown = true;
  gridContainer.onmouseup = () => mousedown = false;
  gridContainer.innerHTML = '';
  const targetTotalItem = gridSize ** 2;
  let currentTotalItem = 0;
  while (currentTotalItem < targetTotalItem) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    item.style.backgroundColor = config.clearColor;
    item.onmouseover = (e) => {
      if (mousedown) {
        colorBlock({
          element: e.target,
          color: config.color()
        });
      }
    };
    item.onmousedown = (e) => {
      colorBlock({
        element: e.target,
        color: config.color()
      });
    };
    gridContainer.appendChild(item);
    currentTotalItem = currentTotalItem + 1;
  }
}

export default createGrid;