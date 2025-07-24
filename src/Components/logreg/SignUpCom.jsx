import { AuthContext } from "../logreg/AuthProvider";
import { useContext, useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
// import auth from './firebase.init';

export default function SignUpCom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signUp,person } = useContext(AuthContext);
  console.log(person)

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Email: ${email}\nPassword: ${password}`);

    console.log(email, password);

    signUp(email, password)
      .then(() => {
        toast.success('Successfully Login!')
        navigate("/admin");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Login Done");
        } else {
          alert("Error: " + error.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden px-4">
      {/* Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse-slow top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse-slow bottom-10 right-10"></div>

      {/* Sign Up Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Hello, Nitto Biswas
        </h2>

        {/* Email Field */}
        <div className="relative mb-5">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       <ToastContainer></ToastContainer>

        {/* Password Field */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
        >
          Sign In
        </button>
       <Link to={"/"}> <h1 className="underline mt-2">Back To Home</h1></Link>
      </form>

      {/* Tailwind Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s infinite;
        }
      `}</style>
    </div>
  );
}
