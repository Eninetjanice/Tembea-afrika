import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchFilterSection from './components/SearchFilterSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import InteractiveMap from './components/InteractiveMap';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
// import Footer from '.components/footer';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import DestinationPage from './components/DestinationPage';
import CommunityPage from './components/CommunityPage';
import BookingPage from './components/BookingPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Landing Page Components */}
        <Header />
        <HeroSection />
        <SearchFilterSection />
        <FeaturedDestinations />
        <InteractiveMap />
        <BlogSection />
        <Footer />

        {/* Website Components */}
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/destinations" component={DestinationPage} />
          <Route path="/blog" component={BlogSection} />
          <Route path="/community" component={CommunityPage} />
          <Route path="/booking" component={BookingPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
