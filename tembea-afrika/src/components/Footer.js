import React from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Add logic to send an email
    try {
      await sendEmail(name, email, message);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
    }

    // Add logic to store the submitted data
    try {
      await storeData(name, email, message);
      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Failed to store data:', error);
    }

    // Reset the form fields
    event.target.reset();
  };

  const sendEmail = async (name, email, message) => {
    try {
      // Make an HTTP request to your email service API
      await axios.post('/api/sendEmail', { name, email, message });
    } catch (error) {
      throw new Error('Failed to send email');
    }
  };

  const storeData = async (name, email, message) => {
    try {
      // Make an HTTP request to your database API to store the data
      await axios.post('/api/storeData', { name, email, message });
    } catch (error) {
      throw new Error('Failed to store data');
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@tembeaafrika.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/tembeaafrika" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/tembeaafrika" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tembeaafrika" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tembea-afrika" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-form">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Tembea Afrika. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
