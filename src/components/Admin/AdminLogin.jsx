import React from "react";
import { Eye, EyeOff, ArrowRight, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin-gallery');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-violet-600 rounded-xl"></div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Welcome
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your admin account
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative mt-1">
                  <Mail className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <Lock className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    // required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
    

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-violet-600 hover:text-violet-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-lg shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  Sign in
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>

            
           
          </div>
        </div>
      </div>

     
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 object-cover">
          <div className="w-full h-full bg-gradient-to-br from-violet-500 to-violet-800">
            <div className="flex flex-col items-start justify-center h-full px-24 space-y-8 text-white">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Manage Your Content</h3>
                <p className="text-violet-100">
                  Access your admin dashboard to manage gallery items, users,
                  and events.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Secure Access</h3>
                <p className="text-violet-100">
                  Your data is protected with enterprise-grade security.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Real-time Updates</h3>
                <p className="text-violet-100">
                  Make changes and see them reflect instantly on your website.
                </p>
              </div>
            </div>

            
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM37.656 0l8.485 8.485-1.414 1.414L36.242 0h1.414zM22.344 0L13.858 8.485 15.272 9.9l8.485-8.485h-1.414zM32.4 0l9.9 9.9-1.414 1.414L30.986 0H32.4zm-4.262 0l-9.9 9.9 1.415 1.414L29.587 0h-1.45zM27.2 0l11.314 11.314-1.414 1.414L25.786 0H27.2zm-2.06 0L13.828 11.314l1.414 1.414L27.157 0h-2.017zM22.344 0L33.657 11.314l-1.414 1.414L20.93 0h1.414zm-4.262 0L29.397 11.314l-1.414 1.414L17.67 0h.412zM16.686 0L28 11.314l-1.415 1.414L15.272 0h1.414zm-4.262 0L23.738 11.314l-1.414 1.414L11.01 0h1.414zM11.03 0l13.314 13.314-1.414 1.414L8.616 0h2.415zm-4.262 0L18.082 11.314l-1.414 1.414L6.354 0h.414zM5.373 0l11.314 11.314-1.414 1.414L3.94 0h1.433zM1.11 0l11.314 11.314-1.414 1.414L0 1.11V0h1.11z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
