import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Logo, ButtonLink, Frame } from './styles/header';
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
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
