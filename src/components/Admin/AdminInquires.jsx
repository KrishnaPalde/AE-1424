import React, { useEffect, useState, useMemo } from "react";
import { Eye, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import config from "@/config";

const API_URL = config.API_URL;

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [remark, setRemark] = useState("");

  // ===== Fetch =====
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch(API_URL + "/inquiries");
        const data = await res.json();
        setInquiries(data);
      } catch {
        setError("Failed to load inquiries");
      } finally {
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  // ===== Stats =====
  const stats = useMemo(() => {
    const unread = inquiries.filter(i => i.status === "unread").length;
    return {
      total: inquiries.length,
      unread,
      read: inquiries.length - unread,
    };
  }, [inquiries]);

  // ===== Actions =====
  const handleDeleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry permanently?")) return;
    await fetch(`${API_URL}/inquiries/${id}`, { method: "DELETE" });
    setInquiries(prev => prev.filter(i => i._id !== id));
  };

  const handleMarkAsRead = async () => {
    await fetch(`${API_URL}/inquiries/${selectedInquiry._id}/read`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ remark }),
    });

    setInquiries(prev =>
      prev.map(i =>
        i._id === selectedInquiry._id
          ? { ...i, status: "read", remark, readAt: new Date().toISOString() }
          : i
      )
    );

    setShowModal(false);
    setRemark("");
  };

  const formatDateTime = (date) =>
    date
      ? new Date(date).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "-";

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-6 bg-gray-50 min-h-screen">
        {/* ===== Header ===== */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Inquiries CRM
          </h1>
          <p className="text-sm text-gray-500">
            Manage and track all incoming inquiries
          </p>
        </div>

        {/* ===== Stats ===== */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total", value: stats.total },
            { label: "Unread", value: stats.unread, color: "text-red-600" },
            { label: "Read", value: stats.read, color: "text-green-600" },
          ].map((s, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color || ""}`}>
                  {s.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===== Table ===== */}
        <Card>
          <CardHeader>
            <CardTitle>All Inquiries</CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            {loading ? (
              <p className="p-6 text-center text-gray-500">Loading...</p>
            ) : error ? (
              <p className="p-6 text-center text-red-500">{error}</p>
            ) : inquiries.length === 0 ? (
              <p className="p-6 text-center text-gray-500">
                No inquiries found
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {inquiries.map((inq) => (
                    <TableRow
                      key={inq._id}
                      className={`hover:bg-gray-50 ${
                        inq.status === "unread" ? "bg-red-50/30" : ""
                      }`}
                    >
                      <TableCell className="font-medium">
                        {inq.name}
                        <p className="text-xs text-gray-500">{inq.email}</p>
                      </TableCell>

                      <TableCell className="capitalize">
                        {inq.type.replace("_", " ")}
                      </TableCell>

                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            inq.status === "unread"
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </TableCell>

                      <TableCell>{formatDateTime(inq.createdAt)}</TableCell>

                      <TableCell className="text-right space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setSelectedInquiry(inq);
                            setRemark(inq.remark || "");
                            setShowModal(true);
                          }}
                        >
                          <Eye size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600"
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

        {/* ===== Modal (Your upgraded one stays as-is) ===== */}
        {showModal && selectedInquiry && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="bg-white text-gray-900 z-50 max-w-2xl p-0 overflow-hidden">

              {/* ===== Header ===== */}
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Inquiry Details</h2>
                  <p className="text-xs text-gray-500">
                    Submitted by {selectedInquiry.name}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedInquiry.status === "unread"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {selectedInquiry.status === "unread" ? "Unread" : "Read"}
                </span>
              </div>

              {/* ===== Body ===== */}
              <div className="p-6 space-y-6">

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium">{selectedInquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Type</p>
                    <p className="font-medium capitalize">
                      {selectedInquiry.type.replace("_", " ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p className="font-medium">
                      {selectedInquiry.city}, {selectedInquiry.state}
                    </p>
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Inquiry Message</p>
                  <div className="bg-gray-50 border rounded-md p-3 text-sm leading-relaxed">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Read Info */}
                {selectedInquiry.status === "read" && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-sm">
                    <p>
                      <b>Read On:</b> {formatDateTime(selectedInquiry.readAt)}
                    </p>
                    <p className="mt-2">
                      <b>Internal Remark:</b>{" "}
                      {selectedInquiry.remark || "-"}
                    </p>
                  </div>
                )}

                {/* Remark Input */}
                {selectedInquiry.status === "unread" && (
                  <div>
                    <p className="text-gray-500 text-sm mb-1">
                      Internal Remark (visible to team)
                    </p>
                    <textarea
                      className="w-full border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows={3}
                      placeholder="Example: Admission inquiry – candidate not eligible (age below criteria)"
                      value={remark}
                      onChange={(e) => setRemark(e.target.value)}
                    />
                  </div>
                )}
              </div>

              {/* ===== Footer ===== */}
              <div className="px-6 py-4 border-t flex justify-end gap-2 bg-gray-50">
                <Button
                  variant="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </Button>

                {selectedInquiry.status === "unread" && (
                  <Button
                    onClick={handleMarkAsRead}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Mark as Read
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;
