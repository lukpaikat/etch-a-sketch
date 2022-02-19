const colorBlock = ({element, color}) => {
  const thisBlock = element;
  thisBlock.style.backgroundColor = typeof color === 'function' ? color() : color;
};

export default colorBlock;