import React from 'react';
import { Header } from '../components';
import * as ROUTERS from '../constrains/routes';
import logo from '../logo.svg';
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo alt="Netflix" to={ROUTERS.HOME} src={logo}></Header.Logo>
        <Header.ButtonLink to={ROUTERS.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Container>
      {children}
    </Header>
  );
}
