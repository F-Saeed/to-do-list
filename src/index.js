// Assets
import 'normalize.css';
import './sass/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

// Modules
import {
  addFolder,
  removeFolder,
  selectFolder,
  hideFolderForm,
  openTaskForm,
  addTask,
  hideTaskForm,
  removeTask,
} from './dom';
import { foldersObj, recreateFolders } from './folder';
import { storagePresent } from './functions';
import { recreateTasks } from './task';

(() => {
  storagePresent(recreateFolders, recreateTasks, foldersObj);

  const folderForm = document.querySelector('#sidebar-section > form');
  const folders = document.querySelector('#folders');
  const addTaskButton = document.querySelector('#add-task');
  const taskForm = document.querySelector('#tasks-form > form');
  const tasks = document.querySelector('#tasks');
  const cancelFolderForm = document.querySelector('#cancel-folder');
  const cancelTaskForm = document.querySelector('#cancel-task');

  folderForm.addEventListener('submit', addFolder(folderForm));

  cancelFolderForm.addEventListener('click', hideFolderForm(folderForm));

  folders.addEventListener('click', removeFolder(tasks, folders));

  folders.addEventListener('click', selectFolder(tasks));

  addTaskButton.addEventListener('click', openTaskForm(folders));

  taskForm.addEventListener('submit', addTask(taskForm));

  cancelTaskForm.addEventListener('click', hideTaskForm(taskForm));

  tasks.addEventListener('click', removeTask(tasks));
})();
