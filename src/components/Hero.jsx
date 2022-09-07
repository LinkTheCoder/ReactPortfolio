import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-yellow-500'>Pizzeria</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> & <span>Restaurang</span> 
                <h1 className='whitespace-pre-line text-yellow-500'>Öst på Stan</h1></h1>
            </div>
            <img className='rounded-xl w-full max-h-[500px] object-cover' src='/images/HeroImage.jpg' alt="/" />
        </div>
    </div>
  )
}

export default Hero