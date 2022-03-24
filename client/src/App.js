import React from 'react';
import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main style={{ margin: 'auto', maxWidth: '1000px' }}>
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/profile' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
