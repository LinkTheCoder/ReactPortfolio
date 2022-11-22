import React from 'react'
import Wallpaper from '../assets/Wallpaper.jpg';
import Nav from '../components/Nav'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        className='w-full h-screen object-cover'
        src={Wallpaper}
      />
      <div className='absolute w-full h-full top-0 left-0 bg-black/10'></div>
      <div className='absolute w-screen bottom-0 align-bottom justify-center text-center'>
        <Nav />
  </div>
  </div>
  );
};

export default Hero;