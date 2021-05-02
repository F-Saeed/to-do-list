import { createTask, removeTasks, recreateTasks } from './task';
import { createFolder, foldersObj } from './folder';
import { closeForm } from './functions';

let folderID = 'default-folder';
const taskFormDiv = document.querySelector('#tasks-form');

const addFolder = (form) => (event) => {
  event.preventDefault();

  createFolder();
  closeForm(form);
};

const hideFolderForm = (folderForm) => () => {
  folderForm.reset();
  folderForm.classList.add('hidden');
};

const removeFolder = (tasks, folders) => (event) => {
  if (event.target && event.target.className === 'remove-folder') {
    const parent = event.target.parentElement;
    const parentID = event.target.parentElement.id;

    folders.removeChild(parent);
    removeTasks(tasks, folderID);
    localStorage.removeItem(parentID);
  }
};

const selectFolder = (tasks) => (event) => {
  if (event.target.className === 'folder') {
    folderID = event.target.id;
    tasks.innerHTML = '';
    tasks.setAttribute('data-index', folderID);

    recreateTasks(folderID);
  }
};

const openTaskForm = (folders) => () => {
  if (folders.innerText) {
    document.querySelector('#tasks-form').classList.remove('hidden');
  }
};

const addTask = (taskForm) => (event) => {
  event.preventDefault();

  createTask(folderID, taskForm);
  taskFormDiv.className = 'hidden';
  taskForm.reset();
};

const hideTaskForm = (taskForm) => () => {
  taskForm.reset();
  document.querySelector('#tasks-form').classList.add('hidden');
};

const removeTask = (tasks) => (event) => {
  if (event.target && event.target.className === 'remove-task') {
    const parent = event.target.parentElement;
    const parentID = event.target.parentElement.id;

    tasks.removeChild(parent);
    delete foldersObj[parentID];
    localStorage.removeItem(parentID);
  }
};

export {
  addFolder,
  removeFolder,
  selectFolder,
  hideFolderForm,
  openTaskForm,
  addTask,
  hideTaskForm,
  removeTask,
};
