import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaCamera,
  FaSave,
  FaTimes,
  FaUserPlus,
  FaFileAlt,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import useAxiosPublic from "../../AXIOS/useAxiosPublic";
import moment from "moment/moment";

export default function AddMember() {
  const [img, setImg] = useState(null); // Store selected image file
  const [img2, setImg2] = useState(null); // Store selected image file
  const [load, setLoad] = useState(false);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!img) {
      return alert("Please select an image to upload.");
    }
    if (!img2) {
      return alert("Please select an image to upload.");
    }

    const form = e.target;
    const data = new FormData(form); // Collect all form inputs

    // === Uploading image to Cloudinary ===
    const cloudData = new FormData();
    cloudData.append("file", img);
    cloudData.append("upload_preset", "ng_fitness_gym");
    cloudData.append("cloud_name", "dpwuivub7");
    // === Uploading image to Cloudinary ===
    const cloudData2 = new FormData();
    cloudData2.append("file", img2);
    cloudData2.append("upload_preset", "ng_fitness_gym");
    cloudData2.append("cloud_name", "dpwuivub7");

    try {
      setLoad(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpwuivub7/image/upload",
        cloudData
      );
      const imageUrl = response.data.secure_url; // ✅ Get uploaded image URL
      const response2 = await axios.post(
        "https://api.cloudinary.com/v1_1/dpwuivub7/image/upload",
        cloudData2
      );
      const imageUrl2 = response2.data.secure_url; // ✅ Get uploaded image URL
      setLoad(false);
      // console.log(imageUrl, "1111");
      // console.log(imageUrl2, "2222");
      // === Prepare the final form data ===
      const formData = {
        name: data.get("name"),
        serial: data.get("serial"),
        phone: data.get("phone"),
        address: data.get("address"),
        responsiblePerson: data.get("responsiblePerson"),
        responsiblePersonNumber: data.get("responsiblePersonNumber"),
        memberPhotoUrl: imageUrl, // ✅ Cloudinary image URL
        memberSheet:
          imageUrl2 ||
          "https://res.cloudinary.com/dpwuivub7/image/upload/v1751990015/wzoeti7r7k55eoplc9pj.avif",
        admiteDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
        payments: [],
        active: "yes",
      };
      console.log(formData);

      mutationUP.mutate(formData);

      // ✅ You can now send this `formData` to your database or server
      // console.log("Final Form Data:", formData);
      // toast("Member added successfully!");

      form.reset(); // Optional: Reset the form after submission
      setImg(null); // Reset the image state
    } catch (error) {
      console.error("Upload error:", error);
      toast("Image upload failed.");
    }
  };
  const axiosPub = useAxiosPublic();
    const {data : serialNumber = [],refetch} = useQuery({
    queryKey : ["serialnumber"],
    queryFn : async()=> {
      const res = await axiosPub.get("/serialNum");
      return res.data;
    }
  })

  // tanstack query post
  const mutationUP = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosPub.post("/allmembar", formData);
      return res.data;
    },
    onSuccess: () => {
      refetch()
      toast.success("New Membar Added !.");
    },
  });



  console.log(serialNumber[0]?.serial, "serial");





  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FaUserPlus className="w-6 h-6 text-white" />
            </div>
            <ToastContainer></ToastContainer>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Add New Member
              </h1>
              <p className="text-gray-600 text-base">
                Fill in the member details below
              </p>
              <p className="text-gray-600 text-base">
                Last Serial Number : <span className="text-black text-xl font-extrabold">{serialNumber[0]?.serial}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="space-y-6">
            {/* serial */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2" />
                Serial Number *
              </label>
              <input
                type="text"
                name="serial"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Give serial number any"
              />
            </div>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Enter full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="+8801XXXXXXXXX"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                placeholder="Enter complete address"
              ></textarea>
            </div>

            {/* Responsible Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaUserTie className="inline mr-2" />
                  Responsible Person
                </label>
                <input
                  type="text"
                  name="responsiblePerson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaPhone className="inline mr-2" />
                  Responsible Person Number
                </label>
                <input
                  type="tel"
                  name="responsiblePersonNumber"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="+8801XXXXXXXXX"
                />
              </div>
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCamera className="inline mr-2" />
                  Member Photo *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setImg(e.target.files[0])} // ✅ Fixed: handle image input properly
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              {/* Document Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaFileAlt className="inline mr-2" />
                  Member Sheet
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg2(e.target.files[0])}
                  name="memberSheet"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          {load ? (
            <>
              <div className="flex flex-cTol sm:flex-row gap-4 mt-8">
                <div className="flex justify-center items-center ">
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2"
                >
                  <FaSave className="w-5 h-5" />
                  <span>Save Member</span>
                </button>
              </div>
            </>
          )}
        </form>

        {/* Notes */}
        <div className="bg-blue-50 rounded-lg p-4 mt-6">
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            Important Notes:
          </h3>
          <ul className="text-sm text-blue-800 list-disc ml-5 space-y-1">
            <li>Only Name, Phone Number, and Member Photo are required</li>
            <li>
              Member photo helps with identification (uploaded to Cloudinary)
            </li>
            <li>Member sheet is optional and stored as a file name for now</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
