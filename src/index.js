import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app.js';
import './core.scss'

const Entry = () => {
  return (
    <>
    <Auth0Provider
    domain="dev-d6ditd3b.us.auth0.com"
    clientId="y5ADl4RwWIFOXSHTKhJK0UYywsM1BADW"
    redirectUri={window.location.origin}
    >
      <App />

    </Auth0Provider>
    </>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);
