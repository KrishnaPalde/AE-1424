import React, { useEffect, useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const API_URL = config.API_URL;

const AdminExamManagement = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    startTime: "",
    duration: 0,
    endTime: "",
    isActive: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
        try {
          const response = await fetch(API_URL + "/exams/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch stats");
          }
    
          const data = await response.json(); // Convert response to JSON
          setExams(data);
        } catch (err) {
        //   setError("Failed to load dashboard statistics");
          console.error("Error fetching stats:", err);
        } finally {
          setLoading(false);
        }
      };
    
      fetchExams();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = async () => {
    if (!form.title || !form.startTime || !form.endTime || !form.duration) {
      alert("Please fill all required fields.");
      return;
    }
  
    try {
      const requestOptions = {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };
  
      const endpoint = isEditing
        ? `${API_URL}/exams/${form._id}`
        : `${API_URL}/exams`;
  
      const response = await fetch(endpoint, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Failed to ${isEditing ? "update" : "create"} exam`);
      }
  
      const savedExam = await response.json();
  
      if (isEditing) {
        setExams((prev) =>
          prev.map((exam) =>
            exam._id === form._id ? savedExam : exam
          )
        );
      } else {
        setExams((prev) => [...prev, savedExam]);
      }
  
      resetDialog();
    } catch (error) {
      console.error("Error saving exam:", error);
      alert("Something went wrong while saving the exam.");
    }
  };
  


  const handleEdit = (exam) => {
    setForm(exam);
    setIsEditing(true);
    setShowDialog(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this exam?")) {
      try {
        const response = await fetch(`${API_URL}/exams/${id}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete exam");
        }
  
        // Update frontend state only if deletion is successful
        setExams((prev) => prev.filter((exam) => exam._id !== id));
        // toast.success("Exam deleted successfully!");
      } catch (error) {
        console.error("Error deleting exam:", error);
        // toast.error("Failed to delete exam. Please try again.");
      }
    }
  };
  

  const resetDialog = () => {
    setForm({
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      isActive: true,
    });
    setIsEditing(false);
    setShowDialog(false);
  };

  const formatDateTime = (datetime) => {
    return new Date(datetime).toLocaleString();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Exam Management</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Exam List</span>
              <Button
                onClick={() => {
                  resetDialog();
                  setShowDialog(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
              >
                <PlusCircle size={20} />
                <span>Add Exam</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Start</TableHead>
                    <TableHead>End</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exams.map((exam) => (
                    <TableRow
                      key={exam._id}
                      className="hover:bg-blue-50 cursor-pointer"
                      onClick={() => navigate(`/admin-exam-management/${exam._id}`)}
                    >
                      <TableCell>{exam.title}</TableCell>
                      <TableCell>{exam.description || "-"}</TableCell>
                      <TableCell>{formatDateTime(exam.startTime)}</TableCell>
                      <TableCell>{formatDateTime(exam.endTime)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${exam.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                          {exam.isActive ? "Active" : "Inactive"}
                        </span>
                      </TableCell>
                      <TableCell
                        className="flex space-x-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          onClick={() => handleEdit(exam)}
                          className="p-2 text-blue-600 hover:bg-blue-50"
                        >
                          <Edit2 size={16} />
                        </Button>
                        <Button
                          onClick={() => handleDelete(exam._id)}
                          className="p-2 text-red-600 hover:bg-red-50"
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

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
  <DialogContent className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200 max-w-2xl mx-auto animate-fade-in">
    <DialogHeader className="mb-4">
      <DialogTitle className="text-2xl font-semibold text-gray-800">
        {isEditing ? "Edit Exam" : "Add New Exam"}
      </DialogTitle>
    </DialogHeader>

    <div className="space-y-5 mt-4">
      {/* Title */}
      <Input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Exam Title"
        className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
      />

      {/* Description */}
      <Textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="rounded-md border-gray-300 focus:border-primary focus:ring-primary min-h-[100px]"
      />

      <Input  
        name="duration"
        value={form.duration}
        onChange={handleChange}
        placeholder="Exam Duration (in minutes)"
        className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"/>

    

      {/* Start and End Time */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm text-gray-600 mb-1">Start Time</label>
    <DatePicker
      selected={form.startTime ? new Date(form.startTime) : null}
      onChange={(date) => handleChange({ target: { name: 'startTime', value: date } })}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      placeholderText="Select start time"
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
  <div>
    <label className="block text-sm text-gray-600 mb-1">End Time</label>
    <DatePicker
      selected={form.endTime ? new Date(form.endTime) : null}
      onChange={(date) => handleChange({ target: { name: 'endTime', value: date } })}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      placeholderText="Select end time"
      className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
        form.endTime < form.startTime
          ? "border-red-500 ring-1 ring-red-500"
          : "focus:ring-primary"
      }`}
    />
    {form.endTime < form.startTime && (
      <p className="text-sm text-red-500 mt-1">End Time must be after Start Time.</p>
    )}
  </div>
</div>


      {/* Is Active */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="isActive"
          checked={form.isActive}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, isActive: e.target.checked }))
          }
          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <label className="text-sm text-gray-700">Active</label>
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex justify-end space-x-3">
      <Button onClick={resetDialog} variant="outline" className="rounded-md border-gray-300 text-gray-700 hover:bg-gray-100">
        Cancel
      </Button>
      <Button
        onClick={handleSave}
        className="bg-primary text-black px-5 py-2 border-gray-300 rounded-md shadow-md hover:bg-primary-dark transition"
        disabled={form.endTime < form.startTime}
      >
        {isEditing ? "Update" : "Add"}
      </Button>
    </div>
  </DialogContent>
</Dialog>

      </div>
    </div>
  );
};

export default AdminExamManagement;
