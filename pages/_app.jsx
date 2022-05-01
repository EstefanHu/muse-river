import React from 'react';
import '../lib/globals.css';
import { StateProvider } from '../lib/state';

const theRiver = ({ Component, pageProps }) => (
  <StateProvider>
    <Component {...pageProps} />
  </StateProvider>
);

export default theRiver
