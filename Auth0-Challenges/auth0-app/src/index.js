import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { AUTH0_CONFIG } from './auth0-config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_CONFIG.domain}
      clientId={AUTH0_CONFIG.clientId}
      authorizationParams={AUTH0_CONFIG.authorizationParams}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

