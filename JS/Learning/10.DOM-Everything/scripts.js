// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector) {
  return document.createElement(selector);
}



// Target element → classic approach
// const main = document.querySelector('main'); console.log(main);

// Target element → awesome approach
const main = $('main'); console.log(main);


// →→→ Manage attributes
$('h1').setAttribute('id', 'main-title');
$('p').setAttribute('class', 'row');
$('#p4').removeAttribute('class'); // this will remove all attribute (not interested in values)
$('html').setAttribute('lang', 'fr')

// →→→ Manage class attributes
$('body').classList.add('menu-is-open', 'bob');
$('body').classList.remove('bob');



// →→→ CREATE ELEMENT [Classic approach]
// const p1 = document.createElement('p'); LONG VERSION, BEFORE CREATING A SPECIAL FUNCTION
const p1 = make('p');
p1.setAttribute('class', 'row');
p1.innerHTML = "Je suis le texte du nouveau paragraphe!"


const span = make('span');
span.textContent = 'Info: ';


// main.append(p1); // will add the element at the end of the main
p1.prepend(span); // will add the element at the beginning of the p1


//INSERT BEFORE - 2 arguments: what and the reference
main.insertBefore(p1, $('#p2'));

// Remove an element
// $('main').remove();

// →→→ ADD TEXT CONTENT
p1.textContent = '<span>Info :</span>A simple text.';

// →→→ ADD HTML CONTENT
p1.innerHTML = '<span class="success">Info : </span>A simple text.';

// →→→ YOU CAN DO MORE WITH HTML CONTENT
// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind


// This will touch all of them
// console.log( $$('p') );
// $$('p').forEach(function(item){
//   item.style.backgroundColor = '#ccc';
// } );

// →→→ DO STYLES
$('#p2').style.color = '#f00'
$('#p3').style.backgroundColor = '#ccc'
$('#p4').style.cssText = 'background-color: #fc0; color: #fff;'


// →→→ INSERT, APPEND, PREPEND


// CHALLANGE

// /* <div id="admin-msg" class="message">
//   <div class="msg-content">Some text here.
//   </div>
// </div> */


/* CREATE ADMIN MESSAGE 
-------------------------------------------------*/
let div1 = make('div');
let div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "Some admin text.";

div1.prepend(div2);

// $('body').append(div1);
// prepend icerigin basina ekler. append icerigin sonuna ekler. istenen yere eklemek icin insertBefore kullanilir.

