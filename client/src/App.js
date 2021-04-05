import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WordList } from "./components/word/WordList";
import { WordEdit } from "./components/word/WordEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path="/word/create"> */}
            {/* <h1>Words create</h1> */}
          {/* </Route> */}

          <Route exact path="/words/edit/:id">
            <WordEdit />
          </Route>

          <Route exact path="/">
            <WordList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
