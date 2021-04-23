export { uniqueID, closeForm };

/* Unique id generator */
function uniqueID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/* Close Form*/
function closeForm(element) {
  element.classList.add('hidden');
  element.reset();
}
