import jet from '../assets/images/jet.png';


export default function About() {
  return (
    <div className="p-24 w-full shad m-36 items-center h-[500px] flex-1 flex justify-around flex-col">

      <div className="flex flex-col items-center justify-center rounded-3xl text-center">
        <h1 className="text-2xl md:text-3xl mb-4 font-bold">About</h1>
        <img src={jet} alt="About Image" className="w-40 h-40 md:w-60 md:h-60 rounded-lg object-cover" />
      </div>
      
      
    </div>
  );
}
