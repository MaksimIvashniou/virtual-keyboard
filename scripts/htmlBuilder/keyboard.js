function buildHtmlElement(layout) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard', layout);

  return keyboard;
}

export { buildHtmlElement };
