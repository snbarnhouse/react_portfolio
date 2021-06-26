import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper"
import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom'
import Nav from "./components/navbar/navbar"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import NotFoundPage from "./pages/notFoundPage"

function App() {

  return (
    <Router basename="/">
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;