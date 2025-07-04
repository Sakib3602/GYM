import { useState } from "react";

import {
  FaUsers,
  FaDumbbell,
  FaUserTie,
  FaTools,
  FaClipboardList,
  FaSignOutAlt,
  FaHome,
  FaBars,
  FaTimes,
  FaBell,
} from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router";

export default function HomeDash() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/admin", icon: <FaHome />, text: "Dashboard" },
    { to: "/admin/mamber", icon: <FaUsers />, text: "Members" },
    { to: "/admin/classes", icon: <FaDumbbell />, text: "Classes" },
    { to: "/admin/add", icon: <FaUserTie />, text: "Add Memeber" },
    { to: "/admin/equipment", icon: <FaTools />, text: "Equipment" },
    { to: "/admin/reports", icon: <FaClipboardList />, text: "Reports" },
    { to: "#", icon: <FaSignOutAlt />, text: "Log Out" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 w-64 min-h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="p-5  flex items-center justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="px-5 py-4 border-b hidden lg:flex items-center justify-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
            NG
          </div>
        </div>

        <nav className="px-5 py-4 space-y-2">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              end
              onClick={() => setIsOpen(false)} // close sidebar on mobile after click
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                }`
              }
            >
              <span className="text-lg">{link.icon}</span>
              {link.text}
            </NavLink>
          ))}
        </nav>

        
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
            NG
          </div>
        </div>

        {location.pathname === "/admin" && (
          <div className="m-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
                    Welcome back, Nitto!
                  </h1>
                  <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">
                    Here's a quick overview of your gym today
                  </p>
                  <p className="text-blue-200 text-xs sm:text-sm md:text-base">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {location.pathname === "/admin" && (
          <div className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Total Members Card */}
              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-blue-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Members
                </h2>
                <p className="text-3xl font-bold text-blue-600">150</p>
              </div>

              {/* Total Complaints Card */}
              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-red-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Complaints
                </h2>
                <p className="text-3xl font-bold text-red-600">7</p>
              </div>

              {/* Total Reviews Card */}
              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-green-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Reviews
                </h2>
                <p className="text-3xl font-bold text-green-600">85</p>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="p-2">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}
