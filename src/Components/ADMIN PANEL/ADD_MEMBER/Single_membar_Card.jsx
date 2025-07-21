"use client";

import { useQuery } from "@tanstack/react-query";
import { FaPhone, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../AXIOS/useAxiosSecure";
import moment from "moment/moment";
import { Link } from "react-router";
import Loader from "../../Loader/Loader";

export default function Single_membar_Card() {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["allmember"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allmembar");
      return res.data;
    },
  });

  console.log(data);

  const admissionDate = moment("2025-01-12", "YYYY-MM-DD");
  const current = moment();
  const running = current.diff(admissionDate, "month") + 1;

  const minus = running - 2;
  console.log(minus, " sub");

  return isLoading ? (
   <Loader></Loader>
  ) : (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Gym Members
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Meet our amazing community of fitness enthusiasts
          </p>
        </div>
        <div>
          
<form className="px-4 w-full  mb-10">
  <label
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    for="default-search"
    >Search</label
  >
  <div className="relative">
    <div
      className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
      >
        <path
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
        ></path>
      </svg>
    </div>
    <input
      required=""
      placeholder="Search"
      className="block w-full p-4 py-5 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="default-search"
      type="search"
    />
    <button
      className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-4 h-4"
      >
        <path
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
        ></path>
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </div>
</form>

        </div>

        {/* Member Cards Grid */}
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {data.map((member) => (
              <Link to={`/admin/membar/${member._id}`}>

              <div
                key={member.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                  <div className="aspect-square w-full">
                    <img
                      src={member.memberPhotoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                          <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-4 sm:p-6">
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <FaPhone className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm sm:text-base">
                        {member.phone}
                      </span>
                    </div>
                  </div>

                  {/* Hover Border Bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
              
              </Link>
            ))}
          </div>
       
      </div>
    </div>
  );
}
