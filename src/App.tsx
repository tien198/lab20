import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage, { action as authAction } from './pages/AuthPage';
import { action as logoutAction } from './pages/Logout';
import HomePage from './pages/HomePage';
import { isAuthenLoader, isLoggedIn } from './ulties/firebase';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    loader: isLoggedIn,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'auth',
        element: <AuthPage />,
        action: authAction
      },
      {
        path: 'logout',
        action: logoutAction
      },
      {
        path: 'profile',
        element: <UserProfile />,
        loader: isAuthenLoader
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


/** 

 <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout> 
*/