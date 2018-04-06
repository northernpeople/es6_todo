// Todo store
import Todo from "./Todo";

class TodoRepository{
  constructor(){
    this.store = [];
  }

  add(todo){
    this.store.push(todo);
  }

  remove(todo){
    this.store = this.store.filter( td => td.description === todo.description);
  }

  contains(todo){
    return this.store.filter(td => td.description === todo.description).length > 0;
  }

  size(){ return this.store.length; }
}
