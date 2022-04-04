import { Link } from 'react-router-dom';

export default function DashNav({ username }) {
  return (
    <nav className='flex'>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/campaigns'>Campaigns</Link>
      <Link to='/characters'>Characters</Link>
      <h4>{username}</h4>
    </nav>
  );
}
