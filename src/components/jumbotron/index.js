import React from 'react';
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';
export default function Jumpotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumpotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
Jumpotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumpotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumpotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumpotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};
