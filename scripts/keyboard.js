import { buildHtmlElement as buildKeyboard } from './htmlBuilder/keyboard.js';

export default class Keyboard {
  _lang;
  _layout;
  _parentNode;
  _node;

  constructor(parentNode, lang, layout) {
    this._parentNode = parentNode;
    this._node = buildKeyboard(layout.classSelector);
    this._lang = lang;
    this._layout = layout;
  }

  init() {
  }

  buildHtmlElement() {
    this._parentNode.append(this._node);
  }
}
