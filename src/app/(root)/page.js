import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-10">
      <h1 className="text-6xl font-extrabold tracking-tight text-center mb-12">
        Welcome to Excellence
      </h1>
      <div className="flex space-x-8">
        <Link
          className="bg-gray-800 text-white border border-gray-800 rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700"
          href={"/courses"}
        >
          Explore Courses
        </Link>
        <Link
          className="bg-gray-800 text-white border border-gray-800 rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700"
          href={"/about"}
        >
          Learn About Us
        </Link>
      </div>
    </div>
  );
}
