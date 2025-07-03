import React from "react";
import { Link } from "react-router";

const Sli = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-2 py-16 text-center md:py-32 md:px-10 lg:px-20 xl:max-w-3xl">
          <h1
            data-aos="fade-right"
            className="text-4xl font-bold leading-none sm:text-5xl"
          >
            <span className="text-violet-600">“</span>Transform Your Body,
            <span className="text-violet-600">Transform Your Life</span>
            <span className="text-black">”</span>
          </h1>
          <p data-aos="fade-left" className="px-5 mt-8 mb-12 text-lg">
            Join{" "}
            <span className="text-violet-600 font-bold"> NG Fitness Gym </span>
            and reach your fitness goals with expert trainers and top equipment.
            Start your transformation today!
          </p>
          <div data-aos="fade-down" className="flex flex-wrap justify-center">
            <Link to={
                "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
              }>
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
              Contact Now
            </button>
            </Link>
            <a
              href="#ss"
            >
              <button  className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
                Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sli;
