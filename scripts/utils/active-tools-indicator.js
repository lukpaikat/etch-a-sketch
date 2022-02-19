const activeToolsIndicator = (activeButton) => {
  const tools = document.getElementsByClassName('tool-button');
  for (const tool of tools) {
    tool.classList.remove('active-tool');
  }
  activeButton.classList.add('active-tool');
}

export default activeToolsIndicator;