import './Intro.css';
import text from '../assets/images/introText.png';
import plane from '../assets/images/plane.png';

export default function Intro() {
  return (
    <div className="flex w-full h-screen flex-1 flex-col justify-center items-center divbg ">
      {/* Plane Image with Parallax Effect */}
      <img
        src={plane}
        alt="Plane"
        className="parallax-image lg:h-94 aspect-auto lg:mr-64"
      />

      {/* Intro Text Image */}
      <img
        src={text}
        alt="Intro Text"
        className="lg:h-[36rem] aspect-auto"
      />
    </div>
  );
}
