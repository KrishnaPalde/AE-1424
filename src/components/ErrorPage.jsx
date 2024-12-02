import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
        <p className="text-lg text-gray-600">
          {error?.statusText || "Something went wrong."}
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-[#e67e23] rounded-lg shadow-md hover:bg-[#c75f12] transition-all duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
