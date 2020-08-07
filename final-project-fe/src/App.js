import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Signin from './components/Signin';
import About from './components/About';
import Signup from './components/Signup';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import SuggesterPage from './pages/SuggesterPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import AddActivityPage from './pages/AddActivityPage';
import Dictaphone from './components/Speech';

import getHoursAndMinutes from './helpers/getHoursAndMinutes';

import { AUTH_TOKEN, questions } from './constants';
import './index.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [category, setCategory] = useState(questions[0].question);
  const [timeAvailable, setTimeAvailable] = useState({ hours: 2, minutes: 30 });

  function updateTimeAvailable(command) {
    const timeAvailable = getHoursAndMinutes(command);
    setTimeAvailable(timeAvailable);
  }

  const [isLoggedIn, setLoggedIn] = useState(
    !!localStorage.getItem(AUTH_TOKEN)
  );

  const [snackBar, setSnackBar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  let history = useHistory();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ ...snackBar, open: false });
  };

  const showSnackBar = (args) => {
    setSnackBar({ ...snackBar, open: true, ...args });
  };

  const selectCategory = function (category) {
    setCategory(category);
    history.push('/suggestions');
  };

  function logOut() {
    console.log('working ');
    localStorage.setItem(AUTH_TOKEN, '');
    setLoggedIn(false);
  }

  const RequireAuth = ({ children }) => {
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return children;
  };

  return (
    <div>
      <Header loggedIn={isLoggedIn} logout={logOut} />
      <Switch>
        <Route exact path="/login">
          <Signin setLoggedIn={setLoggedIn} showSnackBar={showSnackBar} />
        </Route>
        <Route exact path="/signup">
          <Signup setLoggedIn={setLoggedIn} showSnackBar={showSnackBar} />
        </Route>
        <Route path="/about" component={About} exact />
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/categories" /> : <HomePage />}
        </Route>

        <RequireAuth>
          <Route exact path="/categories">
            <CategoryPage
              categories={questions}
              onTimeChange={(time) => setTimeAvailable(time)}
              onSelect={selectCategory}
              timeAvailable={timeAvailable}
            />
          </Route>
          <Route exact path="/suggestions">
            <SuggesterPage
              categories={questions}
              category={category}
              onCategoryChange={setCategory}
              onTimeChange={(time) => setTimeAvailable(time)}
              timeAvailable={timeAvailable}
            />
          </Route>
          <Route exact path="/success">
            <SuccessPage />
          </Route>
          <Route exact path="/add-activity">
            <AddActivityPage
              categories={questions}
              showSnackBar={showSnackBar}
            />
          </Route>
        </RequireAuth>
      </Switch>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackBar.open}
        key="bottomcenter"
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackBar.severity}>
          {snackBar.message}
        </Alert>
      </Snackbar>
      <Dictaphone onCommand={updateTimeAvailable} />
    </div>
  );
}

export default App;
