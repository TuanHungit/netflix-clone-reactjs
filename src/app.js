import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constrains/routes';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { userAuthListener } from './hooks';
export default function App() {
  const user = userAuthListener();

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        >
          <Signin />
        </Route>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
          user={user}
        >
          <Signup />
        </Route>
        <Route exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </Route>
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
}
