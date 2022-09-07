import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-yellow-500 font-bold text-4xl text-center'>
        Menyer
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Typ</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Alla
            </button>

            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Pizza
            </button>

            <button
              onClick={() => filterType('inbakat')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Inbakade Pizzor
            </button>

            <button
              onClick={() => filterType('veganskt')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Veganskt
            </button>

            <button
              onClick={() => filterType('pasta')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Pasta
            </button>

            <button
              onClick={() => filterType('kebab')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              kebab
            </button>

            <button
              onClick={() => filterType('rulle')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Rulle
            </button>

            <button
              onClick={() => filterType('grillat')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Grillat
            </button>

            <button
              onClick={() => filterType('sallad')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Sallad
            </button>

            <button
              onClick={() => filterType('barn')}
              className='m-1 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              Barn
            </button>

          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Land</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('🇮🇹')}
              className='m-1 border-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
            🇮🇹
            </button>

            <button
              onClick={() => filterPrice('🇺🇸')}
              className='m-1 border-yellow-500 hover:bg-yellow-500 hover:text-white'
            >
              🇺🇸
            </button>

            <button
              onClick={() => filterPrice('🇲🇽')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              🇲🇽
            </button>

          </div>
        </div>
      </div>
      

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
