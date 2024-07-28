// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import MenuLinks from "../../config/menuItems";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

const Navbar = () => {
  const { logo, menuItems } = MenuLinks;
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(currentScrollPos > 50);
      setNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`bg-black text-white sticky top-0 transition-transform duration-300 ${
        navVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } ${scrolling ? "shadow-md" : ""}`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold">{logo}</div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <FaBars className="text-slate-400 text-xl" />
        </button>
        
        {/* Desktop Menu */}
        <ul
          className="hidden md:flex flex-row gap-6"
        >
          {menuItems.map((item) => (
            <li key={item.id} className="md:ml-4">
              <Link
                to={item.link}
                className="block p-4 hover:text-gray-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Search Input */}
        <div className="relative hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full text-white bg-slate-500 pl-10 pr-4 py-1 focus:outline-none placeholder-gray-300"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaSearch className="text-blue-600 text-xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={handleMenuToggle} />
    </div>
  );
};

export default Navbar;
