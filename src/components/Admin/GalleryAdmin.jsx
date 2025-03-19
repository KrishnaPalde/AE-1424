import React from "react";
import { PlusCircle, Search, Edit3, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PageWrapper from "../PageWrapper";
import AdminSidebar from "./Sidebar";

const GalleryAdmin = () => {
  return (
      <div className="flex bg-gray-50 min-h-screen transition-all duration-300 ease-in-out">
        {/* Sidebar */}
        <AdminSidebar currentPath="/admin/gallery" />

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8 transition-all duration-300 ease-in-out">
          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900 transition-all duration-300 ease-in-out">
              Gallery Management
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#e67e23] to-[#d77a1f] rounded-lg hover:from-[#d77a1f] hover:to-[#e67e23] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Add New Item
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] bg-white transition-transform transform">
                <DialogHeader>
                  <DialogTitle>Add Gallery Item</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out">
                      <option value="workshops">Workshops</option>
                      <option value="events">Events</option>
                      <option value="students">Students</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
                      rows="3"
                      placeholder="Enter description"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Image</label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-4">
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 ease-in-out">
                      Cancel
                    </button>
                  </DialogTrigger>
                  <button className="px-4 py-2 text-white bg-[#e67e23] rounded-lg hover:bg-[#d77a1f] transition-all duration-300 ease-in-out">
                    Save
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </header>

          {/* Search and Filters */}
          <Card className="mb-8 shadow-lg transition-all duration-300 ease-in-out">
            <CardContent className="flex items-center justify-between p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="relative w-1/2">
                <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search gallery items..."
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
                />
              </div>
              <select className="px-8 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] transition-all duration-300 ease-in-out">
                <option value="">All Categories</option>
                <option value="workshops">Workshops</option>
                <option value="events">Events</option>
                <option value="students">Students</option>
              </select>
            </CardContent>
          </Card>

          {/* Gallery Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src="https://picsum.photos/200/300"
                  alt="Gallery item"
                  className="object-cover w-full h-48 rounded-t-xl transition-transform duration-300 ease-in-out"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition-all duration-300 ease-in-out">
                    Web Development Workshop
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Students learning advanced web technologies
                  </p>
                </CardContent>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-xl shadow-inner transition-all duration-300 ease-in-out">
                  <span className="text-sm text-gray-500">March 2024</span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 ease-in-out">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
  );
};

export default GalleryAdmin;
