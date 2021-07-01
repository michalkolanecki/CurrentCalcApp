import React from 'react';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;