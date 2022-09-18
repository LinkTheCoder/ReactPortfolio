import React from 'react';

const Lunch = () => {
  return (
    <div>
    <h1 id="Lunch" className=' mt-6 mb-2 text-yellow-500 font-bold text-4xl text-center'>
    Lunch Menyer
  </h1>
  
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Kebab/Pizzatallrik</p>
          <p className='px-2'>Tills 10/12 (10:30 - 15:00)</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/KebabLunch.jpg'
          alt='/'
        />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Salladstallrik</p>
          <p className='px-2'>Tills 10/12 (10:30 - 15:00)</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/SalladTallrik.jpg'
          alt='/'
        />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Husmanskosttallrik</p>
          <p className='px-2'>Tills 10/12 (10:30 - 15:00)</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/Husmakost.jpg'
          alt='/'
        />
      </div>
    </div>
    <p className='text-center'>* Student och pensionärsrabatt 10%</p>
    </div>
  );
};

export default Lunch;
