import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    window.location.assign('/login');
  }

  const { loading, data } = useQuery(QUERY_ME);

  const username = data?.me.username || 'nothing';
  const campaigns = data.me.campaigns || [];
  const characters = data.me.characters || [];

  console.log(username);

  return (
    <main>
      <div>
        {loading && <div>Loading...</div>}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h3>Your Campaigns</h3>
            {campaigns.map(campaign => {
              return <h4 key={campaign._id}>{campaign.name}</h4>;
            })}
          </div>

          <div>
            <h3>Your Characters</h3>
            {characters.map(character => {
              return <h4 key={character._id}>{character.name}</h4>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
