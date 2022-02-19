const activeToolsIndicator = (activeTool) => {
  const lastActiveTool = document.querySelector('.active-tool');
  lastActiveTool.classList.remove('active-tool');
  activeTool.classList.add('active-tool');
}

export default activeToolsIndicator;