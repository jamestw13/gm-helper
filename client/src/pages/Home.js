import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import CharacterAccordion from '../components/CharacterAccordion';
import CampaignAccordion from '../components/CampaignAccordion';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    window.location.assign('/login');
  }

  const { loading, data } = useQuery(QUERY_ME);
  const characters = data?.me.characters || [];

  const campaigns = data?.me.campaigns || [];
  console.log("user's campaigns: ", campaigns);

  const campaignsAsGamemaster = campaigns.filter(
    campaign => campaign.gamemaster.username === data.me.username
  );
  console.log('user is gamemaster: ', campaignsAsGamemaster);

  const campaignsAsPlayer = campaigns.filter(campaign => {
    const playerNames = campaign.players.map(({ username }) => username);

    return playerNames.includes(data.me.username);
  });
  console.log('user is player: ', campaignsAsPlayer);

  return (
    <main>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
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
            {data && <CampaignAccordion campaigns={campaignsAsGamemaster} />}
            <h2>Campaigns you play</h2>
            {data && <CampaignAccordion campaigns={campaignsAsPlayer} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
