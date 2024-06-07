import React from "react";
import { FaPhone } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-maroon text-white fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold px-4">Asset Recovery Firm</h1>
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
        <div className="flex items-center">
          <div className="flex items-center px-4">
            <FaPhone />
            <span className="px-4">(123) 456-7890</span>
          </div>
          <a
            href="mailto:dob@assetrecovery.com"
            className="flex items-center hover:text-gray-300 px-4"
          >
            <MdEmail />
            <span className="px-4">dob@assetrecovery.com</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300 px-4"
          >
            <BsLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
