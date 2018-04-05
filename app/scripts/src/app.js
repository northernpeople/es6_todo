// assembles the app
import * as todoModule from "./model/Todo";

class App{
  constructor(){
    new todoModule.Todo("first todo argument");
  }
}

export default App;
