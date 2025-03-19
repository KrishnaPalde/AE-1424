import React, { useState } from "react";
import Sidebar from "./Sidebar";
import config from "@/config";

const AdminSettings = () => {
  const [newAdmin, setNewAdmin] = useState({ email: "", password: "" });
  const [passwordData, setPasswordData] = useState({ oldPassword: "", newPassword: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleNewAdminChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(config.API_URL + "/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdmin),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add admin");
      showMessage("success", "New admin added successfully!");
      setNewAdmin({ email: "", password: "" });
    } catch (error) {
      showMessage("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(config.API_URL + "/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passwordData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to change password");
      showMessage("success", "Password changed successfully!");
      setPasswordData({ oldPassword: "", newPassword: "" });
    } catch (error) {
      showMessage("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-900">
      <Sidebar />
      <div className="ml-64 flex-1 p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Admin Settings</h1>
        {message.text && (
          <div className={`p-4 rounded-lg text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"} mb-6 animate-fade-in`}>
            {message.text}
          </div>
        )}

        {/* Add New Admin */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Create New Admin</h2>
          <form onSubmit={handleAddAdmin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={handleNewAdminChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e67e23]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newAdmin.password}
              onChange={handleNewAdminChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e67e23]"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e67e23] text-white py-2 rounded-lg hover:bg-[#d6721e] transition"
            >
              {loading ? "Adding..." : "Add Admin"}
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Change Password</h2>
          {/* <form onSubmit={handleChangePassword} className="space-y-4"> */}
          <form  className="space-y-4">
            <input
              type="password"
              name="oldPassword"
              placeholder="Current Password"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e67e23]"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e67e23]"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e67e23] text-white py-2 rounded-lg hover:bg-[#d6721e] transition"
            >
              {loading ? "Updating..." : "Change Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
