import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Header from './components/Header';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.scss';

function App() {
  return (<div>
    <Header />
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/about" component={About} exact />
    </Switch>
      </div>)
}

export default App;
