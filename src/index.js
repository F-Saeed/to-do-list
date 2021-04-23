// Assets
import 'normalize.css';
import './sass/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

// Modules
import { addFolder, removeFolder } from './dom';
import { uniqueID, closeForm } from './functions';
import { createFolder } from './folder';

(() => {
  const form = document.querySelector('#sidebar-section > form');
  const folders = document.querySelector('#folders');

  localStorage.setItem('default-folder', {});

  form.addEventListener(
    'submit',
    addFolder({ createFolder, closeForm, form, uniqueID })
  );

  folders.addEventListener('click', removeFolder());
})();
