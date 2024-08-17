import { useState } from 'react';
import logo from '../assets/AeroCET-logo.png';
import './Navbar.css';

function Navbar() {
  // State to manage whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu on mobile after selecting an item
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className='z-10'>
      <div className={`fixed top-0 left-0 h-full p-6 shadow-lg nav rounded-r-3xl ${isOpen ? 'open' : 'closed'}`}>
        {/* Toggle Button for Mobile View */}
        <div className='md:hidden flex justify-between items-center'>
          {!isOpen && (
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'>
              {/* Hamburger Icon */}
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          )}
          {isOpen && (
            <button
              onClick={toggleMenu}
              className='text-white focus:outline-none'>
              {/* Close Icon */}
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          )}
        </div>

        {/* Menu Items */}
        <div className={`menu-items ${isOpen ? 'open' : 'closed'} lg:flex lg:flex-col lg:justify-around h-svh relative`}>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('about')}>
            <img src={logo} alt='About Logo' className='loader-image h-16' />
            <h1 className='text-2xl mx-3'>About</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('contact')}>
            <img src={logo} alt='Contact Logo' className='loader-image h-16' />
            <h1 className='text-2xl mx-3'>Contact</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('intro')}>
            <img src={logo} alt='Home Logo' className='loader-image h-16' />
            <h1 className='text-2xl mx-3'>Home</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('gallery')}>
            <img src={logo} alt='Gallery Logo' className='loader-image h-16' />
            <h1 className='text-2xl mx-3'>Gallery</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('team')}>
            <img src={logo} alt='Teams Logo' className='loader-image h-16' />
            <h1 className='text-2xl mx-3'>Teams</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
