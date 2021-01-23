import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constrains/routes';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
export default function App() {
  const user = null;
  return (
    <Router>
      <Switch>
        <IsUserRedirect exact path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
