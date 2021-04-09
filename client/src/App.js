import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AlphaWordContainer } from "./Components/AlphaWordContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Alphabet } from "./Components/Play";
import { AddWords } from "./Components/AddWords";
import { WordEdit } from "./Components/WordEdit";
import { WordList } from "./Components/WordList";
import { WordDelete } from "./Components/WordDelete";

const App = () => {
  return (
    <Router>
      <div>
        <Alphabet />
        <Link to="/AddWords">Add</Link>
        <Link to="/WordEdit">Edit</Link>
        <Link to="/WordDelete">Delete</Link>
        <Link to="/WordList">List</Link>
        <Switch>
          <Route path="/AddWords">
            <AddWords />
          </Route>
          <Route path="/words/edit/:id">
            <WordEdit />
          </Route>
          <Route path="/words/delete/:id">
            <WordDelete />
          </Route>
          <Route path="/">
            <WordList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { App };
