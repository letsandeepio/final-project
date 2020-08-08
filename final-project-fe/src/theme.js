import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e91e63',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#f1f1f1',
      contrastText: '#000'
    }
  },
  // typography: {
  //   fontFamily: [
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },

});

export const buttontheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e91e63',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#f1f1f1',
      contrastText: '#000'
    }
  }
});