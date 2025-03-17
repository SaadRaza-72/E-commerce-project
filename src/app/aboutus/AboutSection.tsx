export default function AboutSection() {
    return (
      <section
        className="relative w-full h-48 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/img-5.jpg')` }}
      >
        <div className="text-center">
          <h1 className="text-white text-3xl font-semibold">About us</h1>
          <p className="text-gray-200 mt-2">Follow your passion, and success will follow you</p>
        </div>
  
        {/* Optional overlay for dark effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </section>
    );
  }
  