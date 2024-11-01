import React, { useState } from "react";
import {
  PlusCircle,
  Edit2,
  Trash2,
  ImageIcon,
  Save,
  X,
  FileText,
  MoveUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sidebar from "./Sidebar";

const CoursesAdmin = () => {
 
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Apparel Made-Ups & Home Furnishing",
      image: "/api/placeholder/400/320",
      logo: "/api/placeholder/100/100",
      order: 1,
      active: true,
    },
    {
      id: 2,
      title: "Beauty & Wellness Sector Skill Council",
      image: "/api/placeholder/400/320",
      logo: "/api/placeholder/100/100",
      order: 2,
      active: true,
    },
    {
      id: 3,
      title: "Capital Goods Skill Council",
      image: "/api/placeholder/400/320",
      logo: "/api/placeholder/100/100",
      order: 3,
      active: true,
    },
  ]);

  const [courseDescription, setCourseDescription] = useState(
    "At our training center, we offer a diverse range of courses meticulously designed to meet the demands of an ever-evolving job market. From technical skills to soft skills, our curriculum is crafted to empower individuals with the knowledge and expertise needed to succeed in their chosen field."
  );

  const [editingDescription, setEditingDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(courseDescription);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: "",
    image: "",
    logo: "",
    order: courses.length + 1,
    active: true,
  });

  const handleSaveDescription = () => {
    setCourseDescription(newDescription);
    setEditingDescription(false);
  };

  const handleAddCourse = () => {
    if (newCourse.title) {
      setCourses((prev) => [...prev, { ...newCourse, id: Date.now() }]);
      setNewCourse({
        title: "",
        image: "",
        logo: "",
        order: courses.length + 2,
        active: true,
      });
      setShowAddCourse(false);
    }
  };

  const handleUpdateCourse = () => {
    if (editingCourse) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editingCourse.id ? editingCourse : course
        )
      );
      setEditingCourse(null);
    }
  };

  const handleDeleteCourse = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const moveItemUp = (index) => {
    if (index > 0) {
      const newCourses = [...courses];
      [newCourses[index - 1], newCourses[index]] = [
        newCourses[index],
        newCourses[index - 1],
      ];
      newCourses.forEach((course, idx) => {
        course.order = idx + 1;
      });
      setCourses(newCourses);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar/>
      <div className="flex-1 px-6 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Courses Management
        </h1>

        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Course Overview Description</span>
              {!editingDescription ? (
                <button
                  onClick={() => setEditingDescription(true)}
                  className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                >
                  <Edit2 size={20} />
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveDescription}
                    className="p-2 text-green-600 transition-colors rounded-full hover:bg-green-50"
                  >
                    <Save size={20} />
                  </button>
                  <button
                    onClick={() => {
                      setEditingDescription(false);
                      setNewDescription(courseDescription);
                    }}
                    className="p-2 text-red-600 transition-colors rounded-full hover:bg-red-50"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {editingDescription ? (
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-700">{courseDescription}</p>
            )}
          </CardContent>
        </Card>

       
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Course Cards</span>
              <button
                onClick={() => setShowAddCourse(true)}
                className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700"
              >
                <PlusCircle size={20} />
                <span>Add Course</span>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Images</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course, index) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span>{course.order}</span>
                        {index > 0 && (
                          <button
                            onClick={() => moveItemUp(index)}
                            className="p-1 text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                          >
                            <MoveUp size={16} />
                          </button>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {course.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <img
                          src={course.image}
                          alt=""
                          className="w-10 h-10 rounded"
                        />
                        <img
                          src={course.logo}
                          alt=""
                          className="w-10 h-10 rounded"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          course.active
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {course.active ? "Active" : "Inactive"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingCourse(course)}
                          className="p-2 text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="p-2 text-red-600 transition-colors rounded-full hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

       
        <Dialog
          open={showAddCourse || editingCourse !== null}
          onOpenChange={() => {
            setShowAddCourse(false);
            setEditingCourse(null);
          }}
        >
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? "Edit Course" : "Add New Course"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Course Title
                </label>
                <input
                  type="text"
                  value={editingCourse ? editingCourse.title : newCourse.title}
                  onChange={(e) => {
                    if (editingCourse) {
                      setEditingCourse({
                        ...editingCourse,
                        title: e.target.value,
                      });
                    } else {
                      setNewCourse({ ...newCourse, title: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Course Image
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={
                      editingCourse ? editingCourse.image : newCourse.image
                    }
                    onChange={(e) => {
                      if (editingCourse) {
                        setEditingCourse({
                          ...editingCourse,
                          image: e.target.value,
                        });
                      } else {
                        setNewCourse({ ...newCourse, image: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Image URL"
                  />
                  <button className="p-2 text-gray-600 border border-gray-300 rounded-md">
                    <ImageIcon size={20} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Course Logo
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={editingCourse ? editingCourse.logo : newCourse.logo}
                    onChange={(e) => {
                      if (editingCourse) {
                        setEditingCourse({
                          ...editingCourse,
                          logo: e.target.value,
                        });
                      } else {
                        setNewCourse({ ...newCourse, logo: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Logo URL"
                  />
                  <button className="p-2 text-gray-600 border border-gray-300 rounded-md">
                    <ImageIcon size={20} />
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={
                      editingCourse ? editingCourse.active : newCourse.active
                    }
                    onChange={(e) => {
                      if (editingCourse) {
                        setEditingCourse({
                          ...editingCourse,
                          active: e.target.checked,
                        });
                      } else {
                        setNewCourse({
                          ...newCourse,
                          active: e.target.checked,
                        });
                      }
                    }}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Active
                  </span>
                </label>
              </div>
            </div>
            <DialogFooter>
              <button
                onClick={() => {
                  if (editingCourse) {
                    handleUpdateCourse();
                  } else {
                    handleAddCourse();
                  }
                }}
                className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700"
              >
                {editingCourse ? "Save Changes" : "Add Course"}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CoursesAdmin;
