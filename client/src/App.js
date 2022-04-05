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
// import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Dashboard from './components/Dashboard';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';
import DesignSystem from './pages/DesignSystem';

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
        <main className='container'>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path='' element={<Home />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route
                path='/character/:characterId'
                element={<CharacterSheet />}
              />
            </Route>

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/design-system' element={<DesignSystem />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
