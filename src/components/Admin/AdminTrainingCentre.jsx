import React, { useEffect, useState } from "react";
import { PlusCircle, Edit2, Trash2, X } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import config from "@/config";

const API_URL = config.API_URL;

const AdminTrainingCenters = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [newCenter, setNewCenter] = useState({
    title: "",
    description: "",
    courses: [],
    students: "",
    address: "",
    city: "",
    coords: { latitude: "", longitude: "" },
  });

  const [coursesList, setCoursesList] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState(newCenter.courses || []);

  const handleSelectCourse = (course) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleRemoveCourse = (course) => {
    setSelectedCourses(selectedCourses.filter((c) => c !== course));
  };

  // ✅ Fetch all training centers
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch(API_URL + "/training-centers");
        if (!response.ok) throw new Error("Failed to fetch centers");

        const data = await response.json();
        setCenters(data);
      } catch (err) {
        setError("Failed to load training centers.");
        console.error("Error fetching centers:", err);
      } finally {
        setLoading(false);
      }
    };
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL + "/courses");
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();
        setCoursesList(data); 
      } catch (err) {
        setError("Failed to load training centers.");
        console.error("Error fetching centers:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourses();

    fetchCenters();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCenter((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle coordinate input changes
  const handleCoordsChange = (e) => {
    const { name, value } = e.target;
    setNewCenter((prev) => ({
      ...prev,
      coords: { ...prev.coords, [name]: value },
    }));
  };

  // ✅ Add or Edit Training Center
  // const handleSaveCenter = async () => {
  //   if (!newCenter.title || !newCenter.description || !newCenter.address || !newCenter.city) {
  //     alert("Title, Description, Address, and City are required!");
  //     return;
  //   }

  //   const method = isEditing ? "PUT" : "POST";
  //   const url = isEditing ? `${API_URL}/training-centers/${newCenter._id}` : API_URL + "/training-centers";

  //   try {
  //     const response = await fetch(url, {
  //       method,
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...newCenter,
  //         coords: {
  //           latitude: parseFloat(newCenter.coords.latitude) || 0,
  //           longitude: parseFloat(newCenter.coords.longitude) || 0,
  //         },
  //       }),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Error saving training center.");
  //     }

  //     const data = await response.json();

  //     if (isEditing) {
  //       setCenters(centers.map((c) => (c._id === data.center._id ? data.center : c)));
  //     } else {
  //       setCenters([...centers, data.center]);
  //     }

  //     setShowModal(false);
  //     setNewCenter({ title: "", description: "", courses: "", students: "", address: "", city: "", coords: { latitude: "", longitude: "" } });
  //     setIsEditing(false);
  //   } catch (err) {
  //     console.error("Error saving center:", err);
  //   }
  // };

  const handleSaveCenter = async () => {
    if (!newCenter.title || !newCenter.description || !newCenter.address || !newCenter.city) {
      alert("Title, Description, Address, and City are required!");
      return;
    }
  
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_URL}/training-centers/${newCenter._id}` : `${API_URL}/training-centers`;
  
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newCenter,
          courses: selectedCourses, // ✅ Now sending an array of selected courses
          coords: {
            latitude: parseFloat(newCenter.coords.latitude) || 0,
            longitude: parseFloat(newCenter.coords.longitude) || 0,
          },
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error saving training center.");
      }
  
      const data = await response.json();
  
      if (isEditing) {
        setCenters(centers.map((c) => (c._id === data.center._id ? data.center : c)));
      } else {
        setCenters([...centers, data.center]);
      }
  
      // ✅ Reset selected courses and form fields
      setShowModal(false);
      setNewCenter({
        title: "",
        description: "",
        courses: [],
        students: "",
        address: "",
        city: "",
        coords: { latitude: "", longitude: "" },
      });
      setSelectedCourses([]); // ✅ Reset selected courses
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving center:", err);
    }
  };
  
  // ✅ Open Edit Center Dialog
  const handleEditCenter = (center) => {
    setNewCenter(center);
    setIsEditing(true);
    setShowModal(true);
  };

  // ✅ Delete Training Center
  const handleDeleteCenter = async (id) => {
    if (!window.confirm("Are you sure you want to delete this training center?")) return;

    try {
      const response = await fetch(`${API_URL}/training-centers/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error deleting training center.");

      setCenters(centers.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting center:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Training Centers Management</h1>

        {/* Training Centers Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Training Centers List</span>
              <Button
                onClick={() => {
                  setShowModal(true);
                  setIsEditing(false);
                  setNewCenter({ title: "", description: "", courses: "", students: "", address: "", city: "", coords: { latitude: "", longitude: "" } });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
              >
                <PlusCircle size={20} /> <span>Add Center</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {loading ? (
              <p className="text-center text-gray-600">Loading training centers...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Center Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {centers.map((center) => (
                    <TableRow key={center._id}>
                      <TableCell>{center.title}</TableCell>
                      <TableCell>{center.description}</TableCell>
                      <TableCell>
                        {Array.isArray(center.courses) ? center.courses.join(", ") : center.courses}
                      </TableCell>
                      <TableCell>
                        {Array.isArray(center.students) ? center.students.length : center.students}
                      </TableCell>
                      <TableCell>
                        {typeof center.address === "object"
                          ? `${center.address.street}, ${center.address.city}, ${center.address.state}`
                          : center.address}
                      </TableCell>
                      <TableCell>{center.city}</TableCell>
                      <TableCell className="flex space-x-2">
                        <Button
                          onClick={() => handleEditCenter(center)}
                          className="p-2 text-blue-600 hover:bg-blue-50"
                          aria-label="Edit Center"
                        >
                          <Edit2 size={16} />
                        </Button>
                        <Button
                          onClick={() => handleDeleteCenter(center._id)}
                          className="p-2 text-red-600 hover:bg-red-50"
                          aria-label="Delete Center"
                        >
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

        {/* ✅ Add/Edit Training Center Dialog Popup */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="bg-white shadow-lg rounded-lg p-6">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Training Center" : "Add Training Center"}</DialogTitle>
            </DialogHeader>

            {/* Form Inputs */}
            <div className="space-y-4">
              <Input label="Center Name" name="title" value={newCenter.title} onChange={handleChange} placeholder="Center Name" />
              <Input label="Description" name="description" value={newCenter.description} onChange={handleChange} placeholder="Description" />
              <Input label="City" name="city" value={newCenter.city} onChange={handleChange} placeholder="City Name" />
              
              {/* ✅ Updated Multi-Select Courses Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Courses Offered</label>
                <Select onValueChange={handleSelectCourse}>
                  <SelectTrigger className="w-full border-gray-300 shadow-sm hover:border-blue-500 focus:ring-blue-500">
                    Select Courses
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60 overflow-auto">
                    {coursesList.map((course) => (
                      <SelectItem key={course._id} value={course.title}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Display Selected Courses as Badges */}
                <div className="flex flex-wrap gap-2">
                  {selectedCourses.map((course) => (
                    <Badge key={course} className="bg-blue-100 text-blue-700 flex items-center px-3 py-1 rounded-full">
                      {course}
                      <button
                        onClick={() => handleRemoveCourse(course)}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <Input label="Students Enrolled" name="students" value={newCenter.students} onChange={handleChange} placeholder="e.g. 500+ Students" />
              <Input label="Address" name="address" value={newCenter.address} onChange={handleChange} placeholder="Full Address" />
              <Input label="Latitude" name="latitude" value={newCenter.coords.latitude} onChange={handleCoordsChange} placeholder="Latitude" />
              <Input label="Longitude" name="longitude" value={newCenter.coords.longitude} onChange={handleCoordsChange} placeholder="Longitude" />
            </div>

            <DialogFooter>
              <Button 
                onClick={() => handleSaveCenter({ ...newCenter, courses: selectedCourses })}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminTrainingCenters;
