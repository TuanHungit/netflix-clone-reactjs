import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background,
  Logo,
  Container,
  ButtonLink,
  Frame,
} from './styles/header';
export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      {' '}
      <Logo {...restProps}>{children}</Logo>
    </ReactRouterLink>
  );
};
Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
