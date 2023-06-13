// pages/DashboardPage.js

import React, { useEffect, useState } from 'react';
import api from '../api';

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make API request to fetch user data
        const response = await api.getUserData();
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch user data');
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-page">
      <h2>Welcome to Your Dashboard</h2>
      {userData && (
        <div>
          <h3>User Information:</h3>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          <p>Profile Picture: <img src={userData.profilePicture} alt="Profile" /></p>

          <h3>Account Settings:</h3>
          <p>Username: {userData.username}</p>
          <p>Country: {userData.country}</p>
          {/* Add any other relevant account settings */}

          <h3>Preferred/Selected Destinations:</h3>
          <ul>
            {userData.destinations.map((destination) => (
              <li key={destination.id}>{destination.name}</li>
            ))}
          </ul>

          {/* Additional user information can be displayed here */}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default DashboardPage;
