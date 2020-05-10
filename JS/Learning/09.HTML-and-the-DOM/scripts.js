// DOM is only related to JS.

/* DOM = Document Object Model
--------------------------------- */
// Grab the head title DOM object
const title = document.querySelector('title');

//Display the object
console.log(title);

//Display the inner content of the object
console.log(title.innerHTML);

//Using Chaining (writing in one line)

//Grab the object and store it
const h1 = document.querySelector('h1');
h1.innerHTML = "I just changed the h1 content with JS !!!";


//ADD or REMOVE A CLASS
h1.classList.add('bob', 'jack');
console.log(h1.getAttribute('class'));
h1.classList.remove('jack');

// SET/GET Element Attributes
h1.setAttribute('id', 'main-header'); //bunu kullanarak dark theme ekle. body e id ekle.
console.log(h1.getAttribute('class'));
// h1.setAttribute('id', ''); with an empty value, we can delete the value.

// h1.removeAttribute('id');
console.log(h1);

// GET ELEMENT BY ID ("my-console" is the ID of my element)
const myConsole = document.getElementById('my-console')
// the same element with query selector
// const myConsole = document.querySelector('#my-console')

myConsole.innerHTML = "let bob = 3;";



const myClass = document.getElementsByClassName