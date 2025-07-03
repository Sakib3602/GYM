import robin from "../../assets/robin.jpg";
import nitto from "../../assets/nitto.jpeg";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router";

const Trainers = () => {
  return (
    <div className="">
      <div className="pb-5 mt-10 text-center text-4xl md:text-6xl poppins-bold text-shadow-lg text-[#7F22FE]">
        OUR TEAM
      </div>

      {/* Description Text Centered */}
      <div className="w-full flex justify-center">
        <div className="text-center max-w-xl text-base md:text-lg text-gray-800 px-4 md:px-0">
          Our team is the best for you. Our team always look for your need. For
          Any help feel free to contact !
        </div>
      </div>

      <hr className="my-6 border-[#7F22FE] w-[90%] mx-auto" />

      {/* Trainers Section */}
      <div className="py-5 flex flex-col lg:flex-row gap-8 items-center justify-center px-4">
        <div
          data-aos="fade-up"
          className="flex flex-col max-w-sm w-full p-6 bg-[#F9FAFB] rounded-2xl shadow-md  hover:border-[0.5px] hover:border-violet-600"
        >
          <img
            src={nitto}
            alt="Nitto Biswas"
            className="object-cover h-64 rounded-md sm:h-80 w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Owner & Maneger</h2>
            <span className="block pb-2 text-sm text-gray-600">
              Nitto Biswas
            </span>
            <p className="text-sm text-gray-700">
              Nitto Biswas is the owner of NG Fitness Gym. All the thing handle
              by him. If you have any query feel free to contact any time.
            </p>
            <div className="pt-4 flex justify-start gap-4">
              <Link to={"https://www.facebook.com/ng.fit.2024"}>
                <FaFacebook className="text-blue-700 h-6 w-6" />
              </Link>
              <Link to={"https://www.instagram.com/ng_fitness_gym/"}>
                <BsInstagram className="text-pink-500 h-6 w-6" />
              </Link>

              {/* <h1 className="poppins-bold-italic text-[#7F22FE]">Phone : +880 19 9372 6235</h1> */}
            </div>
          </div>
        </div>
        {/* Robin Hasan */}
        <div
          data-aos="fade-up"
          className="flex flex-col max-w-sm w-full p-6 bg-[#F9FAFB] rounded-2xl shadow-md  hover:border-[0.5px] hover:border-violet-600"
        >
          <img
            src={robin}
            alt="Robin Hasan"
            className="object-cover h-64 rounded-md sm:h-80 w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Senior Trainer</h2>
            <span className="block pb-2 text-sm text-gray-600">
              Robin Hasan
            </span>
            <p className="text-sm text-gray-700">
              Robin Hasan, our senior trainer, brings over 10 years of
              experience in strength and weight training with expert-level
              motivation and care.
            </p>
            <div className="pt-4 flex justify-start gap-4">
              <Link to={"https://www.facebook.com/mohidul.hasan.robin"}>
                {" "}
                <FaFacebook className="text-blue-700 h-6 w-6" />
              </Link>

              {/* <BsInstagram className="text-pink-500 h-6 w-6" /> */}
            </div>
          </div>
        </div>

        {/* Nitto Biswas */}

        {/* Random */}
        <div
          data-aos="fade-up"
          className="flex flex-col max-w-sm w-full p-6 bg-[#F9FAFB] rounded-2xl shadow-md  hover:border-[0.5px] hover:border-violet-600"
        >
          <img
            src={
              "https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc="
            }
            alt="Nitto Biswas"
            className="object-cover h-64 rounded-md sm:h-80 w-full"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Training Assistant</h2>
            <span className="block pb-2 text-sm text-gray-600">
              Saidur Alom
            </span>
            <p className="text-sm text-gray-700">
              Saidur Alom specializes in cardio and endurance coaching, helping
              clients build stamina and lead healthier lifestyles.
            </p>
            <div className="pt-4 flex justify-start gap-4">
              <Link to={"https://www.facebook.com/ng.fit.2024"}>
                <FaFacebook className="text-blue-700 h-6 w-6" />
              </Link>

              {/* <BsInstagram className="text-pink-500 h-6 w-6" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
