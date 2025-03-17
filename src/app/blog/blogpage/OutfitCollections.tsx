export default function OutfitCollections() {
    return (
      <div className="w-full flex flex-col items-center bg-white py-6 px-4">
        {/* Section Title */}
        <h2 className="text-center text-sm font-semibold tracking-wide uppercase mb-4">
          Outfit Collections
        </h2>
  
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-7xl">
          {/* Left Model Image */}
          <div>
            <img
              src="/img-1.jpg"
              alt="Cozy Cardigan Look"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
  
          {/* Middle Shorts Image */}
          <div>
            <img
              src="/img-2.jpg"
              alt="Sequin Shorts Style"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
  
          {/* Right Shoes Image */}
          <div>
            <img
              src="/img-4.jpg"
              alt="Casual Sneakers"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
  
        {/* Description Text */}
        <p className="mt-4 text-gray-600 text-sm text-center leading-relaxed max-w-7xl">
          Until the Digital Age, typography was a specialized occupation. Digitization opened up typography to new generations of previously unrelated designers and lay users, and 
          <strong> David Jury</strong>, head of graphic design at Colchester Institute in England, states that <em>“typography is now something everybody does.”</em> As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.
        </p>
      </div>
    );
  }
  