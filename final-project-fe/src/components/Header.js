import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import NotifyBell from './NotifyBell';

import { Link } from 'react-router-dom';

import { USER_NAME } from '../constants';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    position: 'fixed',
    top: 0,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    // flexGrow: 1,
    justifyContent: 'space-between'
  },
  leftButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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

export default function Header({ loggedIn, logout }) {
  const history = useHistory();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftButtons}>
            {/* <div>
              <div classname={classes.hamburgerLogoPair}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div> */}
            <a href="/">
              <img
                // variant="h6"
                className={classes.title}
                component={Link}
                // href="/"
                src="DoSomethingLogo192.png"
                alt="logo"
              />
            </a>
          </div>
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
              <Typography
                className="nav-welcome-name"
                style={{ display: 'inline' }}
              >
                Welcome, {localStorage.getItem(USER_NAME)}
              </Typography>
              <NotifyBell />
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                style={{
                  width: '220px'
                }}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    history.push('/dashboard');
                  }}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    history.push('/timeline');
                  }}
                >
                  Timeline
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    history.push('/add-activity');
                  }}
                >
                  Add Activity
                </MenuItem>
                <Divider light />
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
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
