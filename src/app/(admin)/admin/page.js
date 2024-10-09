const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-purple-300 flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your dashboard. Explore your data and insights here.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Total Courses</h2>
              <p className="text-gray-500">5 Active Courses</p>
            </div>
            <span className="bg-green-500 text-white rounded-full px-4 py-2 text-lg">25</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Total Trainers</h2>
              <p className="text-gray-500">8 Active Trainers</p>
            </div>
            <span className="bg-blue-500 text-white rounded-full px-4 py-2 text-lg">12</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Total Students</h2>
              <p className="text-gray-500">Enrolled Students</p>
            </div>
            <span className="bg-orange-500 text-white rounded-full px-4 py-2 text-lg">150</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
