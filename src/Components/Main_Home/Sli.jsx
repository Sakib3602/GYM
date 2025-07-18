// import React from "react";
// import { Link } from "react-router";
// import mk from "../../assets/mi.jpg";
// import { Parallax } from "react-parallax";

// const Sli = () => {
//   return (
//     // <Parallax bgImage={mk} strength={300}>
//       <div>
//       <section

//         className="w-full min-h-screen bg-[#F3F4F6] bg-blend-overlay  text-black flex items-center justify-center"
//       >
//         <div className="container mx-auto flex flex-col items-center px-2 py-16 text-center md:py-32 md:px-10 lg:px-20 xl:max-w-3xl">
//           <h1
//             data-aos="fade-right"
//             className="text-4xl font-bold leading-none sm:text-5xl"
//           >
//             <span className="text-violet-400">“</span>Transform Your Body,
//             <span className="text-violet-400">Transform Your Life</span>
//             <span className="text-black">”</span>
//           </h1>
//           <p data-aos="fade-left" className="px-5 mt-8 mb-12 text-lgtext-black">
//             Join{" "}
//             <span className="text-violet-400 font-bold"> NG Fitness Gym </span>
//             and reach your fitness goals with expert trainers and top equipment.
//             Start your transformation today!
//           </p>
//           <div data-aos="fade-down" className="flex flex-wrap justify-center">
//             <Link
//               to={
//                 "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
//               }
//             >
//               <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
//                 Contact Now
//               </button>
//             </Link>
//             <a href="#ss">
//               <button className="px-8 py-3 m-2 text-lg border rounded text-black border-gray-300">
//                 Services
//               </button>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//     // </Parallax>

//   );
// };

// export default Sli;
"use client";

import { useState, useEffect } from "react";
import { FaPhone, FaChevronDown, FaStar, FaFire, FaCog } from "react-icons/fa";
import { Link } from "react-router";

export default function Sli() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse tracking for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ];

  return (
    <div className="relative poppins-regular min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 z-30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            top: "-5rem",
            right: "-5rem",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            bottom: "-5rem",
            left: "-5rem",
            transform: `translate(${mousePosition.x * -0.015}px, ${
              mousePosition.y * -0.015
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-8 blur-2xl transition-all duration-1000"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${
              mousePosition.x * 0.01
            }px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
      </div>

      {/* Remove scrollbars */}
      <style jsx global>{`
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Gym ${index + 1}`}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              {/* <div className="inline-flex  items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2">
                <FaFire className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">NG Fitness Gym</span>
              </div> */}

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-gray-800">TRANSFORM</span>
                  <br />
                  <span className="text-gray-800">YOUR</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    BODY,
                  </span>
                  <br />
                  <span className="text-gray-800">TRANSFORM</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    YOUR LIFE
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Join NG Fitness Gym and reach your fitness goals with expert
                  trainers and top equipment. Start your transformation today!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={
                    "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
                  }
                >
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Contact Us</span>
                      <FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </span>
                  </button>
                </Link>
                <a href="#ss">
                  <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 shadow-lg">
                    <span className="flex items-center justify-center space-x-2">
                      <FaCog className="w-4 h-4" />
                      <span>Services</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Feature Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FaCog className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Expert Coaching
                      </h3>
                      <p className="text-gray-600">Professional guidance</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Get personalized workout plans and nutrition advice from our
                    certified fitness experts to maximize your results.
                  </p>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                    <span className="text-gray-800 font-semibold ml-2">
                      4.9/5
                    </span>
                  </div>
                </div>

                {/* Floating Mini Cards */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">24/7</div>
                    <div className="text-blue-100 text-sm">Open</div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl font-black text-gray-800">
                      FREE
                    </div>
                    <div className="text-gray-600 text-sm">Trial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-600 text-sm">Scroll to explore</span>
          <FaChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
