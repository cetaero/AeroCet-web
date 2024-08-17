import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import drone from '../assets/images/drone.png'
import download from '../assets/images/downloadButton.png'

export default function Contact() {
  return (
    <div className="p-24 w-full shad m-36 items-center h-[500px] flex-1 flex justify-around flex-col">
      <div className="flex-1 flex items-center flex-col">
       <img src={drone} alt='Loader-image' className='loader-image h-48' />
       <div className='flex-1 w-full float-start'>
       <h2>SUPPORT US IN THE UPCOMING SAE <br></br>Competitions!</h2>
       <button><img src={download} alt='Loader-image' className='loader-image h-14' /></button>
       </div>
      </div>
      <div className="flex justify-center mx-10 lg:space-x-48 sm:space-x-8 px-12 my-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
          <FaFacebookF size={32} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform">
          <FaWhatsapp size={32} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition-transform">
          <FaYoutube size={32} />
        </a>
        <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-110 transition-transform">
          <SiGmail size={32} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
}
