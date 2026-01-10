import React, { useEffect, useState, useMemo } from "react";
import { Eye, Trash2, CheckCircle, Briefcase, Building2, User } from "lucide-react";
import Sidebar from "./Sidebar"; // Ensure this path matches your structure
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

const AdminZedEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [filterType, setFilterType] = useState("all"); // 'all', 'company', 'facilitator'

  // Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // CRM Actions State
  const [statusUpdate, setStatusUpdate] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // ===== Fetch Data =====
  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/zed`);
      const data = await res.json();
      
      if (data.success) {
        setEnquiries(data.data);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ===== Computed Stats =====
  const stats = useMemo(() => {
    return {
      total: enquiries.length,
      newLeads: enquiries.filter(e => e.status === "New").length,
      companies: enquiries.filter(e => e.userType === "company").length,
      facilitators: enquiries.filter(e => e.userType === "facilitator").length,
      goldRequests: enquiries.filter(e => e.certificationGoal === "gold").length
    };
  }, [enquiries]);

  // ===== Filter Logic =====
  const filteredEnquiries = useMemo(() => {
    if (filterType === "all") return enquiries;
    return enquiries.filter(e => e.userType === filterType);
  }, [enquiries, filterType]);

  // ===== Actions =====
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    
    try {
      const res = await fetch(`${API_URL}/zed/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setEnquiries(prev => prev.filter(e => e._id !== id));
      }
    } catch (err) {
      alert("Failed to delete");
    }
  };

  const handleUpdateStatus = async () => {
    setIsUpdating(true);
    try {
      const res = await fetch(`${API_URL}/zed/${selectedEnquiry._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          status: statusUpdate, 
          adminNotes: adminNotes 
        }),
      });
      const data = await res.json();

      if (data.success) {
        // Update local state
        setEnquiries(prev => prev.map(e => 
          e._id === selectedEnquiry._id ? data.data : e
        ));
        setShowModal(false);
      }
    } catch (err) {
      alert("Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  const openModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setStatusUpdate(enquiry.status);
    setAdminNotes(enquiry.adminNotes || "");
    setShowModal(true);
  };

  // Helper: Status Badge Color
  const getStatusColor = (status) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-700";
      case "Contacted": return "bg-yellow-100 text-yellow-700";
      case "In Progress": return "bg-purple-100 text-purple-700";
      case "Converted": return "bg-green-100 text-green-700";
      case "Closed": return "bg-gray-100 text-gray-600";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        {/* ===== Header ===== */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">ZED Certification Leads</h1>
            <p className="text-gray-500 mt-1">Track companies and facilitators applying for ZED</p>
          </div>
          <Button onClick={fetchEnquiries} variant="outline" size="sm">
            Refresh Data
          </Button>
        </div>

        {/* ===== Dashboard Stats ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard label="Total Leads" value={stats.total} icon={<User size={18} />} />
          <StatCard label="New (Unread)" value={stats.newLeads} color="text-blue-600" icon={<CheckCircle size={18} />} />
          <StatCard label="Companies" value={stats.companies} icon={<Building2 size={18} />} />
          <StatCard label="Facilitators" value={stats.facilitators} icon={<Briefcase size={18} />} />
          <StatCard label="Gold Requests" value={stats.goldRequests} color="text-yellow-600" />
        </div>

        {/* ===== Filters ===== */}
        <div className="flex gap-2 mb-6">
          {["all", "company", "facilitator"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                filterType === type 
                  ? "bg-slate-900 text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {type === "all" ? "All Enquiries" : type + "s"}
            </button>
          ))}
        </div>

        {/* ===== Main Table ===== */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Lead Database</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-12 text-center text-gray-500">Loading leads...</div>
            ) : error ? (
              <div className="p-12 text-center text-red-500">{error}</div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No leads found matching criteria.</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="w-[200px]">Entity Name</TableHead>
                    <TableHead>User Type</TableHead>
                    <TableHead>Goal / Expertise</TableHead>
                    <TableHead>Contact Info</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEnquiries.map((lead) => (
                    <TableRow key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                      {/* Name Column */}
                      <TableCell>
                        <div className="font-semibold text-gray-900">{lead.companyName}</div>
                        <div className="text-xs text-gray-500">CP: {lead.fullName}</div>
                      </TableCell>

                      {/* User Type */}
                      <TableCell>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          lead.userType === 'company' 
                            ? "bg-purple-50 text-purple-700 border-purple-100" 
                            : "bg-orange-50 text-orange-700 border-orange-100"
                        }`}>
                          {lead.userType === 'company' ? <Building2 size={12}/> : <Briefcase size={12}/>}
                          <span className="capitalize">{lead.userType}</span>
                        </span>
                      </TableCell>

                      {/* Details (Goal or Exp) */}
                      <TableCell>
                        {lead.userType === 'company' ? (
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${
                              lead.certificationGoal === 'gold' ? 'bg-yellow-400' :
                              lead.certificationGoal === 'silver' ? 'bg-gray-400' : 'bg-orange-600'
                            }`}></span>
                            <span className="capitalize text-sm font-medium">{lead.certificationGoal}</span>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-500 truncate block w-32" title={lead.experience}>
                            {lead.experience?.substring(0, 25)}...
                          </span>
                        )}
                      </TableCell>

                      {/* Contact */}
                      <TableCell>
                        <div className="text-sm">{lead.phone}</div>
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                          <a href={`mailto:${lead.email}`}>{lead.email}</a>
                        </div>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        <span className={`px-2 py-1 rounded-md text-xs font-semibold ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => openModal(lead)}
                          >
                            <Eye size={16} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDelete(lead._id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* ===== Details Modal ===== */}
        {showModal && selectedEnquiry && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden">
              
              {/* Header */}
              <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{selectedEnquiry.companyName}</h2>
                  <p className="text-sm text-gray-500">Submitted on {new Date(selectedEnquiry.createdAt).toLocaleDateString()}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                  selectedEnquiry.userType === 'company' ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-orange-100 text-orange-700 border-orange-200'
                }`}>
                  {selectedEnquiry.userType}
                </div>
              </div>

              <div className="p-6 grid gap-6">
                
                {/* 1. Contact Info Section */}
                <div className="grid grid-cols-2 gap-4">
                  <DetailItem label="Contact Person" value={selectedEnquiry.fullName} />
                  <DetailItem label="Phone" value={selectedEnquiry.phone} />
                  <DetailItem label="Email" value={selectedEnquiry.email} isLink />
                  {selectedEnquiry.userType === 'company' ? (
                    <DetailItem label="Udyam Status" value={selectedEnquiry.udyamStatus} />
                  ) : null}
                </div>

                {/* 2. Specific Info Section */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {selectedEnquiry.userType === 'company' ? (
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Certification Goal</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedEnquiry.certificationGoal === 'gold' ? 'bg-yellow-400' :
                          selectedEnquiry.certificationGoal === 'silver' ? 'bg-gray-400' : 'bg-orange-600'
                        }`}></div>
                        <span className="font-medium text-lg capitalize">{selectedEnquiry.certificationGoal} Certification</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Experience & Expertise</span>
                      <p className="mt-1 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {selectedEnquiry.experience}
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. CRM Actions Section */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle size={16} className="text-blue-600"/> Admin Actions
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-gray-500 mb-1 block">Lead Status</label>
                      <select 
                        value={statusUpdate}
                        onChange={(e) => setStatusUpdate(e.target.value)}
                        className="w-full p-2 border rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="text-xs font-medium text-gray-500 mb-1 block">Admin Notes</label>
                      <textarea
                        value={adminNotes}
                        onChange={(e) => setAdminNotes(e.target.value)}
                        placeholder="Add internal notes about this lead..."
                        className="w-full p-2 border rounded-md text-sm min-h-[80px] focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t">
                <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button onClick={handleUpdateStatus} disabled={isUpdating} className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isUpdating ? "Saving..." : "Save Changes"}
                </Button>
              </div>

            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

// --- Helper Components ---

const StatCard = ({ label, value, color = "text-gray-900", icon }) => (
  <Card>
    <CardContent className="p-4 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
        {icon && <div className="text-gray-400 opacity-50">{icon}</div>}
      </div>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </CardContent>
  </Card>
);

const DetailItem = ({ label, value, isLink }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    {isLink ? (
      <a href={`mailto:${value}`} className="font-medium text-blue-600 hover:underline">{value}</a>
    ) : (
      <p className="font-medium text-gray-900">{value || "-"}</p>
    )}
  </div>
);

export default AdminZedEnquiry;