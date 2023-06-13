import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DestinationAPI from '../api/DestinationAPI';

const DestinationPage = () => {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const destinationData = await DestinationAPI.fetchDestination(destinationId);
        setDestination(destinationData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDestinationData();
  }, [destinationId]);

  if (!destination) {
    return <div>Loading destination...</div>;
  }

  const { name, description, photos, attractions, activities } = destination;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Photos</h3>
      <div>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.caption} />
        ))}
      </div>

      <h3>Attractions</h3>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.id}>{attraction.name}</li>
        ))}
      </ul>

      <h3>Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>

      {/* Additional destination details */}
    </div>
  );
};

export default DestinationPage;
