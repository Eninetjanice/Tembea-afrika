import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchFilterSection from './components/SearchFilterSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import InteractiveMap from './components/InteractiveMap';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <SearchFilterSection />
            <FeaturedDestinations />
            <InteractiveMap />
            <BlogSection />
            <Footer />
        </div>
    );
}

export default App;
