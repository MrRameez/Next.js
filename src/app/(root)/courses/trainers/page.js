const Trainers = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-10">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">Meet Our Trainers</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-10">
        Our dedicated trainers bring a wealth of experience and knowledge to help you succeed in your learning journey.
      </p>

      {/* Trainers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Trainer Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Expert in Web Development</p>
          <p className="mt-2 text-gray-500">
            John has over 10 years of experience in building responsive websites and applications.
          </p>
        </div>

        {/* Trainer Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Jane Smith</h2>
          <p className="text-gray-600">Data Science Specialist</p>
          <p className="mt-2 text-gray-500">
            Jane specializes in data analysis and machine learning, helping students turn data into actionable insights.
          </p>
        </div>

        {/* Trainer Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Emily Johnson</h2>
          <p className="text-gray-600">Graphic Design Guru</p>
          <p className="mt-2 text-gray-500">
            With a passion for design, Emily teaches students to create stunning visuals and marketing materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
