export default function HeroSection() {
    return (
      <div
        className="relative w-full h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/img-1.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-2xl font-semibold tracking-wide">
            SPRING — SUMMER TRENDING 2020
          </h1>
          <p className="italic text-gray-200 mt-2">May 11, 2022</p>
        </div>
      </div>
    );
  }
  