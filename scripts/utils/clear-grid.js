import config from '../etc/config.js';
import colorBlock from './color-block.js';

const clearGrid = () => {
  const gridItems = document.getElementsByClassName('grid-item');
  for (const item of gridItems) {
    colorBlock({
      element: item,
      color: config.clearColor,
    });
  }
};

export default clearGrid;