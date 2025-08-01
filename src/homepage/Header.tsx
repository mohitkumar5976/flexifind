import React from "react";

const Header = ({ setShowDialog }: any) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md px-6 py-4 flex justify-between items-center text-white">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-wide">
        <span className="text-white">Flexi</span>
        <span className="text-yellow-300">find</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex space-x-8 text-lg font-medium">
        <a href="#" className="hover:text-yellow-300 transition duration-200">
          Home
        </a>
        <a href="#" className="hover:text-yellow-300 transition duration-200">
          Services
        </a>
        <a href="#" className="hover:text-yellow-300 transition duration-200">
          Contact
        </a>
      </nav>

      {/* Login Button */}
      <button
        onClick={() => setShowDialog(true)}
        className="bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 transition duration-200 text-lg"
      >
        Login
      </button>
    </header>
  );
};

export default Header;
