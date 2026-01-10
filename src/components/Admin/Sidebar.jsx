import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutGrid, Briefcase, Book, Settings, Phone, 
  LogOut, Image, TvMinimal, Network, ChevronDown, ChevronRight, 
  BriefcaseBusiness
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { FaPeopleGroup } from "react-icons/fa6";
import config from "@/config";

const Sidebar = () => {
  const { logout } = useAdminAuth();

  const redirectToLeadManagement = async () => {
    try {
      const res = await fetch(config.API_URL + "/sso/create-token", {
        method: "POST",
      });
      const { token } = await res.json();
      window.open(`https://leads.aartieducare.com/sso?token=${token}`, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("SSO redirect failed", err);
    }
  };

  return (
    <aside className="w-64 min-h-screen bg-[#1F2937] text-white flex flex-col p-6 fixed left-0 top-0 overflow-y-auto">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">Aarti Educare</h1>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 flex-grow">
        <NavItem to="/admin-dashboard" icon={<LayoutGrid size={20} />} label="Dashboard" />
        <NavItem to="/admin-exam-management" icon={<Settings size={20} />} label="Exam Management" />
        <NavItem to="/admin-student-management" icon={<FaPeopleGroup size={20} />} label="Students" />
        <NavItem to="/admin-services" icon={<Briefcase size={20} />} label="Services" />
        <NavItem to="/admin-training-centers" icon={<TvMinimal size={20} />} label="Training Centers" />
        {/* <NavItem to="/admin-schemes" icon={<Settings size={20} />} label="Schemes" /> */}
        <NavItem to="/admin-courses" icon={<Book size={20} />} label="Courses" />
        <NavItem to="/admin-inquiries" icon={<Phone size={20} />} label="Enquiries" />
        <NavItem to="/admin-zed-enquiries" icon={<BriefcaseBusiness size={20} />} label="ZED Enquiries" />
        
        {/* MEDIA MANAGEMENT DROPDOWN */}
        <NavDropdown 
          icon={<Image size={20} />} 
          label="Media Management"
        >
          <DropdownItem to="/admin-gallery" label="Gallery" />
          <DropdownItem to="/admin-banners" label="Banners" />
          <DropdownItem to="/admin-logos" label="Partner Logos" />
        </NavDropdown>

        <NavItem to="/admin-settings" icon={<Settings size={20} />} label="Settings" />
      </nav>

      <div className="mt-auto space-y-4 pt-4 border-t border-gray-700">
        {/* Lead Management System */}
        <button
          onClick={redirectToLeadManagement}
          className="
            flex items-center gap-3 w-full px-4 py-3
            rounded-xl
            bg-blue-600 text-white
            font-medium
            transition-all duration-200
            hover:bg-white hover:text-blue-600
            hover:shadow-md
            active:scale-[0.98]
          "
        >
          <Network size={20} className="shrink-0" />
          <span className="text-sm">Lead Management</span>
        </button>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center w-full space-x-3 p-3 bg-red-600 rounded-xl transition hover:bg-red-700 justify-center"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

/* --- Helper Components --- */

const NavItem = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
        isActive ? "bg-gray-700 text-white font-medium" : "hover:bg-gray-800 text-gray-300"
      }`}
    >
      {icon} <span>{label}</span>
    </Link>
  );
};

const NavDropdown = ({ icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-open if a child link is active
  const isActiveParent = React.Children.toArray(children).some(
    (child) => child.props.to === location.pathname
  );

  // Initialize open state based on active route
  React.useEffect(() => {
    if (isActiveParent) setIsOpen(true);
  }, [isActiveParent]);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between p-3 rounded-lg transition-colors w-full text-left ${
          isActiveParent || isOpen ? "bg-gray-800 text-white" : "hover:bg-gray-800 text-gray-300"
        }`}
      >
        <div className="flex items-center space-x-3">
          {icon} <span>{label}</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {isOpen && (
        <div className="ml-9 mt-1 space-y-1 border-l border-gray-600 pl-2">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block p-2 text-sm rounded-md transition-colors ${
        isActive ? "text-white font-medium bg-gray-700" : "text-gray-400 hover:text-white hover:bg-gray-700"
      }`}
    >
      {label}
    </Link>
  );
};

export default Sidebar;