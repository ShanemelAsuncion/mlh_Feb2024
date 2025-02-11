import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <div className="profile-header">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          {user.nickname && <p><strong>Nickname:</strong> {user.nickname}</p>}
          {user.locale && <p><strong>Locale:</strong> {user.locale}</p>}
          {user.updated_at && (
            <p>
              <strong>Last Updated:</strong>{' '}
              {new Date(user.updated_at).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default Profile;