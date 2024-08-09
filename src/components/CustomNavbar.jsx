import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="block px-3 py-2 text-lg font-bold rounded-md relative group" // Increased font size here
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  );

  return (
    <nav className="bg-[#f2f5f8] text-black p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="/">
            <img
              src="/HealthGuardAI.jpg" // Replace with your logo path
              alt="Logo"
              className="h-10 w-10 rounded-full" // Rounded logo
            />
          </NavLink>
          <NavLink to="/">Health Guard</NavLink>
          <NavLink to="/tour">How it Works</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Login Button */}
        <div className="lg:flex lg:items-center">
  {isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-white hover:text-red-500 text-white text-lg px-4 py-2 rounded-md border border-red-500"
    >
      Logout
    </button>
  ) : (
    <Link
      to="/login"
      className="bg-blue-500 text-white  hover:text-blue-500 text-lg px-4 py-2 rounded-md border border-blue-500"
    >
      Login
    </Link>
  )}
</div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
