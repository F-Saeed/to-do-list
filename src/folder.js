export { createFolder };

const createFolder = (uniqueID) => {
  const folderElements = createFolderElements(uniqueID);

  folderAttributes(folderElements);
  folderAppend(folderElements);

  localStorage.setItem(folderElements.folderID, JSON.stringify({}));
};

const createFolderElements = (uniqueID) => {
  const folders = document.querySelector('#folders');
  const folder = document.createElement('div');
  const folderID = uniqueID();
  const button = document.createElement('div');
  const text = document.querySelector('#new-folder').value;

  return { folders, folder, folderID, button, text };
};

const folderAttributes = ({ folder, button, text, folderID }) => {
  folder.className = 'folder';
  folder.id = folderID;
  folder.innerHTML = text;

  button.className = 'btn';
  button.id = 'remove';
  button.innerHTML = '<i class="fas fa-trash-alt fa-1x"></i>';
};

const folderAppend = ({ folders, folder, button }) => {
  folder.appendChild(button);
  folders.appendChild(folder);
};
