export default function HeroImageWithQuote() {
    return (
      <div className="w-full flex flex-col items-center bg-white py-4 px-2">
        {/* Main Image */}
        <img
          src="/img-4.jpg"
          alt="Camera girl"
          className="w-full max-w-7xl h-auto object-cover rounded-lg shadow-sm"
        />
  
        {/* Quote Section */}
        <div className="mt-4 w-full max-w-7xl bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
          <blockquote className="italic text-gray-600 text-sm md:text-base leading-relaxed">
            <span className="text-2xl md:text-3xl text-gray-400 mr-1">“</span>
            Until the Digital Age, typography was a specialized occupation.
            Digitization opened up typography to new generations of previously
            unrelated designers and lay users. 
            <br />
            <br />
            <span className="font-semibold text-gray-700">David Jury</span>, head of graphic design at
            Colchester Institute in England, states that 
            <em> "typography is now something everybody does."</em>
          </blockquote>
        </div>
      </div>
    );
  }
  