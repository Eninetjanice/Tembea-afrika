// components/Testimonials.js

import React, { useEffect, useState } from 'react';
import api from '../api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Make API request to fetch testimonials
        const response = await api.getTestimonials();
        setTestimonials(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch testimonials');
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.comment}</p>
          {/* Add any other information for the testimonials */}
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Testimonials;
