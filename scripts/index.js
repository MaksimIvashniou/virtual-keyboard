import { buildHtmlElement as buildHeader } from './htmlBuilder/header.js';
import { buildHtmlElement as buildFooter } from './htmlBuilder/footer.js';
import App from './app.js';

const body = document.body;
body.classList.add('body');

const app = new App(body, 'en');

body.append(buildHeader());
app.buildHtmlElement();
body.append(buildFooter());
