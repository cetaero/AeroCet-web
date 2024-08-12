import './Intro.css'
import intro from '../assets/images/introText.png'
import plane from '../assets/images/plane.png'
export default function Intro() {
  return (
  <div className="flex-1 justify-center items-center w-svw ">
    <img src={plane} alt='Loader-image h-24' className='' />
    <img src={intro} alt='Loader-image' className='' />
  </div>
  )
}
8