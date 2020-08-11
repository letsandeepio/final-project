import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Signin from './components/Signin';
import About from './components/About';
import Signup from './components/Signup';
import Header from './components/Header';
import SuggesterPage from './pages/SuggesterPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';
import AddActivityPage from './pages/AddActivityPage';
import Dictaphone from './components/Speech';
import { useLocation } from 'react-router-dom';

import CategoryButtonList from './components/CategoryButtonList';
import TimePicker from './components/TimePicker';
import AddActivityButton from './components/AddActivityButton';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import getHoursAndMinutes from './helpers/getHoursAndMinutes';

import { AUTH_TOKEN, questions } from './constants';
import './index.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [category, setCategory] = useState(questions[0].question);
  const [timeAvailable, setTimeAvailable] = useState({ hours: 2, minutes: 30 });

  const location = useLocation();

  function updateTimeAvailable(command) {
    const timeAvailable = getHoursAndMinutes(command);
    setTimeAvailable((prev) => ({ ...prev, ...timeAvailable }));
  }

  function onAsk(index) {
    const category = questions[index].question;
    if (location.pathname.includes('categories')) {
      selectCategory(category);
    } else {
      setCategory(category);
    }
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
    console.log('snackbar closed', reason);
    setSnackBar(prev=>({ ...prev, open: false }));
  };

  const showSnackBar = (args) => {
    setSnackBar(prev=>({ ...prev, open: true, ...args }));
  };

  const selectCategory = function (category) {
    setCategory(category);
    history.push('/suggestions');
  };

  function logOut() {
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
      <Header className="header" loggedIn={isLoggedIn} logout={logOut} />
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
            <div className="categoryPage">
              <Typography className="top-text" variant="h3" >
                Don't know what to do?
              </Typography>
              <Typography variant="h1">Just ask!</Typography>
              <TimePicker className="timePicker" onChange={setTimeAvailable} timeAvailable={timeAvailable}/>
              <Dictaphone onCommand={updateTimeAvailable} onAsk={onAsk} />
              <CategoryButtonList className="CategoryButtonList" categories={questions} onSelect={(value) => {
                selectCategory(value);
              }}/>
              <div className='spacer' ></div>
            </div>
          <AddActivityButton className="addActivityButton" component={Link} to="/add-activity"></AddActivityButton>
          </Route>
          <Route exact path="/suggestions">
            <SuggesterPage
              categories={questions}
              category={category}
              onCategoryChange={setCategory}
              onTimeChange={setTimeAvailable}
              timeAvailable={timeAvailable}
            />
          </Route>
          <Route exact path="/success">
            <SuccessPage />
          </Route>
          <Route exact path="/timeline">
            <Timeline />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
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
    </div>
  );
}

export default App;
