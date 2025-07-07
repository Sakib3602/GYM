"use client";

import { useQuery } from "@tanstack/react-query";
import { FaPhone, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../AXIOS/useAxiosSecure";

export default function Single_membar_Card() {
    const axiosSecure = useAxiosSecure();
    const {data,isLoading} = useQuery({
        queryKey: ["allmember"],
        queryFn : async()=> {
            const res = await axiosSecure.get("/allmembar")
            return res.data
        }
    })

    console.log(data);
    
  // Updated image URL
  const imageUrl =
    "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg";

  const members = [
    { id: 1, name: "John Smith", phone: "+1 (555) 123-4567", image: imageUrl },
    { id: 2, name: "Sarah Johnson", phone: "+1 (555) 987-6543", image: imageUrl },
    { id: 3, name: "Mike Wilson", phone: "+1 (555) 456-7890", image: imageUrl },
    { id: 4, name: "Emily Davis", phone: "+1 (555) 321-0987", image: imageUrl },
    { id: 5, name: "David Brown", phone: "+1 (555) 654-3210", image: imageUrl },
    { id: 6, name: "Lisa Anderson", phone: "+1 (555) 789-0123", image: imageUrl },
  ];
  

  return  isLoading ? <h1 className="text-6xl">loading</h1> : (
   
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

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <div className="aspect-square w-full">
                  <img
                    src={member.image}
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
                    <span className="text-sm sm:text-base">{member.phone}</span>
                  </div>
                </div>

                {/* Hover Border Bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>

              {/* Floating Button on Hover */}
              <div className="absolute top-4 right-4 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <FaPhone className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
