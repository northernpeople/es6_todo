export default class Todo{
  constructor(description){
    this.id = Math.random()+"_"; // GUID replacement for training
    this.description = description;
    this.created = new Date();
    this.done = false;
  }
}

// export, in addition to default
let someText = "textVariableValue";
export {someText};
