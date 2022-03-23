import React from 'react';
import Campaign from './Campaign';
import { useQuery } from '@apollo/client';
import { QUERY_CAMPAIGNS } from '../utils/queries';

function Home() {
  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
  const campaigns = data?.campaigns || [];
  console.log(campaigns);

  return (
    <>
      <h1>Home</h1>
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

export default Home;
