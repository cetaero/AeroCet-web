import logo from '../assets/AeroCET-logo.png';
import './Navbar.css'

function Navbar() {
  return (
    <div className='flex flex-col justify-between h-svh py-10 pl-8 pr-2 nav fixed'>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-28' /><h1 className='text-3xl mx-3'>About</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-28' /><h1 className='text-3xl mx-3'>Contact</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-28' /><h1 className='text-3xl mx-3'>Home</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-28' /><h1 className='text-3xl mx-3'>Gallery</h1></div>    
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-28' /><h1 className='text-3xl mx-3'>Teams</h1></div>
    </div>
  )
}

export default Navbar
