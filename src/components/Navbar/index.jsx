import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white shadow p-3 relative">
        {/* Top Right Section */}
        <div className="flex space-x-4 items-center justify-end ">
          <a href="#" className="text-gray-600 hover:text-black">
            Help
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            web or website
          </a>
          <span className="text-black">Hi, John</span>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-black">Tables</h1>

          {/* Navbar for small screens */}
          <nav className="hidden sm:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              List
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Clearance
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Trending
            </a>
          </nav>

          {/* Hamburger Menu for larger screens */}
          <button
            className="sm:hidden text-gray-600 hover:text-black"
            onClick={toggleMenu}
          >
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown menu for the menu bar */}
        {isMenuOpen && (
          <div className=" 
          sm:hidden 
          bg-gray-50 p-4 
          w-full
          h-screen
          left-0
          absolute
          

          ">
            <a
              href="#"
              className="block text-gray-600 hover:text-black py-1"
            >
              Categories
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black py-1"
            >
              List
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black py-1"
            >
              Clearance
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black py-1"
            >
              Trending
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
