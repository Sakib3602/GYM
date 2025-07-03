import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Second_page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="aboutS" className="px-4 py-10 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
        {/* Image with fixed aspect ratio and no top cut */}
        <div className="w-full aspect-[3/2]">
          <img
            src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/504244484_122250800354027349_4402659100851273439_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1wi8kQK8Zg0Q7kNvwE-2gwU&_nc_oc=Adm_7Ie8fcrjpoPlSGV1gOJV_D4tW0NTvqAj9f7fMOCw0usRzE1wusrrCqr7pYfwZVw&_nc_zt=23&_nc_ht=scontent.fzyl2-1.fna&_nc_gid=zXCgov5eljZTslp-6OHpeg&oh=00_AfOr0-8XQpdfw7IEk097ZpFZOZLxRWRnLX4hEwq4dgfYOw&oe=6866CD38"
            alt="NG Fitness Gym"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Card Content */}
        <div
          data-aos="zoom-in-up"
          className="px-6 py-8 sm:px-10 sm:py-12 bg-gray-50"
        >
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">
            About Us
          </h2>
          <p className="text-base leading-relaxed poppins text-gray-700">
            At NG Fitness Gym, we believe fitness is not just a goal — it's a lifestyle.
            Our mission is to empower individuals of all levels to achieve their health
            and wellness goals through expert guidance, modern equipment, and a motivating
            environment. Whether you're a beginner or a seasoned athlete, our certified
            trainers and personalized programs are here to help you build strength, gain
            confidence, and transform your body and mind. Join the NG Fitness family and
            take the first step towards a stronger, healthier you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second_page;
