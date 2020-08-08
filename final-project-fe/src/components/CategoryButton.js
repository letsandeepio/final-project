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
      <Button variant="contained" onClick={props.onClick} color="primary" fullWidth="true" style={{ fontFamily: 'Fredoka One', fontSize: '1.2em' }}>
        {props.children}
      </Button>
    </MuiThemeProvider>
  )
}

// <MuiThemeProvider theme={theme}>
// <Button variant="contained" onClick={props.onClick} color={primary} fullWidth="true">
//   {props.children}
// </Button>
// </MuiThemeProvider>

{/* <Button variant="contained" onClick={props.onClick} color="primary" fullWidth="true">
{props.children}
</Button> */}