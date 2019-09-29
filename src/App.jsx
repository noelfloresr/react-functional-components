import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* ROUTES */}
      <Switch>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
