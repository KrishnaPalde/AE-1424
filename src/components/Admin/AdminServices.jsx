import React, { useEffect, useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { initializeApp } from "firebase/app";

import config from "@/config";

const API_URL = config.API_URL;

const firebaseConfig = config.firebaseConfig;

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showServiceDialog, setShowServiceDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadOption, setUploadOption] = useState("url");

  const [newService, setNewService] = useState({
    title: "",
    category: "",
    description: "",
    longDescription: "",
    features: "",
    imageUrl: "",
    imageFile: null,
  });

  // ✅ Fetch all services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL + "/services");
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
          setNewService({ ...newService, imageFile: file, imageUrl: "" });
          setUploadOption("file");
      };
    }
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImageToFirebase = async (file) => {
      return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `services/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // setUploadProgress(progress);
          },
          (error) => {
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    };

  // ✅ Add or Edit Service
  const handleSaveService = async () => {
    console.log(newService);
    if (!newService.title || !newService.category || !newService.description) {
      alert("Title, Category, and Description are required!");
      return;
    }
    

    let imageUrl = newService.imageUrl;

    if (uploadOption === "file" && newService.imageFile) {
      setIsLoading(true);
      try {
        
        imageUrl = await uploadImageToFirebase(newService.imageFile);
        
      } catch (error) {
        console.error("❌ Firebase Upload Error:", error);
        alert("Error uploading image to Firebase.");
        return;
      }
      setIsLoading(false);
    }

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_URL}/services/${newService._id}` : API_URL + "/services";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newService,
          imageUrl: imageUrl,
          features: newService.features
            ? (Array.isArray(newService.features) ? newService.features : newService.features.split(",").map(f => f.trim()))
            : [],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error saving service.");
      }

      const data = await response.json();

      if (isEditing) {
        setServices(services.map((s) => (s._id === data.service._id ? data.service : s)));
      } else {
        setServices([...services, data.service]);
      }

      setShowServiceDialog(false);
      setNewService({ title: "", category: "", description: "", longDescription: "", features: "", imageUrl: "", imageFile: null });
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving service:", err);
    }
  };

  // ✅ Open Edit Service Dialog
  const handleEditService = (service) => {
    setNewService(service);
    setIsEditing(true);
    setShowServiceDialog(true);
  };

  const getFileNameFromUrl = (url) => {
    try {
      // Extract the part between "/o/" and "?"
      const match = url.match(/\/o\/(.*?)\?/);
      if (!match || match.length < 2) return null;
  
      // Decode the filename (replacing %2F with "/" and decoding URL encoding)
      const filePath = decodeURIComponent(match[1]);
  
      // Extract the actual file name after the last "/"
      return filePath.substring(filePath.lastIndexOf("/") + 1);
    } catch (error) {
      console.error("Error extracting file name:", error);
      return null;
    }
  };

  // ✅ Delete Service
  const handleDeleteService = async (id, imageUrl) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      if(imageUrl.includes("firebasestorage.googleapis.com")){
              const imageName = getFileNameFromUrl(imageUrl);
              if(imageName == null){
                return;
              }
              new Promise((resolve, reject) => {
                // Create a reference to the file in Firebase Storage
                const imageRef = ref(storage, `services/${imageName}`);
            
                // Delete the image
                deleteObject(imageRef)
                  .then(() => {
                    resolve('Image deleted successfully');
                  })
                  .catch((error) => {
                    reject(error);
                  });
              });
            }
      const response = await fetch(`${API_URL}/services/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error deleting service.");

      setServices(services.filter((service) => service._id !== id));
    } catch (err) {
      console.error("Error deleting service:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Services Management</h1>

        {/* Services Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Services List</span>
              <Button
                onClick={() => {
                  setShowServiceDialog(true);
                  setIsEditing(false);
                  setNewService({ title: "", category: "Candidates", description: "", longDescription: "", features: "", imageUrl: "", imageFile: null });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
              >
                <PlusCircle size={20} /> <span>Add Service</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {loading ? (
              <p className="text-center text-gray-600">Loading services...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service._id}>
                      <TableCell>{service.title}</TableCell>
                      <TableCell>{service.category}</TableCell>
                      <TableCell>{service.description}</TableCell>
                      <TableCell className="flex space-x-2">
                        <Button onClick={() => handleEditService(service)} className="p-2 text-blue-600 hover:bg-blue-50">
                          <Edit2 size={16} />
                        </Button>
                        <Button onClick={() => handleDeleteService(service._id, service.image)} className="p-2 text-red-600 hover:bg-red-50">
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

        {/* ✅ Add/Edit Service Dialog Popup */}
<Dialog open={showServiceDialog} onOpenChange={setShowServiceDialog}>
  <DialogContent className="bg-white shadow-lg rounded-lg p-6">
    <DialogHeader>
      <DialogTitle>{isEditing ? "Edit Service" : "Add New Service"}</DialogTitle>
    </DialogHeader>

    {/* Form Inputs */}
    <div className="space-y-4">
      {/* Title Input */}
      <Input 
        label="Title" 
        name="title" 
        value={newService.title} 
        onChange={handleChange} 
        placeholder="Service Title" 
      />

      {/* Category Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium">Category</label>
        <select
          name="category"
          value={newService.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Candidates">Candidates</option>
          <option value="Organizations">Organizations</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-medium">Description</label>
        <textarea
          name="description"
          value={newService.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Long Description */}
      <div>
        <label className="block text-gray-700 font-medium">Long Description</label>
        <textarea
          name="longDescription"
          value={newService.longDescription}
          onChange={handleChange}
          placeholder="Detailed Description"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Features Input */}
      <Input 
        label="Features (comma separated)" 
        name="features" 
        value={newService.features} 
        onChange={handleChange} 
        placeholder="Feature 1, Feature 2" 
      />

      {/* Image URL */}
      <Input 
        label="Image URL" 
        name="imageUrl" 
        value={newService.imageUrl} 
        onChange={handleChange} 
        placeholder="Image URL" 
      />
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {isLoading && <div className="spinner"><br></br>🌀 Uploading...</div>}
    </div>

    {/* Dialog Footer Buttons */}
    <DialogFooter>
      <Button onClick={handleSaveService} className="bg-green-600 hover:bg-green-700 text-white">
        {isEditing ? "Update Service" : "Save Service"}
      </Button>
      <Button onClick={() => setShowServiceDialog(false)} className="bg-gray-400 hover:bg-gray-500 text-white">
        Cancel
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

      </div>
    </div>
  );
};

export default AdminServices;
