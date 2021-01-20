import React from 'react';

import { render } from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './app';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
