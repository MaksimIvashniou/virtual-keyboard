function buildHtmlElement() {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.cols = 50;
  textarea.rows = 5;

  return textarea;
}

export { buildHtmlElement };
