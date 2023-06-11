import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 0,
  lng: 20,
};

const markers = [
  {
    position: { lat: 4.6126, lng: 23.3026 },
    name: 'Kinshasa',
    description: 'Democratic Republic of the Congo',
  },
  {
    position: { lat: -1.286389, lng: 36.817223 },
    name: 'Nairobi',
    description: 'Kenya',
  },
  // Add more markers as needed
];

const InteractiveMap = () => {
  return (
    <section className="interactive-map">
      {/* Interactive Map */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={3}
        center={center}
      >
        {/* Markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.name}
          >
            <InfoWindow>
              <div>
                <h4>{marker.name}</h4>
                <p>{marker.description}</p>
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </section>
  );
};

export default InteractiveMap;
