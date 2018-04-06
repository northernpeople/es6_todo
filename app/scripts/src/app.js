// assembles the app
import Todo from "./model/Todo"; // imports someText in addition to default.
import TodoRepository from "./model/TodoRepository"; // imports someText in addition to default.
import TodoController from "./controller/TodoController"; // imports someText in addition to default.


class App{
  constructor(){
    this.repo = new TodoRepository();
    this.controller = new TodoController(this.repo);
    this.controller.testRepo();
  }
}

export default App;
