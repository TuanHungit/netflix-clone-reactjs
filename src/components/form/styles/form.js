import styled, { css } from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Form, Field } from 'formik';
export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  min-height: 560px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 330px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled(Field)`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 40px;
  line-height: 50px;
  padding: 5px 20px;
  margin-top: 20px;

  @-webkit-keyframes autofill {
    to {
      background: #333;
    }
  }

  &:focus,
  &:active {
    border: 1px solid #e87c03;
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 0;
    `}

  ${({ error }) =>
    error &&
    css`
      border-bottom: 2px solid #e87c03;
    `}
`;

export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledInlineErrorMessage = styled.div`
  color: #e87c03;
  display: block;
  padding: 0.5rem 0.75rem;
  white-space: pre-line;
`;
