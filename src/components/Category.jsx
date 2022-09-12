import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-yellow-500 font-bold text-4xl text-center'>
        Hitta Oss
      </h1>
<div align="center">
      <iframe className='rounded-xl mt-4 w-full aspect-auto' title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.1452508885463!2d20.281693216216002!3d63.822130850013544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b0596b7c201%3A0x50415757cd11359a!2sRestaurang%20%26%20Pizzeria%20Matador!5e0!3m2!1ssv!2sse!4v1662550826900!5m2!1ssv!2sse" height="400em" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
  );
};

export default Category;
