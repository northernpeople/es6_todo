// assembles the app
import Todo from "./model/Todo";
import TodoRepository from "./model/TodoRepository";
import TodoController from "./controller/TodoController";
import DomRunner from "./view/DomRunner";


class App{
  constructor(){
    this.repo = new TodoRepository();
    this.controller = new TodoController(this.repo);
    this.domRunner = new DomRunner(this.controller);
  }

  run(){
    this.domRunner.run();
  }

  testRepo(){
    this.controller.testRepo();
  }
}

export default App;
