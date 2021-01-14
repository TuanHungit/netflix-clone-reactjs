import React from 'react';
import { Inner, Container } from './styles/jumbotron';
export default function Jumpotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Inner direction={direction}>
      <p>I am Jumpotron!</p>
    </Inner>
  );
}

Jumpotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
