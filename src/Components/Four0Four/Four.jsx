

import { useEffect, useState } from "react"
import { Home } from "lucide-react" // Lucide icon for the home button
import { Link } from "react-router"

export default function Four() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse movement for subtle parallax effect on background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* Animated Background Orbs/Blobs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-10 blur-3xl animate-float-1"
        style={{
          top: "10%",
          left: "15%",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      ></div>
      <div
        className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full opacity-10 blur-3xl animate-float-2"
        style={{
          bottom: "15%",
          right: "10%",
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        }}
      ></div>
      <div
        className="absolute w-72 h-72 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-8 blur-2xl animate-float-3"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>

      {/* Subtle Noise Overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-8xl sm:text-9xl lg:text-[10rem] font-extrabold leading-none mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-slow">
            404
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">Page Not Found</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to={"/"}
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        >
          <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
          <span>Go to Homepage</span>
        </Link>
      </div>

      {/* Tailwind CSS Keyframes for Animations */}
      <style jsx global>{`
        @keyframes float-1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 10px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float-2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-25px, 15px) scale(0.95); }
          66% { transform: translate(10px, -20px) scale(1.02); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float-3 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, 25px) scale(1.03); }
          66% { transform: translate(-10px, -15px) scale(0.97); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float-1 { animation: float-1 10s infinite ease-in-out; }
        .animate-float-2 { animation: float-2 12s infinite ease-in-out; animation-delay: 2s; }
        .animate-float-3 { animation: float-3 9s infinite ease-in-out; animation-delay: 4s; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

        /* Remove scrollbars */
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
