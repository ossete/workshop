/* COMMENTS 
------------------------------------------------*/
// This is a single line comment
/* 
This is a block
comment
*/

/* Other comment methods
# CLI / Bash
# Python
--------------------------------
*/




/* VARIABLES 
------------------------------------------------*/
/* 
/* NAMING RULES 
----------------------------*/
//1. No spaces
//2. You can not start with numbers
//3. You can not use dashes or  mathematical operators. dash is understanded as a minus (operator)
//4. You can not use reserved keywords.

/* 
"My name is Bob ?" "double quotation marks";
'My name is Bob ?' 'single quotation marks';
*/

// to define a variable use "let" and "const" and not "var", problematic and old school
// in javascript "str = "My name is Bob ?" " is another method. witout "let"
// we should add a ";" at the end of the line, even if it is not obligatory.

let str = "My name is bob ?"; // best practice. "str" is the name of variable, which is randomly chosen by coder. 
const number = 9; // you can not change this value. it stays intact.
var good = false;

/* NAMING BEST PRACTICES 
-> camel case !
----------------------------*/
let my_name = "Akif";
let myName = "Kamil"; // camelCase is the standard version.
let someHeadsAreGonnaRoll = "Judas Priest song";
let some_Heads_Are_Gonna_Roll = "Judas Priest song";

/* JS IS CASE SENSITIVE
----------------------------*/
let name = "Akif"; // not the same as this: 
let Name = "Akif"; //These are two different variables for pyhton, JS... have to find another name.

/* A VAR. IT'S A CONTAINER.
 * It can contain EVERYTHING
----------------------------*/
let num = 9; //numbers
let num2 = (9 + 9) - (3*5);
let str4 = "Bla bla"; //strings
let cond = true; //booleans. true or false. 1 or 0.
let data = [1,2,3,"Bob"]; //array (french: tableau). inside the square braces.
let object = { // inside the curly braces
  name: "John",
  age: 23,
};




/* STRINGS 
------------------------------------------------*/
let str1 = "I'm 18 years of age";
let str2 = 'I\'m 18 years of age'; //escape character

// In JS we concatenate with + sign
let str3 = "I'm " + 35; 

let person = "Bob";
let age = "32";
let phrase = name + " is " + age + " years old."; //Bob is 32 years old.

// console.log(phrase);
// NATIVE STRING METHODS
let txt       = "Apple is red";
let txtLength = txt.length; //console.log(txtLength);

let txt2      = "Beatles"; //console.log(txt2.split(""));
let txt3      = "Powercoders"; //console.log( txt3.substr(5, 2) );


/* NUMBERS
------------------------------------------------*/
let integer   = 92; // integer
let negative  = -92; // negative
let float     = 1.5; //float
let calculate = 8 + 2; //console.log(calculate);
let calc2     = 2 + 3 * 10; //32
let calc3     = (2 + 3) * 10; //50
let calc4     = -2 + (-2); //console.log(calc4);

// NATIVE NUMBER METHODS
let rand      = Math.random() * 10; //console.log(rand);
let rand1     = Math.random(); // console.log(rand1);
let randInt   = Math.round(rand); //console.log(randInt);
let roundCeil = Math.ceil(1.2567898); //console.log(roundCeil);
let roundFloor = Math.floor(1.2567898); //console.log(roundFloor);




/* ARRAY (LISTS)
------------------------------------------------*/
let arr1  = [1, 2, 3, 4, 5]; //console.log(arr1);  //integers in an array
let arr2  = ["Sorin", "Jane", "Tarzan"]; // console.log(arr2);
//console.log( "Numbers array:", arr1[2] ); //3
//console.log( arr2[2] ); //Tarzan


// NATIVE ARRAY METHODS
// Add to array
arr2.push("Bob");  //console.log(arr2);
// console.log( arr2.length );

// Delete from the array
//arr2.pop(); console.log( arr2 ); //last element
//arr2.shift(); console.log( arr2 ); //first element

//arr2.splice(1, 2);  console.log(arr2); //deletes "2" items starting from "1." (order commence with 0) character

//Change a value inside an array
arr2[0] = "Rachel"; //console.log(arr2)


/* FUNCTIONS permets us modular programming
------------------------------------------------*/
// when we see the parenthesis they should remind us function.
function calculateAge (name, birthYear) {
// these spaces makes easier to read a function 
  // let name = "Mutlu";

  let date = new Date();
  let currentYear = date.getFullYear(); //console.log(currentYear);
  let age = currentYear - birthYear;
// these spaces makes easier to read a function
  return name + " is " + age + " years old." ; //Akif is 32 years old. 

  //Nothing will be displayed after the first return
  let bob = 56;
  return bob;
}
console.log ( calculateAge("Bob", 1988) ); //function calling dont use ";"
console.log ( calculateAge("Josh", 1978) );
console.log ( calculateAge("Jennifer", 1968) );
