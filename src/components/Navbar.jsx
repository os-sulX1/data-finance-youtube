import { useState } from 'react';
import {AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(true)
  
  const handelNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex items-center justify-between h-24 text-white max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold bg-red-400 text-[#00df9a]">React .</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handelNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
      </div>
      <div className={!nav ?'bg-[#000300] fixed top-0 left-0 w-[60%] border-r-8 border-r-gray-900':'fixed left-[-100%]'}>
        <h1 className="m-4 text-3xl font-bold bg-red-400 text-[#00df9a]">
          React .
        </h1>
        <ul className="pt-12 uppercase ">
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources</li>
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
