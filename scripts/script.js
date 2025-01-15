const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.showPreference');
const closeButton = document.querySelector('dialog button');

showButton.addEventListener('click', () => {
  dialog.showModal();
  dialog.classList.add('visible');
}); 

closeButton.addEventListener('click', () => {
    dialog.close();
    });
