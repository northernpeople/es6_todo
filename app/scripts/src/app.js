// assembles the app
import Dodo, {someText} from "./model/Todo"; // imports someText in addition to default.


class App{
  constructor(){
    new Dodo("first todo argument");
    console.log("also can access someText imported from Todo.js : " + someText);
  }
}

export default App;
