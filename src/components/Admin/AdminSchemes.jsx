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

const AdminSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFeature, setNewFeature] = useState("");

  const [newScheme, setNewScheme] = useState({
    title: "",
    description: "",
    longDescription: "",
    features: [],
  });

  // ✅ Fetch all schemes
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch(API_URL + "/schemes");
        if (!response.ok) throw new Error("Failed to fetch schemes");

        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError("Failed to load schemes.");
        console.error("Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewScheme((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Add a new feature
  const handleAddFeature = (e) => {
    e.preventDefault();
    if (newFeature.trim()) {
      setNewScheme((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  // ✅ Remove a feature
  const handleRemoveFeature = (index) => {
    setNewScheme((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  // ✅ Add or Edit Scheme
  const handleSaveScheme = async () => {
    if (!newScheme.title || !newScheme.description) {
      alert("Title and Description are required!");
      return;
    }

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_URL}/schemes/${newScheme._id}` : API_URL + "/schemes";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newScheme),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error saving scheme.");
      }

      const data = await response.json();

      if (isEditing) {
        setSchemes(schemes.map((s) => (s._id === data.scheme._id ? data.scheme : s)));
      } else {
        setSchemes([...schemes, data.scheme]);
      }

      setShowModal(false);
      setNewScheme({ title: "", description: "", longDescription: "", features: [] });
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving scheme:", err);
    }
  };

  // ✅ Open Edit Scheme Dialog
  const handleEditScheme = (scheme) => {
    setNewScheme(scheme);
    setIsEditing(true);
    setShowModal(true);
  };

  // ✅ Delete Scheme
  const handleDeleteScheme = async (id) => {
    if (!window.confirm("Are you sure you want to delete this scheme?")) return;

    try {
      const response = await fetch(`${API_URL}/schemes/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error deleting scheme.");

      setSchemes(schemes.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting scheme:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Schemes Management</h1>

        {/* Schemes Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Schemes List</span>
              <Button
                onClick={() => {
                  setShowModal(true);
                  setIsEditing(false);
                  setNewScheme({ title: "", description: "", longDescription: "", features: [] });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
              >
                <PlusCircle size={20} /> <span>Add Scheme</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {loading ? (
              <p className="text-center text-gray-600">Loading schemes...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schemes.map((scheme) => (
                    <TableRow key={scheme._id}>
                      <TableCell>{scheme.title}</TableCell>
                      <TableCell>{scheme.description}</TableCell>
                      <TableCell className="flex space-x-2">
                        <Button onClick={() => handleEditScheme(scheme)} className="p-2 text-blue-600 hover:bg-blue-50">
                          <Edit2 size={16} />
                        </Button>
                        <Button onClick={() => handleDeleteScheme(scheme._id)} className="p-2 text-red-600 hover:bg-red-50">
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

        {/* ✅ Add/Edit Scheme Dialog Popup */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="bg-white shadow-lg rounded-lg p-6">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Scheme" : "Add Scheme"}</DialogTitle>
            </DialogHeader>

            {/* Form Inputs */}
            <div className="space-y-4">
              <Input label="Scheme Title" name="title" value={newScheme.title} onChange={handleChange} placeholder="Scheme Title" />
              <Input label="Short Description" name="description" value={newScheme.description} onChange={handleChange} placeholder="Short Description" />
              <Input label="Detailed Description" name="longDescription" value={newScheme.longDescription} onChange={handleChange} placeholder="Long Description" />

              {/* Features */}
              <label className="block text-gray-700 font-medium">Features</label>
              <div className="space-y-2">
                {newScheme.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="flex-1 p-2 border border-gray-300 rounded-md">{feature}</span>
                    <Button className="p-1 text-red-600 hover:bg-red-50" onClick={() => handleRemoveFeature(index)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ))}
                <Input name="newFeature" value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="Add Feature" />
                <Button onClick={handleAddFeature} className="bg-green-500 hover:bg-green-600 text-white p-2">Add Feature</Button>
              </div>
            </div>

            <DialogFooter>
              <Button onClick={handleSaveScheme} className="bg-green-600 hover:bg-green-700 text-white">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminSchemes;
