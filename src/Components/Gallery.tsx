import './Gallery.css'
import dummy from '../assets/images/sample picture.jpeg'
export default function Gallery() {
  return (
    <div className="p-24 w-full shad m-36 items-center">
    <div className="flex scroll-container items-center justify-around -z-10">
        
        <img src={dummy} alt='Loader-image' className='' />
        <img src={dummy} alt='Loader-image' className='' />
        <img src={dummy} alt='Loader-image' className='' />
        <img src={dummy} alt='Loader-image' className='' />
        <img src={dummy} alt='Loader-image' className='' />
        
    </div>
</div>
  )
}
