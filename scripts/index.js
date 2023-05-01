import { buildHtmlElement as buildHeader } from './htmlBuilder/header.js';
import { buildHtmlElement as buildFooter } from './htmlBuilder/footer.js';

const body = document.body;
body.classList.add('body');

body.append(buildHeader());
body.append(buildFooter());
