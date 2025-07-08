

import { FaUser, FaPhone, FaMapMarkerAlt, FaUserTie, FaRuler, FaWeight, FaArrowLeft } from "react-icons/fa"
import useAxiosSecure from "../../../AXIOS/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function Single_details() {

    const axiosSecure = useAxiosSecure();
    const params = useParams();
    

    const {data,isLoading} = useQuery({
        queryKey : ["single_details"],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/allmembar/${params.id}`)
            return res.data;
        }

    })
    console.log(data,"data");


    const height= 0;
    const weight= 0;
    const age= 0;
    const blood= "non";






  // Sample user data
  const userData = {
    name: data?.name,
    address: data?.address,
    phone: data?.phone,
    responsiblePersonName: data?.responsiblePerson,
    responsiblePersonNumber: data?.responsiblePersonNumber,
    profilePhoto: data?.memberPhotoUrl,
    physicalFormPhoto: data?.memberSheet,
    physicalData: {
      height: height,
      weight: weight,
      age: age,
      bloodType: blood,
      fitnessLevel: "Intermediate",
      joinDate: data?.admiteDate,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Member Details</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Complete member information</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Profile Photo */}
              <div className="aspect-square w-full relative">
                <img
                  src={userData.profilePhoto || "/placeholder.svg"}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Profile Info */}
              <div className="p-4 sm:p-6">
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{userData.name}</h2>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Active Member
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Name */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaUser className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                      Full Name
                    </h4>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">{userData.name}</p>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                      Phone Number
                    </h4>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">{userData.phone}</p>
                </div>

                {/* Address */}
                <div className="group sm:col-span-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">Address</h4>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13 leading-relaxed">
                    {userData.address}
                  </p>
                </div>

                {/* Responsible Person */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaUserTie className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                      Emergency Contact
                    </h4>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">
                    {userData.responsiblePersonName}
                  </p>
                </div>

                {/* Responsible Person Number */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                      Emergency Phone
                    </h4>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">
                    {userData.responsiblePersonNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Form Data */}
        <div className="mt-6 sm:mt-8 lg:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Physical Stats */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <FaRuler className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Physical Information</h3>
                    <p className="text-sm sm:text-base text-gray-600">Body measurements and fitness data</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {/* Height */}
                  <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
                    <FaRuler className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.height}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Height</p>
                  </div>

                  {/* Weight */}
                  <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl">
                    <FaWeight className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.weight}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Weight</p>
                  </div>

                  {/* Age */}
                  <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-xl">
                    <FaUser className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.age}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Age</p>
                  </div>

                  {/* Blood Type */}
                  <div className="text-center p-4 sm:p-6 bg-red-50 rounded-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">B</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.bloodType}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Blood Type</p>
                  </div>

                  {/* Fitness Level */}
                  <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">F</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.fitnessLevel}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Fitness Level</p>
                  </div>

                  {/* Join Date */}
                  <div className="text-center p-4 sm:p-6 bg-indigo-50 rounded-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">J</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{userData.physicalData.joinDate}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Join Date</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Form Photo */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">Physical Form</h4>
                  <p className="text-sm text-gray-600">Body assessment photo</p>
                </div>
                <div className="aspect-[3/4] w-full">
                  <img
                    src={userData.physicalFormPhoto || "/placeholder.svg"}
                    alt="Physical Form"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
