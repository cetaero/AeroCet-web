import './Intro.css'
import intro from '../assets/images/introText.png'
import plane from '../assets/images/plane.png'
export default function Intro() {
  return (
  <div className="justify-center items-center p-64">
    <img src={plane} alt='Loader-image h-28' className='' />
    <img src={intro} alt='Loader-image' className='' />
  </div>
  )
}
8