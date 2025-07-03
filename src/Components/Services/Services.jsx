import React from "react";

const Services = () => {
  return (
    <div id="ss" className="h-full py-10 lg:px-20 bg-[#F3F4F6]">
      <div className="pb-5 text-center text-5xl md:text-7xl poppins-bold text-shadow-lg text-[#7F22FE]">
        OUR SERVICES
      </div>
      <div className="w-full flex justify-center">
        <div className="text-center max-w-xl text-base md:text-lg text-gray-800 px-4 md:px-0">
          At NG Fitness, we offer expert training, personalized plans, group
          workouts, modern equipment, and nutrition support — everything you
          need to stay fit, healthy, and motivated every day.
        </div>
      </div>
      <hr className="my-6 border-[#7F22FE] w-[90%] mx-auto" />
      {/* <hr className="pb-6 pt-6 " /> */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        <li className="poppins-medium " data-aos="fade-left">
          <div className="timeline-middle">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Service 1</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Personal Training
            </div>
            Get one-on-one coaching from certified trainers tailored to your
            fitness goals and body type.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Service 2</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Group Cardio
            </div>
            On every Wednesday we organize a group cardio class from 6:00 PM.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-left">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Service 3</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Modern Gym Equipment
            </div>
            Access a wide range of professional-grade cardio, strength, and
            functional fitness machines.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Service 4</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Nutrition & Diet Plans
            </div>
            Get personalized meal plans and guidance from our certified
            nutrition experts.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-left">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Service 5</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Weight Loss Programs
            </div>
            Join our focused programs designed to burn fat, build lean muscle,
            and boost your metabolism.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Service 6</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Bodybuilding & Strength Coaching
            </div>
            Train like a pro with advanced strength-building routines and
            hypertrophy workouts.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-left">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Service 7</time>
            <div className="text-lg font-black text-[#7F22FE]">
              Locker Rooms & Showers
            </div>
            Clean and secure locker facilities with modern restrooms and showers
            for your convenience.
          </div>
          <hr />
        </li>

        <li className="poppins-medium" data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Service 8</time>
            <div className="text-lg font-black text-[#7F22FE]">
              24/7 Access & Support
            </div>
            Open from 5:00 AM to 12:00 AM every day — stay consistent with your
            fitness routine.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
