export default function Projects() {
    return (
      <section className="bg-black text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-lime-300">Projects</h2>
          <div className="flex flex-col gap-8">
            {/* Project Card 1 */}
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="md:w-1/3">
                <img
                  src="src\assets\Rectangle-41.png"
                  alt="Workintech"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-lime-300 mb-2">Workintech</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    A simple, customizable, minimal setup cookie plugin that
                    allows your users to select which cookies to accept or
                    decline.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      react
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      redux
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      vercel
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-lime-300 text-black text-sm font-bold rounded hover:bg-lime-400">
                    View Site
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white text-sm font-bold rounded hover:bg-gray-600">
                    Github
                  </button>
                </div>
              </div>
            </div>
  
            {/* Project Card 2 */}
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="md:w-1/3">
                <img
                  src="src\assets\Rectangle-41-1.png"
                  alt="Journey"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-lime-300 mb-2">Journey</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    A simple, customizable, minimal setup cookie plugin that
                    allows your users to select which cookies to accept or
                    decline.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      react
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      redux
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">
                      vercel
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-lime-300 text-black text-sm font-bold rounded hover:bg-lime-400">
                    View Site
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white text-sm font-bold rounded hover:bg-gray-600">
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  