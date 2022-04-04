import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import CharacterAccordion from '../components/CharacterAccordion';
import CampaignAccordion from '../components/CampaignAccordion';

function Dashboard() {
  const { loading, data: userData } = useQuery(QUERY_ME);

  // separate
  const characters = userData?.me.characters || [];
  const campaigns = userData?.me.campaigns || [];

  const campaignsAsGamemaster = campaigns.filter(
    campaign => campaign.gamemaster.username === userData.me.username
  );

  const campaignsAsPlayer = campaigns.filter(campaign => {
    const playerNames = campaign.players.map(({ username }) => username);

    return playerNames.includes(userData.me.username);
  });

  return (
    <>
      <h1>Dashboard</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <div>
            <div>
              <h2>Your Characters</h2>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <CharacterAccordion characters={characters} />
              )}
            </div>
            <div>
              <h2>Campaigns you own</h2>
              {userData && (
                <CampaignAccordion campaigns={campaignsAsGamemaster} />
              )}
              <h2>Campaigns you play</h2>
              {userData && <CampaignAccordion campaigns={campaignsAsPlayer} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
