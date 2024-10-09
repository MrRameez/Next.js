const Batches = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Available Batches</h1>
        <p className="text-gray-700 text-lg mb-8">
          Choose from our available batches that best fit your schedule!
        </p>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batch Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">Batch A</h2>
            <p className="text-gray-600 mt-2">Monday & Wednesday - 10 AM to 12 PM</p>
            <a
              href="#"
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-6 transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>

          {/* Batch Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">Batch B</h2>
            <p className="text-gray-600 mt-2">Tuesday & Thursday - 2 PM to 4 PM</p>
            <a
              href="#"
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-6 transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>

          {/* Batch Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">Batch C</h2>
            <p className="text-gray-600 mt-2">Saturday - 10 AM to 1 PM</p>
            <a
              href="#"
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-6 transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>

          {/* Batch Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">Batch D</h2>
            <p className="text-gray-600 mt-2">Friday - 5 PM to 8 PM</p>
            <a
              href="#"
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-6 transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batches;
