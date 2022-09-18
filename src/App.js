import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Lunch />
        <Dinner />
        <FindUs />
        <Footer />
    </div>
  );
}

export default App;
