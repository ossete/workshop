// alert("It's working!"); to be sure if javascript file was attached and working
// confirm("It's working!");
// prompt("It's working!");
// console.log("It's working!");

/* TODO LIST
---------------------------------------------*/
let todoList = [
  "Go shopping",
  "Buy  milk",
  "Sell them more expensive",
  "Repeat first 3 item"
];
console.log("List in the beginning", todoList);

// ADD AN ELEMENT TO THE ARRAY
todoList.push("Be rich");
console.log("List after push", todoList);

//DELETE FROM ARRAY
todoList.splice (1,1);
console.log("List after splice", todoList);