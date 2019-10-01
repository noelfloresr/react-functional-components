import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import ProductDetail from './pages/product';
import Products from './pages/product-list';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* ROUTES */}
      <Switch>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/products/">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
