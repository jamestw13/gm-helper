import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header() {
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
        <h1>GM Helper</h1>
      </Link>
      <div>
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
