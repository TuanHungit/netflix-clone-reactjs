import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase } from '../lib/firebase.prod';

import HeaderContainer from './../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constrains/routes';
export default function Signin() {
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = emailAddress === '' || password === '';
  const submitHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error ? <Form.Error>{error}</Form.Error> : null}
          <Form.Base onSubmit={submitHandler} method="POST">
            <Form.Input
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <Form.Button disabled={isInvalid} type="submit">
              Sign In
            </Form.Button>
            <Form.Text>
              New to Netflix? <Form.Link>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
