import React from "react";
import {
  Home,
  Image as ImageIcon,
  Users,
  Calendar,
  PlusCircle,
  Search,
  Edit3,
  Trash2,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Sidebar from "./Sidebar";
import PageWrapper from "../PageWrapper";

const GalleryAdmin = () => {
  return (
    <PageWrapper>
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentPath="/admin/gallery" />

      <div className="flex-1 overflow-auto">
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Gallery Management
            </h2>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center px-4 py-2 text-white rounded-lg bg-violet-700 hover:bg-violet-800">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Item
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] bg-white">
              <DialogHeader>
                <DialogTitle>Add Gallery Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter title"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full px-3 py-2 border rounded-lg">
                    <option value="workshops">Workshops</option>
                    <option value="events">Events</option>
                    <option value="students">Students</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg"
                    rows="3"
                    placeholder="Enter description"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Image</label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 border rounded-lg"
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <DialogTrigger asChild>
                  <button className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50">
                    Cancel
                  </button>
                </DialogTrigger>
                <button className="px-4 py-2 text-white rounded-lg bg-violet-700 hover:bg-violet-800">
                  Save
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </header>

        <div className="p-6">
          <Card className="mb-6">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search gallery items..."
                    className="w-64 py-2 pl-10 pr-4 border rounded-lg"
                  />
                </div>
                <select className="px-8 py-2 border rounded-lg">
                  <option value="">All Categories</option>
                  <option value="workshops">Workshops</option>
                  <option value="events">Events</option>
                  <option value="students">Students</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="Gallery item"
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      Web Development Workshop
                    </h3>
                    <span className="px-2 py-1 text-sm rounded-full text-violet-700 bg-violet-50">
                      Workshops
                    </span>
                  </div>
                  <p className="mb-4 text-gray-600">
                    Students learning advanced web technologies
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">March 2024</span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 rounded-lg hover:bg-blue-50">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 rounded-lg hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default GalleryAdmin;
