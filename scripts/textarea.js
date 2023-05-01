import { buildHtmlElement as buildTextarea } from './htmlBuilder/textarea.js';

export default class Textarea {
  _parentNode;
  _node;
  constructor(parentNode) {
    this._parentNode = parentNode;
    this._node = buildTextarea();
  }

  init() {
  }

  buildHtmlElement() {
    this._parentNode.append(this._node);
  }
}
