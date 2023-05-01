import { buildHtmlElement as buildMain } from './htmlBuilder/main.js';

export default class App {
  _lang;
  _parentNode;
  _node;

  constructor(parentNode, lang) {
    this._lang = lang;
    this._parentNode = parentNode;
    this._node = buildMain();
  }

  init() {
  }

  buildHtmlElement() {
    this._parentNode.append(this._node);
  }
}
