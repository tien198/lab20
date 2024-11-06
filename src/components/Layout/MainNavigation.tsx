import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const isLoggedIn = useRouteLoaderData('root')
  const logoutSubmit = useSubmit()
  function logout() {
    logoutSubmit(null, { action: '/logout', method: 'post' })
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            !isLoggedIn &&
            <li>
              <Link to='/auth?mode=login'>Login</Link>
            </li>
          }
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {
            isLoggedIn! &&
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
