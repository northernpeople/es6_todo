import Todo from "../model/Todo"; // imports someText in addition to default.
import TodoRepository from "../model/TodoRepository"; // imports someText in addition to default.
import TodoController from "../controller/TodoController"; // imports someText in addition to default.

export default class CommandLineRunner{
  constructor(controller){
    this.controller = controller;
  }

  showMenu(){}
  showPrompt(){}
  processInput(){
    // if wants to create a todo, ask for taskDescription
    // if wants to delete a todo, show a list of todos with numbers and ask for numbers
    // if wants to delete all, delete all
    // if wants to mark done, show list of todos, ask for id, and mark done.

  }
}
