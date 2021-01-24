import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import HeaderContainer from './../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constrains/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [error, setError] = useState('');

  const submitHandler = ({ email, password }, actions) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Please enter your password.')
      .min(4, 'Your password must contain between 4 and 60 characters.')
      .max(20, 'Your password must contain between 4 and 60 characters.'),

    email: Yup.string()
      .required('Please enter your email.')
      .email('Please enter a valid email.'),
  });

  return (
    <>
      <HeaderContainer isSignin>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            isValidating,
            isValid,
          }) => {
            return (
              <Form method="POST" onSubmit={handleSubmit} autocomplete="off">
                <Form.Title>Sign In</Form.Title>
                {error ? <Form.Error>{error}</Form.Error> : null}
                <Form.Input
                  type="email"
                  placeholder="Email address"
                  autoCorrect="off"
                  name="email"
                  valid={touched.email && !errors.email}
                  error={touched.email && errors.email}
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <Form.StyledInlineErrorMessage>
                      {msg}
                    </Form.StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Form.Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  valid={touched.password && !errors.password}
                  error={touched.password && errors.password}
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <Form.StyledInlineErrorMessage>
                      {msg}
                    </Form.StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Form.Button type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? 'Submitting...' : `Sign In`}
                </Form.Button>
                <Form.Text>
                  New to Netflix?{' '}
                  <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </Form.TextSmall>
              </Form>
            );
          }}
        </Formik>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
