import React from "react";
import im from "../../assets/logo_ng.jpg";

const Second_page = () => {
  return (
    <section
      id="aboutS"
      className="bg-white py-16 px-4 md:px-8 lg:px-24 poppins-regular"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={im}
            alt="Our Team"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Welcome to our gym family! At{" "}
            <span className="font-semibold text-black">NG Fitness Gym</span>, we
            believe in transforming lives with passion, dedication, and
            strength. Our mission is to empower individuals through personalized
            training, community support, and a positive atmosphere.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            With professional trainers, state-of-the-art equipment, and a
            commitment to your goals — we’re more than just a gym, we’re your
            transformation partner.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?">
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Contact Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second_page;
