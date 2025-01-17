const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.showPreference');
const removeButton = document.querySelector('.removePreference');
const closeButton = document.querySelector('dialog .closeDialog');

const lightmode = document.querySelector('.lightmode img');
const darkmode = document.querySelector('.darkmode img');
const blackonwhite = document.querySelector('.blackonwhite');
const whiteonblack = document.querySelector('.whiteonblack');

const body = document.querySelector('body');

const externalWindowCheck = document.querySelector('.externalWindowCheckBox');
const reduceAnimationsCheckBox = document.querySelector('.reduceAnimationsCheckBox');


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
  body.style.setProperty('--bg-color-white', '#fff');
  body.style.setProperty('--text-color-black', '#222');
  darkmode.classList.remove('isActive');
  lightmode.classList.add('isActive');
});

darkmode.addEventListener('click', () => {
  body.style.setProperty('--bg-color-white', '#121c39'); 
  body.style.setProperty('--main-color', '#00716b'); 
  body.style.setProperty('--text-color-black', '#e5e5e5');
  lightmode.classList.remove('isActive');
  darkmode.classList.add('isActive');
});

// Als je de box hebt gechecked opent die links in een nieuw venster

externalWindowCheck.addEventListener('change', () => {
  document.addEventListener('click', (event) => {
    if (externalWindowCheck.checked && event.target.tagName === 'A') {
      event.preventDefault();
      const url = event.target.href; 
      window.open(url, '_blank');
    }
  });
});

removeButton.addEventListener('click', () => {
  externalWindowCheck.checked = false
  body.style.setProperty('--bg-color-white', '#fff');
  body.style.setProperty('--text-color-black', '#222');
  lightmode.classList.remove('isActive');
  darkmode.classList.remove('isActive');
});
