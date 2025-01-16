const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.showPreference');
const closeButton = document.querySelector('dialog .closeDialog');

const lightmode = document.querySelector('.lightmode');
const darkmode = document.querySelector('.darkmode');
const blackonwhite = document.querySelector('.blackonwhite');
const whiteonblack = document.querySelector('.whiteonblack');


showButton.addEventListener('click', () => {
  dialog.showModal();
  dialog.classList.add('visible');
}); 

closeButton.addEventListener('click', () => {
  dialog.close();
  dialog.classList.remove('visible');
});

// sluit als je ernaast klikt
document.body.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
    dialog.classList.remove('visible');
  }
});

// Modes switchen

lightmode.addEventListener('click', () => {
  document.body.classList.add('lightmode');
  document.body.classList.add('whiteonblack');
});

darkmode.addEventListener('click', () => {
  document.body.classList.remove('lightmode');
  document.body.classList.remove('whiteonblack');
});

blackonwhite.addEventListener('click', () => {  
  document.body.classList.remove('lightmode');
  document.body.classList.remove('whiteonblack');
});

whiteonblack.addEventListener('click', () => {      
  document.body.classList.add('lightmode');
  document.body.classList.add('whiteonblack');
});




