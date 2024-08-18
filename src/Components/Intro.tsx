import { useState } from 'react';
import './Intro.css';
import text from '../assets/images/introText.png';
import plane from '../assets/images/plane.png';

export default function Intro() {
  // Define the state type for the offset
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // MouseMove event handler with correct type
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 2;
    const y = (e.clientY - innerHeight / 2) / 1;
    setOffset({ x, y });
  };

  return (
    <div
      className="flex w-full h-screen flex-1 flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Plane Image with Parallax Effect */}
      <img
        src={plane}
        alt="Plane"
        className="parallax-image lg:h-94 aspect-auto lg:mr-64"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />

      {/* Intro Text Image */}
      <img
        src={text}
        alt="Intro Text"
        className="parallax-text lg:h-[36rem] aspect-auto"
        style={{
          transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)`,
        }}
      />
    </div>
  );
}
