// components/FeaturedDestination.js

import React, { useEffect, useState } from 'react';
import api from '../api';

const FeaturedDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedDestination = async () => {
      try {
        // Make API request to fetch featured destination
        const response = await api.getFeaturedDestination();
        setDestinations(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch featured destination');
        setIsLoading(false);
      }
    };

    fetchFeaturedDestination();
  }, []);

  if (isLoading) {
    return <div>Loading featured destinations...</div>;
  }

  return (
    <div className="featured-destinations">
      <h2>Featured Destinations</h2>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
          {/* Add any other information for the featured destinations */}
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FeaturedDestination;
