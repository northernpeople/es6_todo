// assembles the app
import Todo from "./model/Todo";
import TodoRepository from "./model/TodoRepository";
import TodoController from "./controller/TodoController";
import CommandLineRunner from "./view/CommandLineRunner";


class App{
  constructor(){
    this.repo = new TodoRepository();
    this.controller = new TodoController(this.repo);
    this.commandLineRunner = new CommandLineRunner(this.controller);
  }

  run(){
    this.commandLineRunner.run();
  }

  testRepo(){
    this.controller.testRepo();
  }
}

export default App;
