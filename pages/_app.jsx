import React from 'react';
import firebase from 'firebase/compat/app';
import '../lib/globals.css';
import { StateProvider } from '../lib/state';
import { clientCredentials } from '../lib/firebaseCredentials';

const theRiver = ({ Component, pageProps }) => {
  if (!firebase.apps.length) firebase.initializeApp(clientCredentials);

  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
};

export default theRiver
