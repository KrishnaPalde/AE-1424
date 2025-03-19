import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import StatsCard from "../ui/StatCards";
import ContactForm from "../ui/ContactForm";
import config from "@/config";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    totalServices: 0,
    totalCenters: 0,
    totalCourses: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(config.API_URL + "/dashboard/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
  
        const data = await response.json(); // Convert response to JSON
        setStats(data);
      } catch (err) {
        setError("Failed to load dashboard statistics");
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStats();
  }, []);
  

  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 animate-fade-in">
          Admin Dashboard
        </h1>

        {/* Stats Section */}
        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading dashboard stats...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <StatsCard title="Total Inquiries" count={stats.totalInquiries} icon="question-circle" />
            <StatsCard title="Total Services" count={stats.totalServices} icon="briefcase" />
            <StatsCard title="Training Centers" count={stats.totalCenters} icon="building" />
            <StatsCard title="Total Courses" count={stats.totalCourses} icon="book" />
          </div>
        )}

        {/* Contact Info Management Section */}
        <div className="mt-10 bg-white p-8 mb-4 rounded-2xl shadow-xl animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Manage Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Update the contact details displayed for inquiries and support.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
