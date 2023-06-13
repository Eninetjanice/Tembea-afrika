// components/BookingPage.js

import React from 'react';

const BookingPage = () => {
  // Function to handle the button click and redirect users to the travel agency's website
  const handleBooking = () => {
    // Replace 'agencyUrl' with the actual URL of the travel agency's booking page
    window.location.href = 'agencyUrl';
  };

  return (
    <div>
      <h2>Destination Name</h2>
      <p>Description of the destination</p>
      <img src="destinationImage.jpg" alt="Destination Image" />
      {/* Additional destination information */}
      <h3>Attractions</h3>
      <ul>
        <li>Attraction 1</li>
        <li>Attraction 2</li>
        <li>Attraction 3</li>
        {/* Add more attractions */}
      </ul>
      <h3>Activities</h3>
      <ul>
        <li>Activity 1</li>
        <li>Activity 2</li>
        <li>Activity 3</li>
        {/* Add more activities */}
      </ul>

      {/* Button to redirect users to the travel agency's website */}
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingPage;
