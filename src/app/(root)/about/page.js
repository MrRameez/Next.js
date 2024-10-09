const About = () => {
  return (
    <div className="p-20 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to the About Page</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are committed to providing you with the best experience. Our team is dedicated to creating
          high-quality content and services to help you achieve your goals. Explore more about us below!
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
