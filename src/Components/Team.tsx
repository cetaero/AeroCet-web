import './Team.css'
import plane from '../assets/images/vectorPlane.png'
import drone from '../assets/images/vectorDrone.png'
export default function Team() {
          return (
            <div className="p-24 w-full shad m-36 items-center h-[500px] flex-1 flex justify-around flex-col">
                    <div><h1 className='text-3xl mt-12'>Teams</h1></div>
                    <div className="flex-1 flex items-center justify-around w-full sm:flex-col md:flex-row">       
                    <div className='sm:p-5'><img src={plane} alt='Loader-image' className='' /><h1 className='text-3xl text-center'>Plane</h1></div>
                    <div className=''><img src={drone} alt='Loader-image' className='' /><h1 className='text-3xl text-center'>Drone</h1></div>
                    </div>
            </div>
          )
        }
        