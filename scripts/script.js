const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.showPreference');
const closeButton = document.querySelector('dialog .closeDialog');

showButton.addEventListener('click', () => {
  dialog.showModal();
  dialog.classList.add('visible');
}); 

closeButton.addEventListener('click', () => {
  dialog.close();
  dialog.classList.remove('visible');
});

document.body.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
    dialog.classList.remove('visible');
  }
});
