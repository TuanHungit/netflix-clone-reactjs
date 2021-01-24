import React from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constrains/routes';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { userAuthListener } from './hooks';
export default function App() {
  const { user } = userAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
}
