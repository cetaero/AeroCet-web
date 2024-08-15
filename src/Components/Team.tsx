import './Team.css'
import plane from '../assets/images/vectorPlane.png'
import drone from '../assets/images/vectorDrone.png'
export default function Team() {
          return (
            <div className="p-24 w-full shad m-36 items-center h-[500px] flex-1 flex justify-around">
                    <div className="flex-1 flex items-center justify-around">       
                    <div className=''><img src={plane} alt='Loader-image' className='' /><h1 className='text-3xl text-center'>Plane</h1></div>
                    <h1 className='text-3xl'>Teams</h1>
                    <div className=''><img src={drone} alt='Loader-image' className='' /><h1 className='text-3xl text-center'>Drone</h1></div>
                    </div>
            </div>
          )
        }
        