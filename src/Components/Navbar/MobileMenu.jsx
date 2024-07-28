// src/components/MobileMenu.js
import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import MenuLinks from "../../config/menuItems";

const MobileMenu = ({ isOpen, onClose }) => {
  const { logo, menuItems } = MenuLinks;

  return (
    <div
      className={`fixed top-0 left-0 w-65 min-h-screen bg-black text-gray-400 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-2xl text-gray-400"
        onClick={onClose}
        aria-label="Close menu"
      >
        <FaTimes />
      </button>

      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-2xl font-bold text-gray-400">{logo}</div>
      </div>

      {/* Menu Items */}
      <ul className="flex-1 flex flex-col p-4">
        {menuItems.map((item) => (
          <li key={item.id} className="">
            <Link
              to={item.link}
              className="block p-4 hover:bg-gray-800 transition-colors"
              onClick={onClose} // Close menu on item click
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="p-4 text-center border-t border-gray-700 mt-auto">
        <p className="text-sm text-gray-400">
          &copy; 2024 CutRateTraveller. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
