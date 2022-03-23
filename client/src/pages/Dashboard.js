import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_CAMPAIGNS } from '../utils/queries';

function Dashboard() {
  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
  const campaigns = data?.campaigns || [];

  return (
    <>
      <h1>Dashboard</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        campaigns.map((campaign, index) => {
          return <h3 key={index}>{campaign.name}</h3>;
        })
      )}
    </>
  );
}

export default Dashboard;
