import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../AXIOS/useAxiosPublic";
import { Link } from "react-router";
import { Phone } from "lucide-react";

const AllMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(null); // null means show all members
  const axiosPub = useAxiosPublic();

  // Fetch all members from the server
  const { data: members = [], isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosPub.get("/allmembar");
      return res.data;
    },
  });
  console.log(members)

   useEffect(() => {
  if (!searchTerm.trim()) {
    setFilteredMembers(null); // Show all data
  }
}, [searchTerm]);
  // Fuse.js search handler
  const handleSearch = () => {
   

    const fuse = new Fuse(members, {
      keys: ["name", "phone"], // searchable fields
      threshold: 0.3,
    });

    const results = fuse.search(searchTerm);
    const matched = results.map((r) => r.item);
    setFilteredMembers(matched);
  };

  if (isLoading) return <h2 className="text-center text-xl">Loading...</h2>;

  const dataToShow = filteredMembers || members;

  return (
    <div className="p-5">
      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-lg outline-none text-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataToShow.map((member) => (
          <Link to={`/admin/membar/${member._id}`}>
          
          <div className="group relative w-full max-w-xs mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-200">
            {/* Image Container with Hover Effect */}
            <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl">
              <img
                src={
                  member?.memberPhotoUrl || "/placeholder.svg?height=200&width=200&query=person"
                }
                // alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
                crossOrigin="anonymous"
              />
              {/* Subtle overlay on image hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member?.name}
              </h3>

              {/* Number */}
              <div className="flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-lg font-medium">{member?.phone}</span>
              </div>
            </div>

            {/* Animated Border Bottom on Card Hover */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllMembers;


