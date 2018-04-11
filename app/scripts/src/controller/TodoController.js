import Todo from "../model/Todo"; // imports someText in addition to default.
import TodoRepository from "../model/TodoRepository"; // imports someText in addition to default.

export default class TodoController{
  constructor(repository){
    this.repo = repository;
  }

  create(taskDescription){
    let todo = new Todo(taskDescription);
    this.repo.add(todo);
  }

  deleteById(id){
    this.repo.deleteById(id);
  }

  getAll(){
    return this.repo.getAll();
  }
}
