import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBell } from "react-icons/fa";

export default function ExamNavbar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 w-full fixed top-0 left-0 z-10 shadow-lg">
      <div className="flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">
            <FaHome />
            <span className="ml-2">Home</span>
          </Link>
          <Link to="/profile" className="text-xl font-semibold">
            <FaUser />
            <span className="ml-2">Profile</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/notifications" className="text-xl">
            <FaBell />
          </Link>
          <Link to="/login" className="text-xl font-semibold">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
