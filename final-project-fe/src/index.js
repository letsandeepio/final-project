import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';

let client = '';
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      client: 'Timefiller App'
    }
  };
});

try {
  client = new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache()
  });
} catch (error) {
  console.log(`Error setting up server:${error.message}`);
}

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
