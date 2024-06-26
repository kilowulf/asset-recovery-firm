import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className="font-sans">
      <header className="bg-maroon text-white fixed top-0 left-0 right-0 z-10 shadow-red-900 font-sans">
        <div className="mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">
            <a
              href="#home"
              className="text-white uppercase hover:text-gray-300 pl-8 font-sans
              "
            >
              Asset Recovery Firm
            </a>
          </h1>
          <div />

          <nav>
            <ul className={`sidebar uppercase ${nav ? "show" : ""}`}>
              <li onClick={handleNav} className="p-3 ml-2">
                <FaRegWindowClose size="19" />
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 border-b-2 border-gray-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300 border-b-2 border-gray-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 border-b-2 border-gray-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="uppercase flex items-center">
              <li className="hideOnMobile">
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="hideOnMobile">
                <a href="#services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="hideOnMobile">
                <a href="#contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li
                className="menuButton ease-in-out duration-300"
                onClick={handleNav}
              >
                {!nav
                  ? <LuMenuSquare className="menuButton mx-2" size="30" />
                  : <FaRegWindowClose size="30" className="menuButton" />}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
