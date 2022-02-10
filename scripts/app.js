let mousedown = false;
document.body.onmousedown = () => mousedown = true;
document.body.onmouseup = () => mousedown = false;

const blockColor = (element) => {
  const thisBlock = element;
  thisBlock.style.backgroundColor = '#000000';
}

const initiateGrid = () => {
  const gridContainer = document.querySelector('.grid-container');
  const targetTotalItem = 16 * 16;
  let currentTotalItem = 0;
  while (currentTotalItem < targetTotalItem) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    item.onmouseover = (e) => {
      if (mousedown) {
        blockColor(e.target);
      }
    };
    item.onmousedown = (e) => {
      blockColor(e.target);
    };
    gridContainer.appendChild(item);
    currentTotalItem = currentTotalItem + 1;
  }
}

initiateGrid();