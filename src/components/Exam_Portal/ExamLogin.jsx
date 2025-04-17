import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../assets/exam.json";
import UniversityLogo from "../../assets/logo_horizontal.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useExamAuth } from "../context/ExamAuthContext";
import config from "@/config";
const API_URL = config.API_URL;

export default function ExamLogin() {
  const navigate = useNavigate();
  const { login } = useExamAuth();
  const [loginCredentials, setLoginCredentails] = useState({
    username: "",
    password: "",
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${API_URL}/exams/students/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginCredentials),
        });
    
        const data = await response.json(); 
        const studentId = data.studentId;
    
        if (response.ok) {
          // Handle success response
          login();
          navigate(`/online-examination/Dashboard/${studentId}`, {state: {studentId}});
          
        } else {
          console.error('Error Logging:', data.message);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    
  }

  return (
    <div className="min-h-screen flex font-nunito relative overflow-hidden">
      {/* Background blob animation */}
      <svg
        className="absolute top-[-100px] left-[-100px] w-[800px] h-[800px] opacity-20 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#3B82F6"
          d="M40.2,-63.6C52.8,-53.5,63.7,-43,68.7,-30.6C73.7,-18.1,72.7,-3.8,68.3,9.8C63.8,23.4,55.9,36.3,45.4,45.9C34.9,55.6,21.9,62.1,8.1,66.3C-5.7,70.5,-19.3,72.4,-30.9,66.8C-42.5,61.2,-52,48,-59.7,34.3C-67.4,20.7,-73.2,6.4,-72.7,-8.4C-72.1,-23.2,-65.2,-38.5,-54.6,-50.2C-44,-61.9,-30,-70,-15,-74.7C0,-79.3,15,-80.5,27.6,-74.2C40.2,-68,50.6,-54.4,40.2,-63.6Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 justify-center items-center z-10">
        <div className="w-[80%]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 z-10">
        <div className="w-full max-w-md relative">
          {/* University Crest */}
          <div className="flex justify-center mb-8">
            <img
              src={UniversityLogo}
              alt="Aarti Educare Logo"
              className="h-40 object-contain"
            />
          </div>

          {/* Form Card */}
          <div className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md mx-auto transition-all">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
              🎓 Student Login
            </h2>

            <form className="space-y-6" onSubmit={handleLogin}>
  {/* Email Field */}
  <div className="relative z-0 w-full group">
    <input
      type="text"
      name="username"
      id="username"
      value={loginCredentials.username}
      onChange={(e) =>
        setLoginCredentails({ ...loginCredentials, username: e.target.value })
      }
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 pt-4 pb-1.5 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 transition-all"
      placeholder=" "
      required
    />
    <label
      htmlFor="username"
      className="absolute top-2 left-0 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
    >
      Username
    </label>
  </div>

  {/* Password Field */}
  <div className="relative z-0 w-full group mt-6">
    <input
      type="password"
      name="password"
      id="password"
      value={loginCredentials.password}
      onChange={(e) =>
        setLoginCredentails({ ...loginCredentials, password: e.target.value })
      }
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 pt-4 pb-1.5 text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0 transition-all"
      placeholder=" "
      required
    />
    <label
      htmlFor="password"
      className="absolute top-2 left-0 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600"
    >
      Password
    </label>
  </div>

  {/* Login Button */}
  <button
    type="submit"
    className="w-full mt-4 py-3 rounded-xl font-bold text-white text-lg tracking-wide shadow-md transition-all bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
  >
    Login
  </button>
</form>


            {/* Footer Text */}
            <p className="text-sm text-center mt-6 text-gray-500 font-medium">
              Access your exams using your student credentials.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Aarti Educare Exam Portal. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
