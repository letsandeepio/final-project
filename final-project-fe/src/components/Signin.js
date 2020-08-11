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

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '0px'
  },
  welcome: {
    marginTop: '1em'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SIGNIN_MUTATION = gql`
  mutation SigninMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
      error
    }
  }
`;

export default function Login({ setLoggedIn, showSnackBar }) {
  let history = useHistory();
  const [state, setState] = useState({
    password: '',
    email: ''
  });

  const [userSignIn] = useMutation(SIGNIN_MUTATION, {
    onCompleted(response) {
      const { token, user, error } = response.login;
      if (error) {
        showSnackBar({ message: error, severity: 'error' });
      } else {
        setLoggedIn(true);
        _saveUserData(token, user.name);
        showSnackBar({
          message: 'Logged in successfully.',
          severity: 'success'
        });
        history.push('/categories');
      }
    },
    onError(e) {
      showSnackBar({ message: 'Something went wrong.', severity: 'error' });
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!state.email) {
      showSnackBar({ message: 'Email required.', severity: 'warning' });
      return;
    }

    if (!state.password) {
      showSnackBar({ message: 'Password required.', severity: 'warning' });
      return;
    }

    userSignIn({
      variables: {
        password: state.password,
        email: state.email
      }
    });
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <section
        style={{
          marginTop: '3em',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src="./images/design.svg"
          alt="welcome"
          style={{
            width: '400px'
          }}
        />
      </section>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.welcome} component="h1" variant="h5">
          Welcome back!
        </Typography>
        <form className={classes.form} noValidate>
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
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
