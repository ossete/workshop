// alert("It's working!"); to be sure if javascript file was attached and working
// confirm("It's working!");
// prompt("It's working!");
// console.log("It's working!");

/* TODO LIST - Global scope
---------------------------------------------*/
let todoList = [
  "Go shopping",
  "Buy  milk",
  "Do this",
  "Do that"
];

/* DISPLAY TODO
---------------------------------------------*/
function displayTodos() {

//Local scope: inside of a function
  console.log(todoList);

}
// displayTodos();



/* ADD TODO
---------------------------------------------*/
function addTodo(input) {

  todoList.push(input);
  displayTodos();
  // console.log(todoList);
}
addTodo("My new todo");

/* CHANGE TODO
---------------------------------------------*/
function changeTodo(index, input) {

  todoList[index] = input;
  displayTodos();

  // todoList.splice(index, 1, input)
  // displayTodos();
}
changeTodo(0, "Go to the market");

/* DELETE A TODO
---------------------------------------------*/
function deleteTodo(index) {

  todoList.splice(index, 1);
  displayTodos();

}
deleteTodo(1);