import { buildHtmlElement as buildMain } from './htmlBuilder/main.js';
import Textarea from './textarea.js';

export default class App {
  _lang;
  _textArea;
  _parentNode;
  _node;

  constructor(parentNode, lang) {
    this._lang = lang;
    this._parentNode = parentNode;
    this._node = buildMain();
    this._textArea = new Textarea(this._node);
  }

  init() {
    this._textArea.buildHtmlElement();

    this._textArea.init();
  }

  buildHtmlElement() {
    this._parentNode.append(this._node);
  }
}
