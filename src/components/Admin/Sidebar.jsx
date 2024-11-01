import React from "react";
import {
  Home,
  Image as ImageIcon,
  Users,
  Calendar,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  CirclePercent,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Gallery",
    icon: ImageIcon,
    path: "/admin-gallery",
  },
  {
    title: "Courses",
    icon: Users,
    path: "/admin-courses",
  },
  {
    title: "Training Centres",
    icon: Calendar,
    path: "/admin-training-centres",
  },
  {
    title: "Banner",
    icon: CirclePercent,
    path: "/admin-banners",
  }
];

const bottomMenuItems = [
  {
    title: "Contact Settings",
    icon: Settings,
    path: "/admin-contact-settings",
  },
];

const Sidebar = ({ currentPath }) => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-lg">
      
      <div className="flex items-center h-16 px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600"></div>
          <span className="text-xl font-bold text-gray-800">Admin Portal</span>
        </div>
      </div>

      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg transition-colors",
                currentPath === item.path
                  ? "bg-violet-700 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.title}</span>
             
            </a>
          ))}
        </div>


        <div className="space-y-1">
          {bottomMenuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.title}</span>
            </a>
          ))}

          <Link to='/' className="flex items-center w-full px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </nav>

    </div>
  );
};

export default Sidebar;
