import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Gallery from '../Components/Gallery';
import Team from '../Components/Team';
import About from '../Components/About';
import Contact from '../Components/Contact'


const Home: React.FC = () => {
  

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = scrollContainerRef.current;

    if (element) {
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollBy({
          left: event.deltaY < 0 ? -940 : 1920,
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
    <div className='home h-svh divbg' id='home' ref={scrollContainerRef}>
     <Navbar/>
      <div className='main' id='intro'>
        <Intro/>
      </div>
      <div  className='main' id='team'>
        <Team/>
      </div>
      <div className='main' id='gallery'>
        <Gallery/>
      </div>
      <div className='main' id='about'>
        <About/>
      </div>
      <div className='main' id='contact'>
        <Contact/>
      </div>
      
</div>
    
  )
  
};

export default Home;
