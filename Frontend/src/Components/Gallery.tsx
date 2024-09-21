import './Gallery.css'
import dummy from '../assets/images/sample picture.jpeg'
import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [isActive, setIsActive] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust based on when you want the effect to trigger
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);
  
  return (
    <div className="p-24 w-full shad lg:h-[700px] md:h-[600px] sm:h-[600px] items-center flex-1 flex justify-around lg:flex-row sm:flex-col ">

      <div className="flex flex-col scroll-container lg:w-[300px] md:w-[500px] sm:w-[250px] scroll-up items-center justify-around gap-3 ">
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />

        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />

      </div>

      <div className="flex flex-col scroll-container lg:w-[400px] md:w-[500px] sm:w-[250px] scroll-down items-center justify-around gap-3 mx-2">
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
      </div>

      <div className="flex flex-col scroll-container lg:w-[300px] md:w-[500px] sm:w-[250px] scroll-up items-center justify-around gap-3 ">
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
      </div>
    </div>
  )
}
