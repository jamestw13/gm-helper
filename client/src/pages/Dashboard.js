import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {
  const { loading, data: userData } = useQuery(QUERY_ME);

  const campaigns = userData?.campaigns || [];
  const characters = userData?.characters || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <h1>Dashboard</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          {/* <h2>{userData.username}</h2> */}
          <h4>My Campaigns</h4>
          {campaigns.map((campaign, index) => {
            return <h3 key={index}>{campaign.name}</h3>;
          })}
          <h4>My Characters</h4>
          {characters.map((character, index) => {
            return <h3 key={index}>{character.name}</h3>;
          })}
        </div>
      )}
    </>
  );
}

export default Dashboard;
