import React, { useState, useEffect } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogHeader, DialogTitle, DialogFooter, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import config from "@/config";

const firebaseApp = initializeApp(config.firebaseConfig);
const storage = getStorage(firebaseApp);
const API_URL = config.API_URL;

const categories = ["government", "affiliated", "partners"];

const AdminLogos = () => {
  const [logos, setLogos] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("government");
  const [modalOpen, setModalOpen] = useState(false);
  const [newLogo, setNewLogo] = useState({ file: null, url: "" });
  const [preview, setPreview] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [bulkFiles, setBulkFiles] = useState([]);
  const [bulkPreviews, setBulkPreviews] = useState([]);


  // ✅ Fetch logos for all categories
  useEffect(() => {
    categories.forEach(async (cat) => {
      try {
        const res = await fetch(`${API_URL}/logos/${cat}`);
        const data = await res.json();
        setLogos((prev) => ({ ...prev, [cat]: data }));
      } catch (err) {
        console.error(`Failed to fetch ${cat} logos:`, err);
      }
    });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setNewLogo({ file, url: "" });
    setPreview(previewUrl);
  };

  const handleBulkFileChange = (e) => {
    const files = Array.from(e.target.files);
    setBulkFiles(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setBulkPreviews(previews);
  };

  const handleBulkUpload = async () => {
    if (bulkFiles.length === 0) return;
  
    setLoading(true);
    try {
      const uploadedLogos = [];
  
      for (const file of bulkFiles) {
        const imageUrl = await uploadToFirebase(file);
  
        // Save to MongoDB
        const res = await fetch(`${API_URL}/logos/${selectedCategory}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageUrl }),
        });
  
        const data = await res.json();
  
        if (res.ok) {
          uploadedLogos.push(data.logo); // Use the response object from MongoDB
        } else {
          console.error("MongoDB upload error:", data?.message || res.statusText);
        }
      }
  
      // Update local state
      setLogos((prev) => ({
        ...prev,
        [selectedCategory]: [...(prev[selectedCategory] || []), ...uploadedLogos],
      }));
  
      // Reset
      setBulkModalOpen(false);
      setBulkFiles([]);
      setBulkPreviews([]);
      setUploadProgress(0);
    } catch (err) {
      console.error("Bulk upload failed:", err);
    }
    setLoading(false);
  };
  
  

  const uploadToFirebase = async (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `logos/${selectedCategory}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => setUploadProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        (err) => reject(err),
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
        }
      );
    });
  };

  const handleAddLogo = async () => {
    if (!newLogo.file) return alert("Upload an image");
    setLoading(true);
    try {
      const imageUrl = await uploadToFirebase(newLogo.file);
      const res = await fetch(`${API_URL}/logos/${selectedCategory}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      });
      const data = await res.json();
      setLogos((prev) => ({ ...prev, [selectedCategory]: [...(prev[selectedCategory] || []), data.logo] }));
      setModalOpen(false)
      setPreview("");
      setUploadProgress(0);
      setLoading(false);
    } catch (err) {
      console.error("Failed to upload:", err);
    }
    setLoading(false);
  };

  const extractFileName = (url) => {
    try {
      const match = url.match(/\/o\/(.*?)\?/);
      return match ? decodeURIComponent(match[1].split("/").pop()) : null;
    } catch {
      return null;
    }
  };

  const handleDelete = async (logoId, imageUrl) => {
    if (!window.confirm("Delete this logo?")) return;
  
    try {
      // Extract and decode the full path from the Firebase Storage URL
      const baseUrl = "https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/";
      const encodedPath = imageUrl.replace(baseUrl, "").split("?")[0]; // Get only path part before `?`
      const fullPath = decodeURIComponent(encodedPath); // Now we have 'logos/government/avatar.png' or similar
  
      // Use full path instead of manually constructing it from category and file name
      const fileRef = ref(storage, fullPath);
      await deleteObject(fileRef);
  
      // Call backend to delete metadata
      await fetch(`${API_URL}/logos/${selectedCategory}/${logoId}`, { method: "DELETE" });
  
      // Update state
      setLogos((prev) => ({
        ...prev,
        [selectedCategory]: prev[selectedCategory].filter((logo) => logo._id !== logoId),
      }));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
  <Sidebar />

  <div className="flex-1 p-4 md:p-6 lg:ml-64">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 tracking-tight">
      Manage Logos
    </h1>

    {/* ✅ Category Buttons */}
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`capitalize transition-all duration-200 ${
            selectedCategory === cat
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white border text-gray-700 hover:bg-gray-100"
          }`}
        >
          {cat === "government" ? "Govt. Departments" : cat === "affiliated" ? "Affiliated By" : "Our Partners"}
        </Button>
      ))}
    </div>

    {/* ✅ Carousel Preview */}
    <Card className="mb-6 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Live Preview - {selectedCategory}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {logos[selectedCategory]?.length > 0 ? (
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {logos[selectedCategory].map((logo) => (
              <div
                key={logo._id}
                className="h-[200px] flex items-center justify-center bg-white rounded-md"
              >
                <img
                  src={logo.imageUrl}
                  alt="Logo"
                  className="max-h-[120px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-500 py-8">No logos added yet.</p>
        )}
      </CardContent>
    </Card>

    {/* ✅ Table */}
    <Card className="shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <CardTitle className="text-lg font-semibold">
          Manage {selectedCategory} Logos
        </CardTitle>
        <Button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white shadow hover:bg-blue-700">
          <PlusCircle size={20} className="mr-2" /> Add Logo
        </Button>
        <Button
  onClick={() => setBulkModalOpen(true)}
  className="bg-yellow-500 text-white hover:bg-yellow-600"
>
  <PlusCircle size={18} className="mr-2" />
  Bulk Upload (Temp)
</Button>

      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logos[selectedCategory]?.map((logo) => (
              <TableRow key={logo._id}>
                <TableCell>
                  <img
                    src={logo.imageUrl}
                    alt="Logo"
                    className="h-14 object-contain rounded-md border p-1 bg-white"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:bg-red-50"
                    onClick={() => handleDelete(logo._id, logo.imageUrl)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    {/* ✅ Modal */}
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="bg-white max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add New Logo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <img
              src={preview}
              className="max-h-32 rounded-md border p-1 bg-white object-contain"
              alt="Preview"
            />
          )}
          {uploadProgress > 0 && (
            <p className="text-sm text-gray-600">Uploading: {uploadProgress.toFixed(0)}%</p>
          )}
        </div>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={handleAddLogo}
            className="bg-blue-600 text-white shadow hover:bg-blue-700 w-full"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog open={bulkModalOpen} onOpenChange={setBulkModalOpen}>
  <DialogContent className="bg-white max-w-md w-full">
    <DialogHeader>
      <DialogTitle className="text-xl font-semibold">
        Bulk Logo Upload (Temporary)
      </DialogTitle>
    </DialogHeader>

    <div className="space-y-4">
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleBulkFileChange}
      />
      {bulkPreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {bulkPreviews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="h-20 object-contain border rounded-md p-1 bg-white"
              alt={`Preview ${idx}`}
            />
          ))}
        </div>
      )}
    </div>

    <DialogFooter>
      <Button
        onClick={handleBulkUpload}
        disabled={loading}
        className="w-full bg-yellow-500 text-white hover:bg-yellow-600"
      >
        Upload All
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

  </div>
</div>

  );
};

export default AdminLogos;
