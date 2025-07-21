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
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
// import { useNavigate } from "react-router";
import { AuthContext } from "../../logreg/AuthProvider";

export default function HomeDash() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { out, person } = useContext(AuthContext);
  const x = () => {
    out()
      .then(() => {
        alert("Log out successful!");
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
    { to: "/admin/equipment", icon: <FaTools />, text: "Equipment" },
    { to: "/admin/reports", icon: <FaClipboardList />, text: "Reports" },
    { to: "#", icon: <FaSignOutAlt />, text: "Log Out" }, // We'll handle this separately
  ];
  console.log(person);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 w-64 min-h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        {/* Close button for mobile sidebar */}
        <div className="p-5 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Logo section */}
        <div className="px-5 py-4 border-b hidden lg:flex items-center justify-center">
         <Link to={"/"}> <div className="p-8  h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
            NG FITNESS GYM
          </div></Link>
        </div>

        {/* Sidebar links */}
        <nav className="px-5 py-4 space-y-2">
          {links.map((link, index) => {
            const isLogout = link.text === "Log Out"; // Check if this is the logout item

            return (
              <NavLink
                key={index}
                to={isLogout ? "/" : link.to} // Don't navigate if it's logout
                end
                onClick={() => {
                  setIsOpen(false); // Close sidebar on mobile
                  if (isLogout) {
                    x(); // call logout only if it's the logout link
                  }
                  // if (isLogout) {
                  //   // Show confirmation alert
                  //   const confirmLogout = window.confirm(
                  //     "Are you sure you want to log out?"
                  //   );

                  //   if (confirmLogout) {
                  //     // Do actual logout logic here
                  //     console.log("User logged out");

                  //     // Example: clear token/local storage and redirect
                  //     // localStorage.removeItem("authToken");
                  //     window.location.href = "/"; // Redirect to home or login page
                  //   }
                  // }
                }}
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
                  Total Members
                </h2>
                <p className="text-3xl font-bold text-blue-600">150</p>
              </div>

              <div className="flex-1 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border-l-4 border-red-500">
                <h2 className="text-gray-600 text-sm font-semibold mb-2">
                  Total Complaints
                </h2>
                <p className="text-3xl font-bold text-red-600">7</p>
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
