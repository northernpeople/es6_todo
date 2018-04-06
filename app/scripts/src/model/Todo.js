export default  class Todo{
  constructor(description){
    this.description = description;
    this.created = new Date();
    console.log("created: ",this);
  }
}


// export, in addition to default
let someText = "textVariableValue";
export {someText};
