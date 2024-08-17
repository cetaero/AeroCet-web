import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Gallery from '../Components/Gallery';
import Team from '../Components/Team';
import About from '../Components/About';
import Contact from '../Components/Contact';

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = scrollContainerRef.current;

    if (element) {
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -1000 : 1000,
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
    <div className='home h-svh' id='home' ref={scrollContainerRef}>
{/*
 <Navbar/>
      <div className='main'>
        <Intro/>
      </div>
      <div className='main'>
        <Gallery/>
      </div>
      <div className='main'>
        <Team/>
      </div>
      <div className='main'>
        <About/>
      </div>
      <div className='main'>
        <Contact/>
      </div>
*/}
    <div className='main'>
        <Team/>
      </div>
    </div>
  );
};

export default Home;
