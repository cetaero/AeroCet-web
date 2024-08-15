import jet from '../assets/images/jet.png'
export default function About() {
  return (
    <div className="p-24 w-full shad items-center flex-row justify-center flex-1"  >
      {/* Left Paragraph */}
      <div className="">
        <p className="text-lg">
          Welcome to our platform! We are dedicated to providing the best
          experience for our users, blending innovative technology with
          user-centric designs. Our goal is to empower you with seamless
          solutions.
        </p>
      </div>

      {/* Center Image */}
      <div className="justify-center items-center w-full">
        <img
          src={jet}
          alt="About Image"
          className="w-60 h-60"
        />
      </div>

      {/* Right Paragraph */}
      <div className="">
        <p className="text-lg">
          Our team is committed to continuous improvement and delivering
          high-quality services. We believe in transparency, trust, and
          collaboration, and we are here to support your journey every step of
          the way.
        </p>
      </div>
    </div>

  );
}
