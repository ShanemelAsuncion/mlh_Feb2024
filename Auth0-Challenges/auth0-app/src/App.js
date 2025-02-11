import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import Profile from './pages/Profile.js';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our App</h1>
        {!isAuthenticated ? (
          <Login />
        ) : (
          <div className="authenticated-content">
            <Profile />
            <div className="nav-buttons">
              <Logout />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
