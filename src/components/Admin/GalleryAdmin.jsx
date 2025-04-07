// import React from "react";
// import { PlusCircle, Search, Edit3, Trash2 } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import PageWrapper from "../PageWrapper";
// import AdminSidebar from "./Sidebar";

// const GalleryAdmin = () => {
//   return (
//       <div className="flex bg-gray-50 min-h-screen transition-all duration-300 ease-in-out">
//         {/* Sidebar */}
//         <AdminSidebar currentPath="/admin/gallery" />

//         {/* Main Content */}
//         <div className="ml-64 flex-1 p-8 transition-all duration-300 ease-in-out">
//           {/* Header */}
//           <header className="flex items-center justify-between mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 transition-all duration-300 ease-in-out">
//               Gallery Management
//             </h2>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <button className="flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#e67e23] to-[#d77a1f] rounded-lg hover:from-[#d77a1f] hover:to-[#e67e23] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
//                   <PlusCircle className="w-5 h-5 mr-2" />
//                   Add New Item
//                 </button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[525px] bg-white transition-transform transform">
//                 <DialogHeader>
//                   <DialogTitle>Add Gallery Item</DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid gap-2">
//                     <label className="text-sm font-medium">Title</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
//                       placeholder="Enter title"
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="text-sm font-medium">Category</label>
//                     <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out">
//                       <option value="workshops">Workshops</option>
//                       <option value="events">Events</option>
//                       <option value="students">Students</option>
//                     </select>
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="text-sm font-medium">Description</label>
//                     <textarea
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
//                       rows="3"
//                       placeholder="Enter description"
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <label className="text-sm font-medium">Image</label>
//                     <input
//                       type="file"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
//                       accept="image/*"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-end space-x-3 mt-4">
//                   <DialogTrigger asChild>
//                     <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 ease-in-out">
//                       Cancel
//                     </button>
//                   </DialogTrigger>
//                   <button className="px-4 py-2 text-white bg-[#e67e23] rounded-lg hover:bg-[#d77a1f] transition-all duration-300 ease-in-out">
//                     Save
//                   </button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </header>

//           {/* Search and Filters */}
//           <Card className="mb-8 shadow-lg transition-all duration-300 ease-in-out">
//             <CardContent className="flex items-center justify-between p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
//               <div className="relative w-1/2">
//                 <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
//                 <input
//                   type="text"
//                   placeholder="Search gallery items..."
//                   className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] focus:outline-none transition-all duration-300 ease-in-out"
//                 />
//               </div>
//               <select className="px-8 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#e67e23] transition-all duration-300 ease-in-out">
//                 <option value="">All Categories</option>
//                 <option value="workshops">Workshops</option>
//                 <option value="events">Events</option>
//                 <option value="students">Students</option>
//               </select>
//             </CardContent>
//           </Card>

//           {/* Gallery Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <Card
//                 key={item}
//                 className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <img
//                   src="https://picsum.photos/200/300"
//                   alt="Gallery item"
//                   className="object-cover w-full h-48 rounded-t-xl transition-transform duration-300 ease-in-out"
//                 />
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition-all duration-300 ease-in-out">
//                     Web Development Workshop
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Students learning advanced web technologies
//                   </p>
//                 </CardContent>
//                 <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-xl shadow-inner transition-all duration-300 ease-in-out">
//                   <span className="text-sm text-gray-500">March 2024</span>
//                   <div className="flex space-x-2">
//                     <button className="p-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out">
//                       <Edit3 className="w-4 h-4" />
//                     </button>
//                     <button className="p-2 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 ease-in-out">
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };

// export default GalleryAdmin;


import React, { useEffect, useState } from "react";
import axios from "axios";
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
import config from "@/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { initializeApp } from "firebase/app";

const API_URL = config.API_URL;
const firebaseConfig = config.firebaseConfig;

// ✅ Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);


const GalleryAdmin = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

