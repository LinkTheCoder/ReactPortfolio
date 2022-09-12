import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        <Footer />
    </div>
  );
}

export default App;
