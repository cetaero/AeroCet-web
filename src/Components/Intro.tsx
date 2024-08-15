import './Intro.css'
import plane from '../assets/images/IntroImg.png'
export default function Intro() {
  return (
  <div className="flex flex-1 justify-center items-center pt-14">
    <img src={plane} alt='Loader-image' className='mt-11' />
  </div>
  )
}
8