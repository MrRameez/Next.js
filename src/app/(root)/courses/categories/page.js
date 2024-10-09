const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-300 p-10">
      <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Explore Our Categories</h1>
      <p className="text-xl text-white text-center max-w-2xl mb-10">
        Discover a wide range of courses tailored to elevate your skills and knowledge.
      </p>

      {/* Categories Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sample Category Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Category" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Web Development</h2>
            <p className="text-gray-600">Learn the latest technologies to build stunning websites.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Category" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Data Science</h2>
            <p className="text-gray-600">Unlock insights from data and make data-driven decisions.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Category" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Graphic Design</h2>
            <p className="text-gray-600">Create stunning visuals and learn design principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
