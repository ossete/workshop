let todos = {
//method is a function in an object !
  /* TODO LIST - GLOBALE SCOPE
  ---------------------------------------------*/
  todoList: [
    "Go shopping",
    "Buy  milk",
    "Do this",
    "Do that"
  ],

  /* DISPLAY TODO
  ---------------------------------------------*/
  displayTodos : function() {  //method name is displayTodos here !
    console.log(this.todoList); //it thinks todoList is at the globale scope. so we add "todos." to the beginning.
  },

  /* ADD TODO
  ---------------------------------------------*/
  addTodo : function(input) {

    this.todoList.push(input);
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

todos.displayTodos(); //
todos.addTodo("Test todo");
todos.deleteTodo(1);
todos.changeTodo(2, "Some othe value for this todo");