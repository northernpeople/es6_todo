export default  class Todo{
  constructor(description){
    this.description = description;
    console.log("created: ",this);
  }
}

let someText = "textVariableValue";
export {someText}; // export, in addition to default
