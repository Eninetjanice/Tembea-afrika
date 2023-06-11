import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactInfo = ({ email, phone, address }) => {
  return (
    <div className="contact-info">
      <h4>Contact Info</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      {/* First Contact Information Section */}
      <ContactInfo
        email="jekudpropertymanagement@gmail.com"
        phone="+2348067872373"
        address="3 Tulip Heaven Estate, Chevron Alternative Route Lekki, Lagos, Nigeria"
      />
      
      {/* Quick Links */}
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      
      {/* Second Contact Information Section */}
      <ContactInfo
        email="example2@example.com"
        phone="+9876543210"
        address="456 Street, City2, Country2"
      />
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/emmanuel.priest1">
          <FaFacebook className="icon" />
        </a>
	<a href="https://www.facebook.com/Emmanuel Priest">
          <FaFacebook className="icon" />
        </a>
	<a href="https://www.facebook.com/Emmanuel Priest">
          <FaFacebook className="icon" />
        </a>
	<a href="https://www.facebook.com/Emmanuel Priest">
          <FaFacebook className="icon" />
        </a>
	
        <a href="https://www.twitter.com/EmmanuelPriest_">
          <FaTwitter className="icon" />
        </a>
	<a href="https://www.twitter.com/EmmanuelPriest_">
          <FaTwitter className="icon" />
        </a>
	<a href="https://www.twitter.com/EmmanuelPriest_">
          <FaTwitter className="icon" />
        </a>
	<a href="https://www.twitter.com/EmmanuelPriest_">
          <FaTwitter className="icon" />
        </a>
	
        <a href="https://www.instagram.com/emmanuelpriest1">
          <FaInstagram className="icon" />
        </a>
	<a href="https://www.instagram.com/emmanuelpriest1">
          <FaInstagram className="icon" />
        </a>
	<a href="https://www.instagram.com/emmanuelpriest1">
          <FaInstagram className="icon" />
        </a>
	<a href="https://www.instagram.com/emmanuelpriest1">
          <FaInstagram className="icon" />
        </a>
	
	<a href="https://www.linkedin.com/in/aniebuechukwujekwu">
          <FaLinkedin className="icon" />
        </a>
	<a href="https://www.linkedin.com/in/aniebuechukwujekwu">
          <FaLinkedin className="icon" />
        </a>
	<a href="https://www.linkedin.com/in/aniebuechukwujekwu">
          <FaLinkedin className="icon" />
        </a>
	<a href="https://www.linkedin.com/in/aniebuechukwujekwu">
          <FaLinkedin className="icon" />
        </a>
      </div>
      
      {/* Third Contact Information Section */}
      <ContactInfo
        email="example3@example.com"
        phone="+2468135790"
        address="789 Street, City3, Country3"
      />
      
      {/* Fourth Contact Information Section */}
      <ContactInfo
        email="example4@example.com"
        phone="+1357924680"
        address="012 Street, City4, Country4"
      />
    </footer>
  );
};

export default Footer;
