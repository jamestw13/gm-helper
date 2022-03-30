import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import DashNav from '../components/DashNav';
import Dashboard from '../components/Dashboard';

const Home = () => {
  // check if logged in
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    window.location.assign('/login');
  }

  // load user data
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || '';

  return (
    <>
      <DashNav username={username} />
      {loading && <h1>Loading</h1>}
      <Outlet />
    </>
  );
};

export default Home;
