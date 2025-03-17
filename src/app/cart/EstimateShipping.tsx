export default function EstimateShipping() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-center font-semibold text-xl mb-4">Estimate shipping</h2>
        <div className="flex items-center justify-around gap-4 border p-4 rounded-md shadow-sm">
          {/* Country dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Country</label>
            <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
  
          {/* Province dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Province</label>
            <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Alabama</option>
              <option>California</option>
              <option>New York</option>
            </select>
          </div>
  
          {/* Zip Code Input */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Zip code</label>
            <input
              type="text"
              placeholder="Enter zip code"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
  
          {/* Estimate Button */}
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-2 rounded-full mt-5">
            ESTIMATE
          </button>
        </div>
      </div>
    );
  }
  