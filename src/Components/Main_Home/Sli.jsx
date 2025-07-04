import React from "react";
import { Link } from "react-router";
import mk from "../../assets/mi.jpg";
import { Parallax } from "react-parallax";

const Sli = () => {
  return (
    // <Parallax bgImage={mk} strength={300}>
      <div>
      <section
       
        className="w-full min-h-screen bg-[#F3F4F6] bg-blend-overlay  text-black flex items-center justify-center"
      >
        <div className="container mx-auto flex flex-col items-center px-2 py-16 text-center md:py-32 md:px-10 lg:px-20 xl:max-w-3xl">
          <h1
            data-aos="fade-right"
            className="text-4xl font-bold leading-none sm:text-5xl"
          >
            <span className="text-violet-400">“</span>Transform Your Body,
            <span className="text-violet-400">Transform Your Life</span>
            <span className="text-black">”</span>
          </h1>
          <p data-aos="fade-left" className="px-5 mt-8 mb-12 text-lgtext-black">
            Join{" "}
            <span className="text-violet-400 font-bold"> NG Fitness Gym </span>
            and reach your fitness goals with expert trainers and top equipment.
            Start your transformation today!
          </p>
          <div data-aos="fade-down" className="flex flex-wrap justify-center">
            <Link
              to={
                "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
              }
            >
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                Contact Now
              </button>
            </Link>
            <a href="#ss">
              <button className="px-8 py-3 m-2 text-lg border rounded text-black border-gray-300">
                Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
    // </Parallax>
    
  );
};

export default Sli;
