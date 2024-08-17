import './Gallery.css'
import dummy from '../assets/images/sample picture.jpeg'
export default function Gallery() {
  return (
    <div className="p-24 w-full shad m-36 items-center  flex-1 flex justify-around flex-col">
    <div className="flex scroll-container items-center justify-around p-5 gap-3 mx-10">
        
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />
        <img src={dummy} alt='Loader-image' className='rounded-3xl' />

        
    </div>
</div>
  )
}
