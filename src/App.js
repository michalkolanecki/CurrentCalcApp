import React from 'react';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;