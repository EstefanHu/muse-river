import React from 'react';
import { apps, initializeApp } from 'firebase/app';
import '../lib/globals.css';
import { StateProvider } from '../lib/state';
import { clientCredentials } from '../lib/firebaseCredentials';

const theRiver = ({ Component, pageProps }) => {
  if (!apps?.length) initializeApp(clientCredentials);

  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
};

export default theRiver
