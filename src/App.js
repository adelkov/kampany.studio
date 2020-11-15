import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./views/Main";
import Contact from "./views/Contact";

function App() {

  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/*<Route path="/">*/}
          {/*  <Home />*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  )
}

export default App

