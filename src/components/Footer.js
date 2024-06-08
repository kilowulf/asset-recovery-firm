import React from "react";
import { FaPhone } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return <footer className="bg-maroon text-white fixed bottom-0 left-0 right-0 shadow-md">
      <div className="flex items-center pt-3">
        <div className="flex items-center px-6">
          <FaPhone />
          <span className="px-2">(123) 456-7890</span>
        </div>
        <a href="mailto:dob@assetrecovery.com" className="flex items-center hover:text-gray-300 px-2">
          <MdEmail />
          <span className="px-2">dob@assetrecovery.com</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300 text-white px-2">
          <BsLinkedin />
          <span className="px-2">LinkedIn</span>
        </a>
      </div>
      <div className="container mx-auto text-center py-4 text-xs">
        &copy; 2024 Asset Recovery Firm. All rights reserved.
      </div>
    </footer>;
};

export default Footer;
