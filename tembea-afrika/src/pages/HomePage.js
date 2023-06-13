// pages/HomePage.js

import React from 'react';
import HeroSectionWeb from '../components/HeroSectionWeb';
import SearchBar from '../components/SearchBar';
import FeaturedDestination from '../components/FeaturedDestination';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSectionWeb />
      <SearchBar />
      <FeaturedDestination />
      <Testimonials />
    </div>
  );
}

export default HomePage;
