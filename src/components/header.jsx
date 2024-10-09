import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 py-6 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-end space-x-8 px-6">
        <Link href="/courses" className="hover:text-purple-600 text-lg font-semibold transition duration-300">
          Courses
        </Link>
        <Link href="/about" className="hover:text-purple-600 text-lg font-semibold transition duration-300">
          About
        </Link>
        <Link href="/admin" className="hover:text-purple-600 text-lg font-semibold transition duration-300">
          Admin
        </Link>
      </nav>
    </header>
  );
};

export default Header;
