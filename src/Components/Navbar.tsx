import logo from '../assets/AeroCET-logo.png';
import './Navbar.css'

function Navbar() {
  return (
    <div className='flex flex-col justify-between h-svh py-10 pl-6 pr-2 nav fixed rounded-r-3xl'>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-24' /><h1 className='text-2xl mx-3'>About</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-24' /><h1 className='text-2xl mx-3'>Contact</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-24' /><h1 className='text-2xl mx-3'>Home</h1></div>
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-24' /><h1 className='text-2xl mx-3'>Gallery</h1></div>    
      <div className='flex flex-row items-center'><img src={logo} alt='Loader-image' className='loader-image h-24' /><h1 className='text-2xl mx-3'>Teams</h1></div>
    </div>
  )
}2

export default Navbar
