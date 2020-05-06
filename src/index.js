import { fetchMovies, onFormSubmit } from './movies';
import { initSortable } from './plugins/init-sortablejs';
import { initMarkdown } from './plugins/init-markdown-it';
import { initSelect2 } from './plugins/init-select2';

initSortable();
initMarkdown();
initSelect2();

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', onFormSubmit);