// ✅ Upload Image to Firebase and Get URL
  const uploadImageToFirebase = async (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `gallery/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadProgress(0);
          resolve(downloadURL);
        }
      );
    });
  };

  const defaultForm = {
    title: "",
    category: "",
    description: "",
    image: null,
  };

  const [formData, setFormData] = useState(defaultForm);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_URL}/gallery`);
      setGalleryItems(res.data);
      setFilteredItems(res.data);
    } catch (error) {
      console.error("Failed to fetch gallery:", error);
    }
  };
  

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/categories`);
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchCategories();
  }, []);

  useEffect(() => {
    const filtered = galleryItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (categoryFilter ? item.category === categoryFilter : true)
      );
    });
    setFilteredItems(filtered);
  }, [search, categoryFilter, galleryItems]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = formData.image;
  
      // Upload to Firebase if it's a File
      if (formData.image instanceof File) {
        imageUrl = await uploadImageToFirebase(formData.image);
      }
  
      const payload = {
        ...formData,
        image: imageUrl,
        date: new Date().toISOString(), // Optional: Add current date
        id: formData.id || Date.now().toString(), // Optional: Generate ID if not present
      };
  
      if (editingItem) {
        await axios.put(`${API_URL}/gallery/${editingItem._id}`, payload);
      } else {
        await axios.post(`${API_URL}/gallery`, payload);
      }
  
      fetchGallery();
      fetchCategories();
      resetForm();
      setModalOpen(false);
    } catch (error) {
      console.error("Failed to submit gallery item:", error);
    }
  };
  

  const handleDelete = async (id, imageUrl) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const baseUrl = "https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/";
      const encodedPath = imageUrl.replace(baseUrl, "").split("?")[0]; // Get only path part before `?`
      const fullPath = decodeURIComponent(encodedPath); // Now we have 'logos/government/avatar.png' or similar
  
      // Use full path instead of manually constructing it from category and file name
      const fileRef = ref(storage, fullPath);
      await deleteObject(fileRef);
      await axios.delete(`${API_URL}/gallery/${id}`);
      fetchGallery();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      description: item.description,
      image: null, // Leave image empty unless re-uploaded
    });
    document.getElementById("gallery-dialog-trigger").click(); // Simulate modal open
  };

  const resetForm = () => {
    setFormData(defaultForm);
    setEditingItem(null);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar currentPath="/admin/gallery" />

      <div className="ml-64 flex-1 p-8">
        <header className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Gallery Management</h2>

          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <button
                id="gallery-dialog-trigger"
                onClick={() => resetForm()}
                className="flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#e67e23] to-[#d77a1f] rounded-lg"
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                {editingItem ? "Edit Item" : "Add New Item"}
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[525px] bg-white">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit Gallery Item" : "Add Gallery Item"}</DialogTitle>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Title"
                />

<select
  name="category"
  value={formData.category}
  onChange={(e) => {
    if (e.target.value === "__add_new__") {
      setShowNewCategoryInput(true);
      setFormData({ ...formData, category: "" }); // reset selection
    } else {
      setFormData({ ...formData, category: e.target.value });
    }
  }}
  className="input"
>
  <option value="">Select Category</option>
  {categories.map((cat) => (
    <option key={cat._id} value={cat.name}>{cat.name}</option>
  ))}
  <option value="__add_new__">+ Add New Category</option>
</select>


{showNewCategoryInput && (
  <div className="flex items-center gap-2">
    <input
      type="text"
      value={newCategoryName}
      onChange={(e) => setNewCategoryName(e.target.value)}
      placeholder="Enter new category"
      className="input"
    />
    <button
      onClick={async () => {
        try {
          const res = await axios.post(`${API_URL}/categories/`, {
            name: newCategoryName,
          });
          setCategories([...categories, res.data.name]);
          setFormData({ ...formData, category: res.data.name });
          setNewCategoryName("");
          setShowNewCategoryInput(false);
        } catch (error) {
          console.error("Failed to add new category:", error);
        }
      }}
      className="px-3 py-1 bg-green-600 text-white rounded"
    >
      Save
    </button>
    <button
      onClick={() => {
        setNewCategoryName("");
        setShowNewCategoryInput(false);
      }}
      className="px-3 py-1 bg-gray-300 text-gray-800 rounded"
    >
      Cancel
    </button>
  </div>
)}


                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Description"
                />

                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  className="input"
                  accept="image/*"
                />
              </div>
              {uploadProgress > 0 && (
                <p className="text-sm text-gray-600">Uploading: {uploadProgress.toFixed(0)}%</p>
              )}
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#e67e23] text-white rounded"
              >
                {editingItem ? "Update" : "Save"}
              </button>
            </DialogContent>
          </Dialog>
        </header>

        <Card className="mb-8 shadow-lg">
          <CardContent className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div className="relative w-1/2">
              <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search gallery items..."
                className="input pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="input"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <Card
              key={item._id}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-48 rounded-t-xl"
              />
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-xl">
                <span className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-blue-600 hover:bg-blue-50"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id, item.image)}
                    className="p-2 text-red-600 hover:bg-red-50"
                  >
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
