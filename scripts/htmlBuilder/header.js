function buildHtmlElement() {
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('heading', 'h1', 'header__title');
  title.textContent = 'RSS Виртуальная клавиатура';

  header.append(title);
  return header;
}

export { buildHtmlElement };
