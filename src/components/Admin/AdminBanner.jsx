import React, { useEffect, useState } from "react";
import { PlusCircle, Edit2, Trash2, Upload, Link } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import config from "@/config";
import { uploadImage, deleteImageByUrl } from "@/lib/uploadImage";

const API_URL = config.API_URL;

const AdminBanner = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadOption, setUploadOption] = useState("url");
  const [previewImage, setPreviewImage] = useState("");
  const [resolutionError, setResolutionError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);


  const [newBanner, setNewBanner] = useState({
    _id: null,
    imageUrl: "",
    imageFile: null,
  });

  // ✅ Fetch all banners from backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(API_URL + "/banners");
        if (!response.ok) throw new Error("Failed to fetch banners");
        const data = await response.json();
        setBanners(data);
      } catch (err) {
        setError("Failed to load banners.");
        console.error("Error fetching banners:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // ✅ Handle input change for Image URL
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBanner((prev) => ({ ...prev, [name]: value }));
    setPreviewImage(value);
  };

  // ✅ Handle file upload and validate resolution
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        // if (img.width === 1920 && img.height === 700) {
          setNewBanner({ ...newBanner, imageFile: file, imageUrl: "" });
          setUploadOption("file");
          setPreviewImage(img.src);
          setResolutionError("");
        // } else {
        //   console.log("resolution error");
        //   setResolutionError("⚠️ Image must be exactly **1920 x 700 pixels**.");
        //   setPreviewImage("");
        // }
      };
    }
  };

  // ✅ Open Add Banner Modal
  const openAddBannerModal = () => {
    setNewBanner({ _id: null, imageUrl: "", imageFile: null });
    setPreviewImage("");
    setUploadOption("url");
    setResolutionError("");
    setUploadProgress(0);
    setIsEditing(false);
    setShowModal(true);
  };

  // ✅ Open Edit Banner Modal
  const openEditBannerModal = (banner) => {
    setNewBanner({ _id: banner._id, imageUrl: banner.imageUrl, imageFile: null });
    setPreviewImage(banner.imageUrl);
    setUploadOption("url");
    setResolutionError("");
    setUploadProgress(0);
    setIsEditing(true);
    setShowModal(true);
  };

  // ✅ Save Banner (Add or Edit)
  const handleSaveBanner = async () => {
    if (!newBanner.imageUrl && !newBanner.imageFile) {
      alert("⚠️ Please provide an image URL or upload an image file.");
      return;
    }

    if (resolutionError) {
      alert(resolutionError);
      return;
    }

    let imageUrl = newBanner.imageUrl;

    if (uploadOption === "file" && newBanner.imageFile) {
      setIsLoading(true);
      try {

        ({ url: imageUrl } = await uploadImage(newBanner.imageFile, "banners", setUploadProgress));

      } catch (error) {
        console.error("❌ Image upload error:", error);
        alert("Error uploading image.");
        return;
      }
      setIsLoading(false);
    }

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_URL}/banners/${newBanner._id}` : API_URL + "/banners";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      });

      if (!response.ok) throw new Error("Error saving banner.");

      const data = await response.json();
      setBanners((prevBanners) =>
        isEditing
          ? prevBanners.map((b) => (b._id === data.banner._id ? data.banner : b))
          : [...prevBanners, data.banner]
      );

      setShowModal(false);
    } catch (err) {
      console.error("Error saving banner:", err);
    }
  };

  // ✅ Delete Banner
  const handleDeleteBanner = async (id, imageUrl) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;

    try {
      await deleteImageByUrl(imageUrl);
      await fetch(`${API_URL}/banners/${id}`, { method: "DELETE" });
      setBanners(banners.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting banner:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Banner Management</h1>

        {/* ✅ Live Banner Preview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Live Preview (Landing Page)</CardTitle>
          </CardHeader>
          <CardContent>
            {banners.length > 0 ? (
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                {banners.map((banner) => (
                  <div key={banner._id} className="h-[400px] flex items-center justify-center">
                    <img src={banner.imageUrl} alt="Banner" className="w-full h-full object-cover rounded-lg shadow-lg" />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p className="text-center text-gray-500">No banners added yet.</p>
            )}
          </CardContent>
        </Card>

        {/* ✅ Banner Management Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Manage Banners</span>
              <Button onClick={openAddBannerModal} className="bg-blue-600 hover:bg-blue-700 text-white">
                <PlusCircle size={20} /> Add Banner
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Banner</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {banners.map((banner) => (
                  <TableRow key={banner._id}>
                    <TableCell>
                      <img src={banner.imageUrl} alt="Banner" className="h-16 w-full object-cover rounded-md" />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleDeleteBanner(banner._id, banner.imageUrl)} className="text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* ✅ Add/Edit Banner Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="bg-white shadow-lg rounded-lg p-6">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Banner" : "Add Banner"}</DialogTitle>
            </DialogHeader>
            
            <Input type="text" placeholder="Image URL" name="imageUrl" value={newBanner.imageUrl} onChange={handleChange} />
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            {previewImage && <img src={previewImage} alt="Preview" className="h-32 rounded-md shadow-lg mt-4" />}
            {isLoading && <div className="spinner"><br></br>🌀 Uploading...</div>}
            <DialogFooter>
              <Button onClick={handleSaveBanner}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminBanner;
