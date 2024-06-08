import React from "react";

const Header = () => {
  return (
    <header className="bg-maroon text-white fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold px-2">
          <a href="#home" className="hover:text-gray-300 pl-4">
            Asset Recovery Firm
          </a>
        </h1>

        <nav className="flex-1 space-x-4 ml-8 pt-1">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
