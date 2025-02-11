# Auth0 React Login Demo

A simple React application demonstrating user authentication with Auth0.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Auth0**
   - Sign up for an [Auth0 account](https://auth0.com/signup)
   - Create a new Single Page Application in the Auth0 dashboard
   - Copy `src/auth0-config.sample.js` to `src/auth0-config.js`
   - Update `auth0-config.js` with your Auth0 application credentials:
     - Domain
     - Client ID
   - In your Auth0 application settings, add `http://localhost:3000` to:
     - Allowed Callback URLs
     - Allowed Logout URLs
     - Allowed Web Origins

3. **Start the Application**
   ```bash
   npm start
   ```
   The application will run at [http://localhost:3000](http://localhost:3000)

## Features

- User authentication with Auth0
- Login/Logout functionality
- User profile display
- Secure routing
- Modern UI design

## Security

- API keys and credentials are stored in a separate configuration file
- Configuration file is excluded from version control
- Environment variables support for production deployment

## Development

1. **Environment Variables**
   - For production, use environment variables instead of the config file
   - Create a `.env` file based on `.env.example`

2. **Adding Protected Routes**
   ```javascript
   import { withAuthenticationRequired } from '@auth0/auth0-react';
   
   const ProtectedComponent = withAuthenticationRequired(Component);
   ```

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set up environment variables in your hosting platform
3. Deploy the built files from the `build` directory

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Create a pull request

## License

MIT License
