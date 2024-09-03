import jet from '../assets/images/jet.png';

export default function About() {
  return (
    <div className="p-6 lg:p-12 xl:p-24 w-full  flex flex-col items-center justify-center shad">
      <div className=" shadow-lg rounded-lg p-6 lg:p-12 w-full max-w-4xl flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">About Us</h1>
        <img
          src={jet}
          alt="About Image"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full shadow-md object-cover mb-6"
        />
        <p className="text-base md:text-lg lg:text-xl mb-6">
           We believe in innovation, integrity, and commitment to excellence. Our team of experts works tirelessly to deliver high-quality solutions that exceed expectations and drive success. Join us on our journey as we continue to push the boundaries and set new standards in our industry.
        </p>
        <div className="flex justify-center gap-4">

          
        </div>
      </div>
    </div>
  );
}
