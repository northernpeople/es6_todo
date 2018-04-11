// Todo store
import Todo from "./Todo";

export default class TodoRepository{
  constructor(){
    this.store = [];
  }

  add(todo){
    this.store.push(todo);
  }

  deleteById(id){
    this.store = this.store.filter( td => td.id !== id);
  }

  getAll(){
    return this.store.map(e => e);
  }

}
