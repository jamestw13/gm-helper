import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Header() {
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || '';

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Link to='/'>
        <h1>Campaign Helper</h1>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h3>{username}</h3>
        {Auth.loggedIn() ? (
          <a href='/' onClick={logout}>
            Logout
          </a>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
