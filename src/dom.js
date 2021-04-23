export { addFolder, removeFolder };

const addFolder = ({ createFolder, closeForm, form, uniqueID }) => {
  return (event) => {
    event.preventDefault();

    createFolder(uniqueID);
    closeForm(form);
  };
};

const removeFolder = () => {
  return (event) => {
    if (event.target && event.target.id === 'remove') {
      const parent = event.target.parentElement;
      const parentID = event.target.parentElement.id;

      document.querySelector('#folders').removeChild(parent);
      localStorage.removeItem(parentID);
    }
  };
};
