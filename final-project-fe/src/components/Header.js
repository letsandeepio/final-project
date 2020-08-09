import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import { USER_NAME } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    position: 'fixed',
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    // flexGrow: 1,
    justifyContent: 'space-between'
  },
  title: {
    // flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    width: '65px',
    margin: 'auto',
    display: 'block',
    position: 'relative'
  },
  button: {
    alignItems: 'right',
    flexGrow: 1
  }
  // hamburgerLogoPair: {
  //   alignItems: 'center'
  // }
}));

export default function Header({ loggedIn, logout, showSnackBar }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {/* <div classname={classes.hamburgerLogoPair}> */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <a href="/">
            <img
              // variant="h6"
              className={classes.title}
              component={Link}
              // href="/"
              src="DoSomethingLogo192.png"
              alt="logo"
            ></img>
          </a>
          {/* </div> */}
          {/* </img> */}
          {/* <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            do.i.do
          </Typography> */}
          {/* <Button color="inherit" component={Link} to="/about">
            About
          </Button> */}
          {loggedIn ? (
            <span>
              Welcome, {localStorage.getItem(USER_NAME)}
              <Button color="inherit" onClick={() => logout()}>
                Sign out
              </Button>
            </span>
          ) : (
            <span>
              <Button color="inherit" component={Link} to="/signup">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Sign In
              </Button>
            </span>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
