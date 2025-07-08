import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaRuler,
  FaWeight,
  FaArrowLeft,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

import useAxiosSecure from "../../../AXIOS/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

export default function Single_details() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate, "date");
  const axiosSecure = useAxiosSecure();
  const params = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["single_details"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allmembar/${params.id}`);
      return res.data;
    },
  });
  console.log(data, "data");

  // Sample user data
  // ✅ Just added the missing membershipData block in userData

  const userData = {
    name: data?.name,
    address: data?.address,
    phone: data?.phone,
    responsiblePersonName: data?.responsiblePerson,
    responsiblePersonNumber: data?.responsiblePersonNumber,
    profilePhoto: data?.memberPhotoUrl,
    physicalFormPhoto: data?.memberSheet,

    membershipData: {
      membershipType: data?.membershipType || "N/A",
      joinDate: data?.admiteDate || "N/A",
    },

    physicalData: {
      height: data?.height || 0,
      weight: data?.weight || 0,
      age: data?.age || 0,
      bloodType: data?.blood || "Unknown",
      fitnessLevel: "NEW",
    },
  };

  //
  const pay = () => {
    const valDate = moment().format("MMMM Do YYYY, h:mm:ss a");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
         MutationUp.mutate({date : valDate})
        Swal.fire({
          title: "Payment Done!",
          text: "Your Payment Done.",
          icon: "success",
        });
      }
    });
  };

  //
  const MutationUp = useMutation({
    mutationFn: async (v) => {
      const res = await axiosSecure.patch(`/allmembar/${params?.id}`, v);
      return res.data;
    },
    
  });

  //

  return isLoading ? (
    <h1 className="text-7xl">Loading</h1>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div>
                <ToastContainer></ToastContainer>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  Member Details
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                  Complete member information
                </p>
              </div>
            </div>
            {/* <div className="flex items-center space-x-2 sm:space-x-3">
              <button >
                Edit
              </button>
            </div> */}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {userData.name}
                  </h2>
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Personal Information
                </h3>
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
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">
                    {userData.name}
                  </p>
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
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 ml-11 sm:ml-13">
                    {userData.phone}
                  </p>
                </div>

                {/* Address */}
                <div className="group sm:col-span-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                      <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide">
                      Address
                    </h4>
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
        <div className="mt-6 sm:mt-8 lg:mt-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Physical Stats */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Membership Information
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Membership details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl">
                  {/* Membership Type */}
                  <div className="text-center p-6 sm:p-8 bg-blue-50 rounded-xl">
                    <FaTrophy className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {userData.membershipData.membershipType}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      Membership Type
                    </p>
                  </div>

                  {/* Join Date */}
                  <div className="text-center p-6 sm:p-8 bg-green-50 rounded-xl">
                    <FaCalendarAlt className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3 sm:mb-4" />
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {userData.membershipData.joinDate}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      Join Date
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  {/* Pay Button */}
                  <button
                    onClick={pay}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-48 group-hover:h-48 opacity-10"></span>
                    <span className="relative z-10 tracking-wide text-lg group-hover:tracking-widest transition-all duration-300 ease-in-out">
                      💳 Pay This Month
                    </span>
                  </button>

                  {/* Date Picker */}
                  <div className="relative w-full sm:w-auto">
                    <DatePicker
                      className="rounded-[50px] bg-white shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff] p-3"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                    />
                    <button className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">Done</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Form Photo */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Physical Form
                  </h4>
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

        {/* table */}
        <div className="bg-white lg:p-10 mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {/* <th></th> */}
                  <th>Month</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-base-300">
                  {/* <th>1</th> */}
                  <th>January</th>
                  <th>27.02.2025</th>
                  <th>08.89</th>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-base-300">
                  {/* <th>2</th> */}
                  <th>Decembar</th>
                  <th>27.02.2025</th>
                  <th>08.89</th>
                </tr>
                {/* row 3 */}
                <tr className="hover:bg-base-300">
                  {/* <th>3</th> */}
                  <th>January</th>
                  <th>27.02.2025</th>
                  <th>08.89</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
