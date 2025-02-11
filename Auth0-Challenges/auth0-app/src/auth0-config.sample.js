// Rename this file to auth0-config.js and update with your Auth0 credentials
export const AUTH0_CONFIG = {
  domain: "your-auth0-domain.auth0.com",
  clientId: "your-auth0-client-id",
  authorizationParams: {
    redirect_uri: window.location.origin
  }
};
