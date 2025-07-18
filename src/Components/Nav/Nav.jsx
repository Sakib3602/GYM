import React from "react";
import Headroom from "react-headroom";

const Nav = () => {
  return (
    <Headroom
      style={{
        zIndex: 999,
        position: 'fixed',
        width: '100%',
      }}
    >
      <div className="navbar poppins-regular h-24 lg:px-16 font-extrabold backdrop-blur-sm bg-white/40 dark:bg-white/80 text-black dark:text-black shadow-2xl">
        {/* Left: Logo + Dropdown */}
        <div className="navbar">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm absolute font-medium dropdown-content mt-3 z-[1000] p-2 shadow bg-white dark:bg-gray-800 text-black dark:text-white rounded-box w-52"
            >
              <li className="hover:text-[#7F22FE] transition-colors duration-200">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#7F22FE] transition-colors duration-200">
                <a href="#aboutS">About Us</a>
              </li>
              <li className="hover:text-[#7F22FE] transition-colors duration-200">
                <a href="#ss">Services</a>
              </li>
              <li className="hover:text-[#7F22FE] transition-colors duration-200">
                <a href="#price">MemberShip Plan</a>
              </li>
              <li className="hover:text-[#7F22FE] transition-colors duration-200">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a href="#" data-aos="fade-down" className="text-lg poppins-bold">
            <span className="text-4xl text-[#7F22FE]">NG </span> FITNESS GYM
          </a>
        </div>

        {/* Desktop Menu */}
        <div data-aos="fade-down" className="navbar-center hidden lg:flex z-[1000]">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#aboutS">About Us</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#ss">Services</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#price">MemberShip Plan</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Headroom>
  );
};

export default Nav;
