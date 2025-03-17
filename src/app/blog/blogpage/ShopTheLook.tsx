export default function ShopTheLook() {
    return (
      <div className="w-full flex flex-col items-center bg-white py-6 px-4">
        {/* Section Title */}
        <h2 className="text-center text-sm font-semibold tracking-wide uppercase mb-4">
          Shop the Look
        </h2>
  
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-7xl">
          {/* Main Model Image */}
          <div className="md:col-span-2">
            <img
              src="/img-1.jpg"
              alt="Fashion model"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
  
          {/* Side Detail Images */}
          <div>
            <img
              src="/image1.jpg"
              alt="Back view"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
  
          <div className="grid grid-rows-2 gap-2">
            <img
              src="/img-3.jpg"
              alt="Shoes"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
            <img
              src="/img-4.jpg"
              alt="Socks"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
  
        {/* Description Text */}
        <p className="mt-4 text-gray-600 text-sm text-center leading-relaxed w-full max-w-7xl">
          Typography is the work of <em>typesetters, compositors, typographers</em>,
          graphic designers, art directors, manga artists, comic book artists, graffiti
          artists, and now—anyone who arranges words, letters, numbers, and symbols for
          publication, display, or distribution—from clerical <strong>workers and newsletter
          writers to anyone</strong> self-publishing materials.
        </p>
      </div>
    );
  }
  