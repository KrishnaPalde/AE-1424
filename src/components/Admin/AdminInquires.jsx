import React, { useEffect, useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import config from "@/config";

const API_URL = config.API_URL;

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Fetch all inquiries from API
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch(API_URL + "/inquiries");
        if (!response.ok) throw new Error("Failed to fetch inquiries");

        const data = await response.json();
        setInquiries(data);
      } catch (err) {
        setError("Failed to load inquiries.");
        console.error("Error fetching inquiries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  // ✅ Delete Inquiry
  const handleDeleteInquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error deleting inquiry.");

      setInquiries(inquiries.filter((inq) => inq._id !== id));
    } catch (err) {
      console.error("Error deleting inquiry:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Inquiries Management</h1>

        <Card>
          <CardHeader>
            <CardTitle>Inquiries List</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {loading ? (
              <p className="text-center text-gray-600">Loading inquiries...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((inq) => (
                    <TableRow key={inq._id}>
                      <TableCell className="font-medium">{inq.name}</TableCell>
                      <TableCell>{inq.email}</TableCell>
                      <TableCell>{inq.phone}</TableCell>
                      <TableCell>{inq.type}</TableCell>
                      <TableCell>{inq.state}</TableCell>
                      <TableCell>{inq.city}</TableCell>
                      <TableCell>
                        <Button
                          className="p-2 text-blue-600 hover:bg-blue-50"
                          onClick={() => {
                            setSelectedInquiry(inq);
                            setShowModal(true);
                          }}
                        >
                          <Eye size={16} />
                        </Button>
                        <Button
                          className="p-2 text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteInquiry(inq._id)}
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

        {/* ✅ Inquiry Details Modal */}
        {showModal && selectedInquiry && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle>Inquiry Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p><strong>Full Name:</strong> {selectedInquiry.name}</p>
                <p><strong>Email:</strong> {selectedInquiry.email}</p>
                <p><strong>Phone:</strong> {selectedInquiry.phone}</p>
                <p><strong>Enquiry Type:</strong> {selectedInquiry.type}</p>
                {selectedInquiry.type === "student" && (
                  <p><strong>Age:</strong> {selectedInquiry.age}</p>
                )}
                <p><strong>State:</strong> {selectedInquiry.state}</p>
                <p><strong>City:</strong> {selectedInquiry.city}</p>
                <p><strong>Message:</strong> {selectedInquiry.message}</p>
              </div>
              <DialogFooter>
                <Button onClick={() => setShowModal(false)} className="bg-gray-400 hover:bg-gray-500 text-white">
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;
