import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";\
import im from '../../assets/logo_ng.jpg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-5 shadow-inner ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Quick Links */}
        {/* Quick Links */}
<div className="flex flex-col items-center lg:items-start">
  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-transparent bg-clip-text">
    Quick Links
  </h2>
  <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-center sm:text-left">
    <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition">Home</a></li>
    <li><a href="#aboutS" className="text-gray-600 hover:text-yellow-600 transition">About Us</a></li>
    <li><a href="#ss" className="text-gray-600 hover:text-yellow-600 transition">Services</a></li>
    <li><a href="#gallary" className="text-gray-600 hover:text-yellow-600 transition">Gallery</a></li>
    <li><a href="#price" className="text-gray-600 hover:text-yellow-600 transition">Membership Plan</a></li>
    <li><Link to="/admin" className="text-gray-600 hover:text-yellow-600 transition">Admin Login</Link></li>
  </ul>
</div>


        {/* Logo & Follow Us */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <img 
            src={im}
            alt="NG Fitness Logo" 
            className="w-20 h-20 object-contain rounded-full border-2 border-yellow-500 p-1" 
          />

          {/* Follow Us */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-transparent bg-clip-text mb-4">
  Follow Us
</h2>
<div className="flex space-x-5">
  <a href="#" className="hover:scale-110 transition-transform">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
  </a>
  <a href="#" className="hover:scale-110 transition-transform">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6" />
  </a>
  
</div>

        </div>

        {/* Developer Section */}
        <div className="text-center lg:text-right space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-transparent bg-clip-text">
            Developer
          </h2>
          <p className="text-gray-600 text-sm">Developed by Sakib Sarkar Emon</p>
          <a 
            href="https://wa.me/+8801928477557?text=Hello%2C%20I%20saw%20your%20website%20work%20Ngfitness!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-full transition"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NG Fitness Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
