const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-300 flex items-center justify-center p-10">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Explore Our Courses</h1>
        <p className="text-gray-700 text-lg mb-8">
          Discover a wide range of courses designed to enhance your skills and knowledge!
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Web Development</h2>
            <p className="text-gray-600 mt-2">
              Learn how to build responsive websites and applications using HTML, CSS, and JavaScript.
            </p>
            <a href="#" className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors duration-300">
              View Course
            </a>
          </div>

          {/* Course Card 2 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Data Science</h2>
            <p className="text-gray-600 mt-2">
              Dive into data analysis, machine learning, and visualization techniques.
            </p>
            <a href="#" className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors duration-300">
              View Course
            </a>
          </div>

          {/* Course Card 3 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Graphic Design</h2>
            <p className="text-gray-600 mt-2">
              Master the art of visual communication and design stunning graphics.
            </p>
            <a href="#" className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors duration-300">
              View Course
            </a>
          </div>

          {/* Course Card 4 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Digital Marketing</h2>
            <p className="text-gray-600 mt-2">
              Learn the strategies to effectively market products and services online.
            </p>
            <a href="#" className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors duration-300">
              View Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
