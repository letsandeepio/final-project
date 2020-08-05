import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token') || '',
    client: 'TimeFiller App'
  }
});

client
  .query({
    query: gql`
      query {
        info
      }
    `
  })
  .then((result) => console.log(result.data.info));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
