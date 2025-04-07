import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Briefcase, Book, Settings, Phone, LogOut, Image, TvMinimal } from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";

const Sidebar = () => {
  const { logout } = useAdminAuth();

  return (
    <aside className="w-64 min-h-screen bg-[#1F2937] text-white flex flex-col p-6 fixed left-0 top-0">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <NavItem to="/admin-dashboard" icon={<LayoutGrid size={20} />} label="Dashboard" />
        <NavItem to="/admin-services" icon={<Briefcase size={20} />} label="Services" />
        <NavItem to="/admin-training-centers" icon={<TvMinimal size={20} />} label="Training Centers" />
        <NavItem to="/admin-schemes" icon={<Settings size={20} />} label="Schemes" />
        <NavItem to="/admin-courses" icon={<Book size={20} />} label="Courses" />
        <NavItem to="/admin-inquiries" icon={<Phone size={20} />} label="Inquiries" />
        <NavItem to="/admin-gallery" icon={<Image size={20} />} label="Gallery" />
        <NavItem to="/admin-banners" icon={<Image size={20} />} label="Banners" />
        <NavItem to="/admin-logos" icon={<Image size={20} />} label="Partner Logos" />
        <NavItem to="/admin-settings" icon={<Settings size={20} />} label="Settings" />

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-3 p-3 bg-red-600 rounded-lg transition hover:bg-red-700 mt-auto"
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