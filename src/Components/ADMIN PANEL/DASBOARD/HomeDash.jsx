import { useContext, useState } from "react";
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
} from "react-icons/fa";
// import xx from "../../../assets/logo_ng.jpg"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
// import { useNavigate } from "react-router";
import { AuthContext } from "../../logreg/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AXIOS/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";

export default function HomeDash() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { out} = useContext(AuthContext);
  const x = () => {
    out()
      .then(() => {
        // toast.success("log Out Done")
        // alert("Log out successful!");
        // setTimeout(() => navigate("/"), 1000);
        navigate("/"); // Navigate to home after logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  // Sidebar navigation links
  const links = [
    { to: "/admin", icon: <FaHome />, text: "Dashboard" },
    { to: "/admin/mamber", icon: <FaUsers />, text: "Members" },
    { to: "/admin/d", icon: <FaDumbbell />, text: "Deactive Members" },
    { to: "/admin/add", icon: <FaUserTie />, text: "Add Memeber" },
    { to: "/admin/due", icon: <FaTools />, text: "Due Members" },
    { to: "/admin/reports", icon: <FaClipboardList />, text: "Complaines" },
    { to: "#", icon: <FaSignOutAlt />, text: "Log Out" }, // We'll handle this separately
  ];
  // console.log(person);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["dash"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allmembar");
      return res.data;
    },
  });

  const active = data?.filter((m) => m?.active === "yes") || [];
  
  const dactive = data?.filter((m) => m?.active === "no") || [];


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <ToastContainer></ToastContainer>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 w-64 min-h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 lg:static`}
      >
        {/* Header Section */}
        <div className="p-5 flex items-center justify-between border-b">
          <Link
            to="/"
            className="hidden lg:flex items-center justify-center w-full"
          >
            <div className="h-12 px-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              NG FITNESS GYM
            </div>
          </Link>
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600 hover:text-red-500 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-6 space-y-2">
          {links.map((link, index) => {
            const isLogout = link.text === "Log Out";

            return (
              <NavLink
                key={index}
                to={isLogout ? "/" : link.to}
                end
                onClick={() => {
                  setIsOpen(false);
                  if (isLogout) x();
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 
            ${
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
            }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="tracking-wide">{link.text}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={20} />
          </button>
          <Link to={"/"}>
            {" "}
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          </Link>
          <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
            NG
          </div>
        </div>

        {/* Dashboard welcome banner (only on /admin route) */}
        {location.pathname === "/admin" && (
          <div className="m-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 text-white w-full">
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

        {/* Dashboard cards */}
        {location.pathname === "/admin" && (
          <div className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-blue-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Active Members
                </h2>
                <p className="text-3xl font-bold text-blue-600">{active?.length}</p>
              </div>

              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-black-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Deactivate Complaints
                </h2>
                <p className="text-3xl font-bold text-red-600">{dactive?.length}</p>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-red-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Complaints
                </h2>
                <p className="text-3xl font-bold text-red-600"></p>
              </div>

              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-green-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Reviews
                </h2>
                <p className="text-3xl font-bold text-green-600">85</p>
              </div>
            </div>
          </div>
        )}

        {/* Nested route content will load here */}
        <div className="p-2">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}
