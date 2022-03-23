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

  console.log(username);
  const campaigns = data?.campaigns || [];

  return (
    <main>
      <div>
        <h3>Logged in as {username}</h3>
      </div>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {campaigns.map(campaign => {
              return <h4 key={campaign._id}>{campaign.name}</h4>;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
