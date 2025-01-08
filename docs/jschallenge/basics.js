console.log("Workie")

const button = document.querySelector('button') // slaat het button element op in een variabele

button.addEventListener('click', moveParagraph) // javascript werkt met dot notation, buttonpressed is een callback functie

function moveParagraph () {
//select paragraph
const paragraph = document.querySelector('p') 
//add class to paragraph
paragraph.classList.toggle('moveit')

//change custom property
paragraph.style.setProperty('--opacity', 1) 
}

// conventions
// use a named callback fucntion instead of an anonymous function
// use meaningful names for your variables
// use camelCase for your variables
// use comments to explain your code
// never set styling in javascript, pass values trough custom properties
// always use button to trigger an action