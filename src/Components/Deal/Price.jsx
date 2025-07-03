import { TiTick } from "react-icons/ti";
import { Link } from "react-router";

const Price = () => {
  return (
    <div id="price" className="bg-[#0a1231] min-h-screen">
      <h1 className="text-[56px] text-center pt-10 text-[#FFE379] font-[700]">
        OUR PACKAGES
      </h1>
      <div className="w-[95%] md:w-[60%] lg:w-[40%] m-auto">
        <p className="text-center text-white">
          Choose the plan that fits your goals. Whether you're just dropping in
          or staying committed, we’ve got flexible options for everyone.
        </p>
      </div>

      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          {/* Day Pass */}
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center border-2 border-[#FFE379] rounded-lg lg:mx-4 bg-[#0a1231]">
            <h2 className="text-blue-400 text-lg uppercase font-semibold">
              Day Pass
            </h2>
            <span className="text-3xl font-bold text-[#FFE379]">৳399</span>
            <p className="text-white">
              Perfect for a quick workout or trying out our gym facilities.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" /> <span>Valid for 1 day</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Access to all equipment</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Can Access the locker</span>
              </li>
            </ul>
            <a href="#contact">
              <Link
                to={
                  "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
                }
              >
                <button className="mt-4 px-4 py-2 font-semibold bg-[#FFE379] text-[#0A1231] rounded-lg hover:bg-transparent hover:text-[#FFE379] hover:border hover:border-[#FFE379]">
                  CONTACT NOW
                </button>
              </Link>
            </a>
          </div>

          {/* Monthly Pass */}
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center border-2 border-[#FFE379] rounded-lg lg:mx-4 bg-[#0a1231]">
            <h2 className="text-blue-400 text-lg uppercase font-semibold">
              Monthly
            </h2>
            <span className="text-3xl font-bold text-[#FFE379]">৳1000</span>
            <p className="text-white">
              Ideal for regular gym-goers who want full month access. + (৳1000
              for reg.)
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Valid for 30 days</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Unlimited sessions</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Access to trainers</span>
              </li>
            </ul>
            <a href="#contact">
              <Link  to={
                  "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
                }>
              
              <button className="mt-4 px-4 py-2 font-semibold bg-[#FFE379] text-[#0A1231] rounded-lg hover:bg-transparent hover:text-[#FFE379] hover:border hover:border-[#FFE379]">
                CONTACT NOW
              </button>
              </Link>
            </a>
          </div>

          {/* 3 Month Pass */}
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center border-2 border-[#FFE379] rounded-lg lg:mx-4 bg-[#0a1231]">
            <h2 className="text-blue-400 text-lg uppercase font-semibold">
              3 Months
            </h2>
            <span className="text-3xl font-bold text-[#FFE379]">৳4000</span>
            <p className="text-white">
              Best value package for dedicated fitness lovers. Includes
              registration.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Valid for 90 days</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>One-time registration included</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FFE379]">
                <TiTick className="text-[20px]" />{" "}
                <span>Access to all programs</span>
              </li>
            </ul>
            <a href="#contact">
              <Link  to={
                  "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
                }>
              
              <button className="mt-4 px-4 py-2 font-semibold bg-[#FFE379] text-[#0A1231] rounded-lg hover:bg-transparent hover:text-[#FFE379] hover:border hover:border-[#FFE379]">
                CONTACT NOW
              </button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
