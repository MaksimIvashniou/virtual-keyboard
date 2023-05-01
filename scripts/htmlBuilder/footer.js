function buildHtmlElement() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const osInfo = document.createElement('p');
  osInfo.classList.add('p', 'footer__paragraph');
  osInfo.textContent = 'Клавиатура создана в операционной системе Windows';

  const switchLangInfo = document.createElement('p');
  switchLangInfo.classList.add('p', 'footer__paragraph');
  switchLangInfo.textContent =
    'Для переключения языка комбинация: левыe ctrl + alt';

  footer.append(osInfo);
  footer.append(switchLangInfo);

  return footer;
}

export { buildHtmlElement };
