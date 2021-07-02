import React from 'react';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAA83B',
    },
    secondary: {
      main: '#DD6526',
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;