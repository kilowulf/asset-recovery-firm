import React from "react";

const Header = () => {
  return (
    <header className="bg-maroon text-white fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Asset Recovery Firm</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
        <div className="space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>Phone: (123) 456-7890</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
