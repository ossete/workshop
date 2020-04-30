let todos = {

//method is a function in an object !
  /* TODO LIST - GLOBALE SCOPE
  ---------------------------------------------*/
  //bad practice
  // todoList: [
  //   ["Go shopping", true],     //this.todoList[0][0] = "new text"
  //   "Buy  milk",               //this.todoList[1][0] = "new text"
  //   "Do this",
  //   "Do that"
  // ],

  todoList: [
//here are objects in an array. for them we don't use "key"s.
    {
      text: "Go shopping", //todoList[0].text
      completed: false
    },

    {
      text: "Buy  milk", //todoList[0].text
      completed: false
    },
    
    {
      text: "Do this", //todoList[0].text
      completed: false
    },
    
    {
      text: "Do that", //todoList[0].text
      completed: false
    }
  ],







  /* DISPLAY TODO
  ---------------------------------------------*/
  displayTodos : function() {  //method name is displayTodos here !
    console.log(this.todoList); //it thinks todoList is at the globale scope. so we add "this." to the beginning.
  },

  /* ADD TODO
  ---------------------------------------------*/

  addTodo: function(newText, newCompleted = false) {
    this.todoList.push({
      text: newText,
      completed: newCompleted,
    });
    this.displayTodos();
  },
  

  /* CHANGE TODO
  ---------------------------------------------*/
  changeTodo : function(index, input) {
    this.todoList[index] = input;
    this.displayTodos();
  },

/* DELETE A TODO
---------------------------------------------*/
  deleteTodo : function(index) {
    this.todoList.splice(index, 1);
    this.displayTodos();
  }

}

console.log( todos.todoList[0].text );
console.log( todos.todoList[0].completed );

// show("String");

// show(todos.todoList, "My todo list");
// show(3*3);

/* PRACTICE AREA
--------------------------------------------- */

/* // ARRAY
let __myList = [

  ["Learn CSS", "2020.04.29", true],
  ["Learn CSS", "2020.04.29", true],
  ["Learn CSS", "2020.04.29", true] 
]
*/

let myList = [

  {
    text:       "Learn CSS",
    deadline:   "2020.04.30",
    completed:  true      
  },

  {
    text:       "Learn JavaScript",
    deadline:   "2020.05.15",
    completed:  false      
  },

  {
    text:       "Learn PHP",
    deadline:   "2020.06.11",
    completed:  false      
  }
]

// show(myList[0]["deadline"]); //Square brackets notation
// show(myList[0].deadline); //Dot notation. bc. of the not vs code understands that, it is a "key"

myList[1].completed = true;
// show(myList[1]);

myList.splice(1, 1);
// show(myList);

myList.push({
  text:       "Learn Python",
  deadline:   "2020.06.11",
  completed:  false      
});
// show(myList);


//REFACTORING

function addTodo(newText, newDeadline, newCompleted = false) {
  myList.push({
    text: newText,
    deadline: newDeadline, 
    completed: newCompleted
  });
}
addTodo("Learn Java", "2020.11.11");
// show(myList);

function deleteTodo(index, deleteN = 1) {
  myList.splice(index, deleteN);
}
deleteTodo(1);
// show(myList);

function changeKeyValue(index, key, value) {
  //The key is the argument and should be used inside brackets[]
  //Otherwise. with the dot notation, the key will be considered as a "re"
  //myList[index].key = value; //WRONG !
  myList[index][key] = value; //GOOD
}

changeKeyValue(1, "completed", true);
changeKeyValue(1, "text", "Learn Python MF");
show(myList);

