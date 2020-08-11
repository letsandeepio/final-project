import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import _saveUserData from '../helpers/saveUserData';
import validate from '../helpers/emailValidator';

const useStyles = makeStyles((theme) => ({
  // containsall: {
  //   marginTop: '0px'
  // },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  signup: {
    // marginTop: '6em'
    // paddingTop: 'px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      error
      user {
        name
      }
    }
  }
`;

export default function Signup({ setLoggedIn, showSnackBar }) {
  let history = useHistory();
  const [state, setState] = useState({
    name: '',
    password: '',
    email: ''
  });

  const [userSignup] = useMutation(SIGNUP_MUTATION, {
    onCompleted(response) {
      const { token, error, user } = response.signup;
      if (error) {
        let message = 'Something went wrong. Please try again later.';
        if (error.includes('Unique constraint'))
          message = 'User with that email already exists!';
        showSnackBar({ message, severity: 'error' });
      } else {
        setLoggedIn(true);
        _saveUserData(token, user.name);
        history.push('/categories');
      }
    }
  });

  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();

    if (!state.name) {
      showSnackBar({ message: 'Name required.', severity: 'warning' });
      return;
    }

    if (!state.email) {
      showSnackBar({ message: 'Email required.', severity: 'warning' });
      return;
    }

    if (!validate(state.email)) {
      showSnackBar({ message: 'Valid Email required.', severity: 'warning' });
      return;
    }

    if (!state.password) {
      showSnackBar({ message: 'Password required.', severity: 'warning' });
      return;
    }

    userSignup({
      variables: {
        name: state.name,
        password: state.password,
        email: state.email
      }
    });
  }

  return (
    <Container className="containsall" component="main" maxWidth="xs">
      <CssBaseline />
      <section
        style={{
          marginTop: '7em',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src="./images/contemplating.svg"
          alt="welcome"
          style={{
            width: '200px'
          }}
        />
      </section>
      <div className={classes.paper}>
        <Typography className="signup" component="h1" variant="h5">
          Sign up for DoSomething
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
