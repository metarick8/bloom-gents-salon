import React, { useEffect } from 'react';
import './i18n/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Hours from './components/Hours';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set initial direction based on stored language or default to English
    const storedLanguage = localStorage.getItem('language') || 'en';
    document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <Booking />
        <Hours />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
