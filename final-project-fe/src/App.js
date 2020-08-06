import React, { useState, useEffect } from 'react';
import Signin from './components/Signin';
import About from './components/About';
import Signup from './components/Signup';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import SuggesterPage from './pages/SuggesterPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import AddActivityPage from './pages/AddActivityPage';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { Route, Switch, useHistory } from 'react-router-dom';

import { AUTH_TOKEN } from './constants';

import { gql, useQuery } from '@apollo/client';

import './index.scss';

const categories = [
  { question: 'what should i do?' },
  { question: 'what should i watch?' },
  { question: 'where should i eat?' },
  { question: 'what should i cook?' },
  { question: 'what else could i do?' }
];

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    activities {
      title,
      category,
      duration
    }
  }
`

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [category, setCategory] = useState(categories[0].question);
  const [timeAvailable, setTimeAvailable] = useState({ hours: 2, minutes: 30 });
  const [isLoggedIn, setLoggedIn] = useState(
    !!localStorage.getItem(AUTH_TOKEN)
  );
  console.log(category);

  const [snackBar, setSnackBar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  let history = useHistory();

  const { loading, error, data } = useQuery(ACTIVITY_QUERY);
  if (error) return <p>Error: `${error.message}`</p>

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
          <HomePage />
        </Route>
        <Route exact path="/categories">
          <CategoryPage
            categories={categories}
            onTimeChange={(time) => setTimeAvailable(time)}
            onSelect={selectCategory}
            timeAvailable={timeAvailable}
          />
        </Route>
        <Route exact path="/suggestions">
          {loading ? 'loading' : <SuggesterPage
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
            onTimeChange={(time) => setTimeAvailable(time)}
            timeAvailable={timeAvailable}
            activities={data.activities}
          />}
        </Route>
        <Route exact path="/success">
          <SuccessPage />
        </Route>
        <Route exact path="/add-activity">
          <AddActivityPage categories={categories} />
        </Route>
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
