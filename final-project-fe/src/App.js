import React, { useState } from 'react';
// import { Router, Route, Switch } from 'react-router';
import Signin from './components/Signin';
import About from './components/About';
import Signup from './components/Signup';
import Header from './components/Header';
import CategoryPage from "./pages/CategoryPage";
import SuggesterPage from "./pages/SuggesterPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./index.scss";

const categories = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

function App() {
  const [category, setCategory] = useState([categories[0].question]);
  const [timeAvailable, setTimeAvailable] = useState(0);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Signin} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/about" component={About} exact />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/categories">
          <CategoryPage categories={categories}/>
        </Route>
        <Route exact path="/suggestions">
          <SuggesterPage categories={categories} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
