import './Team.css';
import plane from '../assets/images/vectorPlane.png';
import drone from '../assets/images/vectorDrone.png';



export default function Team() {


  return (
    <div  className="p-24 w-full shad lg:m-36 md:my-64 items-center lg:h-[500px] md:h-[600px] sm:h-[600px] flex-1 flex justify-around flex-col">
      <div>
        <h1 className='text-3xl mt-12'>Teams</h1>
      </div>
      <div className="flex-1 flex items-center justify-around w-full sm:flex-col md:flex-col lg:flex-row">       
        <button className="team-button">
          <div className=''>
            <img src={plane} alt='Image of a plane' className='team-image sm:h-20 md:h-32 lg:h-40' />
            <h1 className='text-3xl text-center'>Plane</h1>
          </div>
        </button>
        <button className="team-button">
          <div className=''>
            <img src={drone} alt='Image of a drone' className='team-image sm:h-20 md:h-32 lg:h-40' />
            <h1 className='text-3xl text-center'>Drone</h1>
          </div>
        </button>
      </div>
    </div>
  );
}
