import React from "react";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

const categories = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/about" component={About} exact />
        <Route exact path="/categories">
          <CategoryPage categories={categories}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
