/* FOR LOOPS
------------------------------------*/
// let names = ["James", "Julia", "Edith"];
// show(names);

let num = 10;

// Classic loop:
// 1st part = initialization
// 2nd part = condition - when do you want to stop the loop?
// 3rd part = incrementation
for( let i = 0; i <= 10; i += 1) { //== i++, i = i + 1
  // show(i);
}

let start = -100;
let max = 1;

for( let i = start; i <= max; i += 1) { //== i++, i = i + 1
  // show(i);
  //show("My current number is: " + i)
}

let names = ["James", "Julia", "Edith"]; 
for ( let i = 0; i < names.length; i++ ) {

  // show(names[i]);
} 

// CHALLENGE
// 1. Display the numbers between 20 and 30
// 
let first = 20;
let last = 30;
// for ( let i = first; i <= last; i++) {
  // show(i);


let todos = [
  {
    text: "Learn JS",
    completed: true
  },
  {
    text: "Learn PHP",
    completed: false
  },
  {
    text: "Learn Python",
    completed: false
  }
];
//Display the name of the todo and the completed status
for ( let i = 0; i < todos.length; i++) {

  let text = todos[i].text;
  let completed = todos[i].completed;
  // show(todos[i].text + ": " + todos[i].completed);

//The short way - EKSIK KALDI TAMAMLA
let displayStatus = (completed === true) ? "Done!" : "Todo...";
}

/* FOREACH LOOPS
------------------------------------*/
// foreach takes a function as a argument

// We call the function argument "Closure" or "anonymous function"
todos.forEach(function(item) {
  show(item.text);
}); 

// Long version of the code above
function bob(item) {
    show(item.text);
}
todos.forEach(bob);