import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className='flex'>
      <Link to='/'>
        <h1>Campaign Helper</h1>
      </Link>
      <Link to='/design-system'>
        <h2>Design System</h2>
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
