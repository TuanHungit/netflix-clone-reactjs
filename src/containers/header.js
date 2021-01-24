import React from 'react';
import { Header } from '../components';
import * as ROUTERS from '../constrains/routes';
import logo from '../logo.svg';
export default function HeaderContainer({ isSignin, children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo alt="Netflix" to={ROUTERS.HOME} src={logo}></Header.Logo>
        {isSignin ? null : (
          <Header.ButtonLink to={ROUTERS.SIGN_IN}>Sign In</Header.ButtonLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
