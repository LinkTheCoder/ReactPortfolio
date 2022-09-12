import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose, AiFillTag } from 'react-icons/ai';

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Restaurang <span className='font-bold text-yellow-500'>Matador</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
