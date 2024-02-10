import React from 'react';
//import ReactDOM from 'react-dom'; // For react 17
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-r4ccry4tty51.frontegg.com',
  clientId: 'bdc2ba25-57e0-487c-bdc2-bad237c1b239'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    //document.getElementById('root')
);