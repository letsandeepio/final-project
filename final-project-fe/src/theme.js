import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e91e63',
      dark: '#c1134e',
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