export default function InfoSection() {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div>
            <h2 className="font-bold text-lg uppercase mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              <em>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</em> vitae dicta sunt explicabo nemo enim ipsam.
            </p>
          </div>
  
          {/* Stories */}
          <div>
            <h2 className="font-bold text-lg uppercase mb-2">Our Stories</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
  
          {/* Approach */}
          <div>
            <h2 className="font-bold text-lg uppercase mb-2">Our Approach</h2>
            <p className="text-gray-600">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              <em>sed quia non numquam eius modi tempora incidunt ut labore</em> et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
  
          {/* Philosophy */}
          <div>
            <h2 className="font-bold text-lg uppercase mb-2">Our Philosophy</h2>
            <p className="text-gray-600">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.
            </p>
          </div>
        </div>
  
        {/* Quote Section */}
        <div className="mt-8 bg-gray-100 p-6 italic text-gray-500 text-center border-l-4 border-gray-400">
          I am a text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure reprehenderit qui in ea 
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </section>
    );
  }
  