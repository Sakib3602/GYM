import robin from "../../assets/robin.jpg";
import nitto from "../../assets/nitto.jpeg";
import rakib from "../../assets/m.avif"; // ✅ Your third trainer image

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";

const Trainers = () => {
  useEffect(() => {
      Aos.init({ duration: 800, easing: "ease-in-out" });
    }, []);
  return (
    <div className="min-h-screen w-full relative bg-white py-10 poppins-regular">
      {/* Goldish Background Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at top center, rgba(255, 200, 0, 0.3), transparent 70%)`,
          filter: "blur(100px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Section Header */}
      {/* Section Header */}
      <div data-aos="fade-up" className="relative z-10 text-center px-4 mb-5">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-700 tracking-widest mb-2">
          OUR TEAM
        </h1>
        <hr className="w-32 mx-auto border-yellow-500 border-2 rounded-full mb-4" />
        <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base poppins-regular">
          Meet the passionate individuals behind NG Fitness who are dedicated to
          helping you achieve your fitness goals. From strength coaching to
          personal transformation, our team is here to support your journey
          every step of the way.
        </p>
      </div>

      {/* Trainer Cards */}
      <div data-aos="fade-up" className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20">
        {/* CARD 1 - Robin */}
        <div className="bg-white/30 backdrop-blur-md border border-yellow-300 rounded-2xl shadow-lg p-6 hover:shadow-yellow-500/50 transition duration-300">
          <img
            src={robin}
            alt="Robin"
            className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-500 hover:scale-105 transition duration-300"
          />
          <h3 className="text-center text-xl font-bold mt-4 text-yellow-800">
            Robin
          </h3>
          <p className="text-center text-sm text-gray-700">Senior Trainer</p>
          <p className="text-center text-sm mt-2 text-gray-600 poppins-regular">
            A passionate strength coach who believes in building discipline
            through consistency.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-[#1877F2] w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <BsInstagram className="text-[#E4405F] w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* CARD 2 - Nitto */}
        <div data-aos="fade-up" className="bg-white/30 backdrop-blur-md border border-yellow-300 rounded-2xl shadow-lg p-6 hover:shadow-yellow-500/50 transition duration-300">
          <img
            src={nitto}
            alt="Nitto"
            className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-500 hover:scale-105 transition duration-300"
          />
          <h3 className="text-center text-xl font-bold mt-4 text-yellow-800">
            Nitto Biswas
          </h3>
          <p className="text-center text-sm text-gray-700">Owner & Manager</p>
          <p className="text-center text-sm mt-2 text-gray-600 poppins-regular">
            Leading NG Fitness with vision and energy. Loves mentoring and
            transforming lives.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-[#1877F2] w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <BsInstagram className="text-[#E4405F] w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* CARD 3 - Rakib (added back) */}
        <div data-aos="fade-up" className="bg-white/30 backdrop-blur-md border border-yellow-300 rounded-2xl shadow-lg p-6 hover:shadow-yellow-500/50 transition duration-300">
          <img
            src={rakib}
            alt="Rakib"
            className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-500 hover:scale-105 transition duration-300"
          />
          <h3 className="text-center text-xl font-bold mt-4 text-yellow-800">
            Rakib
          </h3>
          <p className="text-center text-sm text-gray-700">Fitness Coach</p>
          <p className="text-center text-sm mt-2 text-gray-600 poppins-regular">
            Expert in weight loss and personal transformation with customized
            training programs.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-[#1877F2] w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <BsInstagram className="text-[#E4405F] w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
