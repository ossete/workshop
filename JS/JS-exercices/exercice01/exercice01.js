// let x = 1;
// let y = x++;

// console.log ("y= ", y); //1
// console.log ("x= ", x); //2

// let x = 1;
// let y = ++x;

// console.log ("y= ", y); //2
// console.log ("x= ", x); //2

/* FUNCTIONS */

// console.log( "Function test".startsWith("Fun") ); //true
// console.log( "Function test".startsWith("Fun") ); //false

// A function for calculating age:
function calculateAge (name, birthYear) {
  let currentDate = new Date().getFullYear();
  let personAge = currentDate - birthYear;

  return name + " is " + personAge + " years old.";
}

console.log( calculateAge ("Akif", 1988) );
