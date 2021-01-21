import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constrains/routes';
export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
