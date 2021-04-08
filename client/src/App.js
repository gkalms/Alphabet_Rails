import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlphaWordContainer } from "./Components/AlphaWordContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { WordEdit } from './archive/WordEdit';
import { WordList } from './archive/WordList';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/homepage">Home Page</Link>
        <Switch>
          <Route path="/homepage">
            <AlphaWordContainer />
          </Route>
          <Route path="/words/edit/:id">
            <WordEdit />
          </Route>
          <Route path="/">
            <WordList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App }