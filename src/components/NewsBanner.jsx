import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Trash2,
  Plus,
  Save,
  XCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Sidebar from "./Admin/Sidebar";

const NewsBanner = ({ isAdmin = false }) => {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      type: "important",
      content: "Q4 Financial Results: Revenue exceeded expectations by 15%",
      link: "/financial-results",
    },
    {
      id: 2,
      type: "announcement",
      content: "New Partnership Announcement with Global Tech Solutions",
      link: "/partnerships",
    },
    {
      id: 3,
      type: "update",
      content: "Office Expansion: New Location Opening in Singapore",
      link: "/expansion",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  
  const handleEdit = (update) => {
    setEditingUpdate({ ...update });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingUpdate.id) {
      setUpdates(
        updates.map((u) => (u.id === editingUpdate.id ? editingUpdate : u))
      );
    } else {
      setUpdates([...updates, { ...editingUpdate, id: Date.now() }]);
    }
    setIsEditing(false);
    setEditingUpdate(null);
  };

  const handleDelete = (id) => {
    setUpdates(updates.filter((u) => u.id !== id));
  };

  const handleNewUpdate = () => {
    setEditingUpdate({ type: "update", content: "", link: "" });
    setIsEditing(true);
  };

  const nextUpdate = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length);
  };

  const prevUpdate = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length);
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case "important":
        return "bg-red-50 border-red-200 text-red-800";
      case "announcement":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "update":
        return "bg-green-50 border-green-200 text-green-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  useEffect(() => {
    if (!isPaused && !isEditing) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % updates.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, updates.length, isEditing]);

  const BannerContent = () => (
    <div className="w-full max-w-6xl mx-auto">
      <div
        className="relative overflow-hidden border rounded-lg shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between p-4 bg-white">
          <button
            onClick={prevUpdate}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 mx-4">
            <Alert
              className={`border ${getTypeStyles(updates[currentIndex]?.type)}`}
            >
              <AlertDescription className="flex items-center justify-between">
                <span className="font-medium">
                  {updates[currentIndex]?.content}
                </span>
                {isAdmin && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(updates[currentIndex])}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(updates[currentIndex].id)}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          </div>

          <button
            onClick={nextUpdate}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full transition-all duration-300 bg-blue-500"
            style={{
              width: `${((currentIndex + 1) / updates.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {isAdmin && (
        <div className="mt-4">
          <Button onClick={handleNewUpdate} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Update
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {isAdmin ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 p-8 overflow-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">News Banner Management</h1>
              <p className="text-gray-600">Manage your news updates and announcements</p>
            </div>
            <BannerContent />
          </div>
        </div>
      ) : (
        <BannerContent />
      )}

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>
              {editingUpdate?.id ? "Edit Update" : "New Update"}
            </DialogTitle>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select
                className="w-full p-2 border rounded-md"
                value={editingUpdate?.type}
                onChange={(e) =>
                  setEditingUpdate({ ...editingUpdate, type: e.target.value })
                }
              >
                <option value="important">Important</option>
                <option value="announcement">Announcement</option>
                <option value="update">Update</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Input
                value={editingUpdate?.content}
                onChange={(e) =>
                  setEditingUpdate({
                    ...editingUpdate,
                    content: e.target.value,
                  })
                }
                placeholder="Enter update content..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Link (optional)</label>
              <Input
                value={editingUpdate?.link}
                onChange={(e) =>
                  setEditingUpdate({ ...editingUpdate, link: e.target.value })
                }
                placeholder="Enter related link..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="hover:bg-blue-200">Save Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsBanner;