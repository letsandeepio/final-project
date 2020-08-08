import React from 'react';
import { Button } from '@material-ui/core';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
  },
}});

export default function CategoryButton(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" onClick={props.onClick} color="primary" fullWidth="true" style={{ fontFamily: 'Fredoka One', fontSize: '1.2em', color: '#afafaf', justifyContent: 'left', textTransform: 'lowercase', height: '2em' }}>
        <a style={{color: '#e91e63', fontSize: '1.5em'}}>●</a> &nbsp;&nbsp;&nbsp;&nbsp; {props.children}
      </Button>
    </MuiThemeProvider>
  )
}
