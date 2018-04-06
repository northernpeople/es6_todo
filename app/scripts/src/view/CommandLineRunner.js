import Todo from "../model/Todo";
import TodoRepository from "../model/TodoRepository";
import TodoController from "../controller/TodoController";


export default class CommandLineRunner{
  constructor(controller){
    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  showMenu(){
    return prompt(this.controller.getAllString()
              + "\nwhich item do you want to modify?(enter number)");
  }
  showPrompt(){
     return prompt("to delete enter 1, to mark done enter 2");
  }
  processInput(input, itemIndex){
    input = parseInt(input);
    itemIndex = parseInt(itemIndex) - 1;
    if(input === 1){
      this.controller.delete(itemIndex);
    }
    if(input === 2){
      this.controller.markAsDone(itemIndex);
    }
  }

  run(){
    while(true){
      let itemIndex = this.showMenu();
      let answer = this.showPrompt();
      this.processInput(answer, itemIndex);
    };
  }


}
