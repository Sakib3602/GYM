"use client"

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
} from "react-icons/fa"
import { useState } from "react"

export default function AddMember() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    responsiblePerson: "",
    responsiblePersonNumber: "",
    memberPhoto: null,
    memberSheet: null,
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FaUserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Add New Member</h1>
              <p className="text-gray-600 text-sm sm:text-base">Fill in the member details below</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
          {/* Form Fields */}
          <div className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                <FaUser className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Enter member's full name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                <FaPhone className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                <FaMapMarkerAlt className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base resize-none"
                placeholder="Enter complete address"
              ></textarea>
            </div>

            {/* Responsible Person Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Responsible Person Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                  <FaUserTie className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Responsible Person
                </label>
                <input
                  type="text"
                  name="responsiblePerson"
                  value={formData.responsiblePerson}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Emergency contact name"
                />
              </div>

              {/* Responsible Person Number */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                  <FaPhone className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Responsible Person Number
                </label>
                <input
                  type="tel"
                  name="responsiblePersonNumber"
                  value={formData.responsiblePersonNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>

            {/* File Upload Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Member Photo Upload */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                  <FaCamera className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Member Photo
                </label>
                <input
                  type="file"
                  name="memberPhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-2">JPG, PNG or GIF (max. 5MB)</p>
              </div>

              {/* Member Sheet Upload */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                  <FaFileAlt className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Member Sheet
                </label>
                <input
                  type="file"
                  name="memberSheet"
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-2">PDF, DOC, DOCX or Image (max. 10MB)</p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              type="submit"
              className="flex-1 sm:flex-none sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <FaSave className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Save Member</span>
            </button>
            <button
              type="button"
              className="flex-1 sm:flex-none sm:px-8 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Cancel</span>
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">
          <h3 className="text-sm sm:text-base font-medium text-blue-900 mb-2">Important Notes:</h3>
          <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
            <li>• Only Name and Phone Number are required fields</li>
            <li>• Member photo helps with identification</li>
            <li>• Member sheet can include registration forms, medical info, etc.</li>
            <li>• Responsible person details are for emergency contact</li>
            <li>• All other fields are optional but recommended</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
