import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Briefcase, Book, Settings, Phone, LogOut, Image, TvMinimal, Network } from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { FaPeopleGroup } from "react-icons/fa6";
import config from "@/config";

const Sidebar = () => {
  const { logout } = useAdminAuth();

  const redirectToLeadManagement = async () => {
    const res = await fetch(config.API_URL + "/sso/create-token", {
      method: "POST",
    });

    const { token } = await res.json();

    const ssoUrl = `http://localhost:3001/sso?token=${token}`;
    
    // Open in new tab
    window.open(ssoUrl, "_blank", "noopener,noreferrer");
  };


  return (
    <aside className="w-64 min-h-screen bg-[#1F2937] text-white flex flex-col p-6 fixed left-0 top-0">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-4 text-center">Aarti Educare</h1>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <NavItem to="/admin-dashboard" icon={<LayoutGrid size={20} />} label="Dashboard" />
        <NavItem to="/admin-exam-management" icon={<Settings size={20} />} label="Exam Management" />
        <NavItem to="/admin-student-management" icon={<FaPeopleGroup size={20} />} label="Students" />
        <NavItem to="/admin-services" icon={<Briefcase size={20} />} label="Services" />
        <NavItem to="/admin-training-centers" icon={<TvMinimal size={20} />} label="Training Centers" />
        <NavItem to="/admin-schemes" icon={<Settings size={20} />} label="Schemes" />
        <NavItem to="/admin-courses" icon={<Book size={20} />} label="Courses" />
        <NavItem to="/admin-inquiries" icon={<Phone size={20} />} label="Inquiries" />
        <NavItem to="/admin-gallery" icon={<Image size={20} />} label="Gallery" />
        <NavItem to="/admin-banners" icon={<Image size={20} />} label="Banners" />
        <NavItem to="/admin-logos" icon={<Image size={20} />} label="Partner Logos" />
        <NavItem to="/admin-settings" icon={<Settings size={20} />} label="Settings" />
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
            mt-auto
          "
        >
          <Network size={20} className="shrink-0" />
          <span className="text-sm">Lead Management</span>
        </button>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-3 p-3 bg-red-600 rounded-xl transition hover:bg-red-700 mt-auto"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

/* Nav Item Component */
const NavItem = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition"
    >
      {icon} <span>{label}</span>
    </Link>
  );
};

export default Sidebar;