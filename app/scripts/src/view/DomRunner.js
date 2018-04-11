import Todo from "../model/Todo";
import TodoRepository from "../model/TodoRepository";
import TodoController from "../controller/TodoController";


export default class DomRunner{
  constructor(controller){
    this.controller = controller;
    this.controller.create("buy milk");
    this.controller.create("wash car");
  }

  initListeners(){
    document
    .getElementById("addTodoButton")
    .addEventListener("click", () => {
      let addTodoTextInput = document.getElementById("addTodoTextInput");
      if(! addTodoTextInput.value.trim()) return;
      this.controller.create(addTodoTextInput.value.trim());
      addTodoTextInput.value = "";
      this.showItems();
    });

    document
    .querySelector("ul")
    .addEventListener("click", (event) => {
      console.log(event.target.parentNode.id);
    	let elementClicked = event.target;
    	if(elementClicked.className === "deleteButton"){
    	  this.controller.deleteById(elementClicked.parentNode.id);
        this.showItems();
    	}
    });
  }

  showItems(){
    let todos = this.controller.getAll();
    let ul = document.querySelector("ul");
    ul.textContent = "";
    todos.forEach((e, i, a) =>{
      let li = document.createElement("li");
      li.id = e.id;
      li.textContent = e.description;
      li.appendChild(this.newDeleteButton())
      ul.appendChild(li);
    })
  }

  newDeleteButton(){
  		var deleteButton = document.createElement("button");
  		deleteButton.textContent = "delete";
      deleteButton.className="deleteButton";
  		return deleteButton;
  }

  run(){
    this.showItems();
    this.initListeners();
  }

}
