/* Storage Already present? */
const storagePresent = (recreateFolders, recreateTasks, obj) => {
  if (localStorage.length && localStorage.getItem('default-folder')) {
    const startingFolder = document.querySelector('#default-folder');
    startingFolder.classList.add('hidden');

    recreateFolders();
    recreateTasks('default-folder');
    return;
  }

  if (localStorage.length) {
    const startingFolder = document.querySelector('#default-folder');
    startingFolder.classList.add('hidden');

    recreateFolders();
    return;
  }

  obj['default-folder'] = { 'folder-title': 'Default Folder', tasks: {} };
  recreateFolders('default-folder');
};

/* Unique id generator */
const uniqueID = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

/* Close Form */
const closeForm = (element) => {
  element.classList.add('hidden');
  element.reset();
};

export { uniqueID, closeForm, storagePresent };
