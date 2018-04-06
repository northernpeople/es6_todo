export default  class Todo{
  constructor(description){
    this.description = description;
    this.created = new Date();
  }
}


// export, in addition to default
let someText = "textVariableValue";
export {someText};
