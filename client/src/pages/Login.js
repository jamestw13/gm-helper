import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  if (Auth.loggedIn()) {
    window.location.assign('/');
  }

  const [login, { error }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h3>Login</h3>{' '}
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Username'
          name='username'
          type='text'
          id='username'
          defaultValue={formState.username}
          onChange={handleChange}
        />
        <input
          placeholder='Password'
          name='password'
          type='password'
          id='password'
          defaultValue={formState.password}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <div>Login failed</div>}
    </>
  );
}

export default Login;
