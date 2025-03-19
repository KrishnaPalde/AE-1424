import React, { useEffect, useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import config from "@/config";

const API_URL = config.API_URL;

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [newCourse, setNewCourse] = useState({
    title: "",
    shortDescription: "",
  });

  // ✅ Fetch all courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL + "/courses");
        if (!response.ok) throw new Error("Failed to fetch courses");

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError("Failed to load courses.");
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Add or Edit Course
  const handleSaveCourse = async () => {
    if (!newCourse.title || !newCourse.shortDescription) {
      alert("Title and Short Description are required!");
      return;
    }

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_URL}/courses/${newCourse._id}` : API_URL + "/courses";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error saving course.");
      }

      const data = await response.json();

      if (isEditing) {
        setCourses(courses.map((c) => (c._id === data.course._id ? data.course : c)));
      } else {
        setCourses([...courses, data.course]);
      }

      setShowModal(false);
      setNewCourse({ title: "", shortDescription: "" });
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving course:", err);
    }
  };

  // ✅ Open Edit Course Dialog
  const handleEditCourse = (course) => {
    setNewCourse(course);
    setIsEditing(true);
    setShowModal(true);
  };

  // ✅ Delete Course
  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      const response = await fetch(`${API_URL}/courses/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error deleting course.");

      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Courses Management</h1>

        {/* Courses Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Courses List</span>
              <Button
                onClick={() => {
                  setShowModal(true);
                  setIsEditing(false);
                  setNewCourse({ title: "", shortDescription: "" });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
              >
                <PlusCircle size={20} /> <span>Add Course</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {loading ? (
              <p className="text-center text-gray-600">Loading courses...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Short Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course._id}>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.shortDescription}</TableCell>
                      <TableCell className="flex space-x-2">
                        <Button onClick={() => handleEditCourse(course)} className="p-2 text-blue-600 hover:bg-blue-50">
                          <Edit2 size={16} />
                        </Button>
                        <Button onClick={() => handleDeleteCourse(course._id)} className="p-2 text-red-600 hover:bg-red-50">
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* ✅ Add/Edit Course Dialog Popup */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="bg-white shadow-lg rounded-lg p-6">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Course" : "Add New Course"}</DialogTitle>
            </DialogHeader>

            {/* Form Inputs */}
            <div className="space-y-4">
              <Input
                label="Course Title"
                name="title"
                value={newCourse.title}
                onChange={handleChange}
                placeholder="Enter Course Title"
              />
              <Input
                label="Short Description"
                name="shortDescription"
                value={newCourse.shortDescription}
                onChange={handleChange}
                placeholder="Enter Short Description"
              />
            </div>

            {/* Dialog Footer Buttons */}
            <DialogFooter>
              <Button onClick={handleSaveCourse} className="bg-green-600 hover:bg-green-700 text-white">
                {isEditing ? "Update Course" : "Save Course"}
              </Button>
              <Button onClick={() => setShowModal(false)} className="bg-gray-400 hover:bg-gray-500 text-white">
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminCourses;
