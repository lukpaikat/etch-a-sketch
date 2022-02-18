const outlineGrid = () => {
  const gridItems = document.getElementsByClassName('grid-item');
  for (const item of gridItems) {
    item.classList.toggle('outline');
  }
}

export default outlineGrid;