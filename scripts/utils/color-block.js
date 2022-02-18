const colorBlock = ({element, color}) => {
  const thisBlock = element;
  if (typeof color === 'function') {
    thisBlock.style.backgroundColor = color();
  } else {
    thisBlock.style.backgroundColor = color;
  }
};

export default colorBlock;