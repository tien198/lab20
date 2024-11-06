import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { isLoggedIn, logout } from '../../ulties/firebase';
import { useEffect, useState } from 'react';

const MainNavigation = () => {
  const isLogIn = isLoggedIn()
  const [loginState, setLoginState] = useState(false)
  useEffect(() => {
    (async function () {
      setLoginState(await isLogIn)
    })()
  }, [isLogIn])
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth?mode=login'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {
            !loginState &&
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
