import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase } from '../lib/firebase.prod';

import HeaderContainer from './../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constrains/routes';
export default function Signup() {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = emailAddress === '' || password === '';
  const submitHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error ? <Form.Error>{error}</Form.Error> : null}
          <Form.Base onSubmit={submitHandler} method="POST">
            <Form.Input
              placeholder="First name"
              onChange={({ target }) => setFirstName(target.value)}
              value={firstName}
            />
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
              Already Netflix?{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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
