import React from 'react';
import './styles/App.css';
import './styles/Responsive.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurGuest from './components/OurGuest';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutUs />
        <OurGuest />
        <Venue />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App