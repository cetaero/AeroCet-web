import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = scrollContainerRef.current;

    if (element) {
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -1500 : 1500,
          behavior: 'smooth',
        });
      };

      element.addEventListener('wheel', handleScroll);

      return () => {
        element.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return (
    <div className='home' id='home' ref={scrollContainerRef}>
      <Navbar/>
      <div className='main bg-orange-600'>
        <h1>AeroCET Intro</h1>
      </div>
      <div className='main bg-green-600'>
        <h1>AeroCET Gallery</h1>
      </div>
      <div className='main bg-rose-800'>
        <h1>AeroCET Teams</h1>
      </div>
      <div className='main bg-indigo-600'>
        <h1>AeroCET About</h1>
      </div>
      <div className='main bg-teal-700'>
        <h1>AeroCET Contact</h1>
      </div>
    </div>
  );
};

export default Home;
