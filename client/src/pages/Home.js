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

  const campaigns = data?.me.campaigns || [];
  const characters = data?.me.characters || [];
  const campaignsAsGamemaster = campaigns.filter(
    campaign => campaign.gamemaster.username === data.me.username
  );

  const campaignsAsPlayer = campaigns.filter(
    campaign => campaign.gamemaster.username === data.me.username
  );
  console.log("user's campaigns: ", campaigns);
  console.log('user is gamemaster: ', campaignsAsGamemaster);
  console.log('user is player: ', campaignsAsPlayer);

  return (
    <main>
      <div>
        {loading && <div>Loading...</div>}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* <div>
            <h3>Your Campaigns</h3>
            {campaigns.map(campaign => {
              return <h4 key={campaign._id}>{campaign.name}</h4>;
            })}
          </div> */}

          {data && <CharacterAccordion characters={characters} />}
          {data && <CampaignAccordion campaigns={campaigns} />}
        </div>
      </div>
    </main>
  );
};

export default Home;
