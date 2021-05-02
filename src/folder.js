import { uniqueID } from './functions';

const foldersObj = {
  'default-folder': { 'folder-title': 'Default Folder', tasks: {} },
};

const createFolderElements = () => {
  const folders = document.querySelector('#folders');
  const folder = document.createElement('div');
  const button = document.createElement('div');

  return {
    folders,
    folder,
    button,
  };
};

const folderAttributes = ({ folder, button }, text, folderID) => {
  folder.className = 'folder';
  folder.id = folderID;
  folder.innerHTML = text;

  button.className = 'remove-folder';
  button.innerHTML = '<i class="fas fa-trash-alt fa-1x"></i>';
};

const folderAppend = ({ folders, folder, button }) => {
  folder.appendChild(button);
  folders.appendChild(folder);
};

const createFolder = () => {
  const folderElements = createFolderElements();
  const folderID = uniqueID();
  const text = document.querySelector('#new-folder').value;

  folderAttributes(folderElements, text, folderID);
  folderAppend(folderElements);

  foldersObj[folderID] = { 'folder-title': text, tasks: {} };

  localStorage.setItem(folderID, JSON.stringify(foldersObj[folderID]));
};

const recreateFolders = () => {
  Object.entries(localStorage).forEach((folderID) => {
    const folderElements = createFolderElements();
    const parsedContent = JSON.parse(folderID[1]);
    const text = parsedContent['folder-title'];

    folderAttributes(folderElements, text, folderID[0]);
    folderAppend(folderElements);

    foldersObj[folderID[0]] = parsedContent;
  });
};

export { createFolder, foldersObj, recreateFolders };
