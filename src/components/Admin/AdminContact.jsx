import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Save,
  Edit2,
  Trash2,
  MessageSquare,
  Users,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sidebar from "./Sidebar";

const AdminContact = () => {
  
  const [contactInfo, setContactInfo] = useState({
    address: "123 Training Hub, Education Street, Mumbai, Maharashtra 400001",
    phone: "+91-1234567890",
    email: "contact@traininghub.com",
    businessHours: "Mon - Fri: 9:00 AM - 6:00 PM",
  });

  
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      type: "student",
      message: "Interested in training programs",
      date: "2024-03-15",
      status: "new",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543210",
      type: "training_center",
      message: "Partnership inquiry",
      date: "2024-03-14",
      status: "responded",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(contactInfo);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setContactInfo(editedInfo);
    setIsEditing(false);
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((enquiry) => enquiry.id !== id));
  };

  const updateEnquiryStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((enquiry) =>
        enquiry.id === id ? { ...enquiry, status } : enquiry
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar/>
     
      <div className="flex-1 px-6 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Contact Management
        </h1>

        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Contact Information</CardTitle>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <Edit2 size={20} />
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="p-2 text-green-600 transition-colors rounded-full hover:bg-green-50"
              >
                <Save size={20} />
              </button>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="flex-shrink-0 text-orange-600" />
                {isEditing ? (
                  <input
                    name="address"
                    value={editedInfo.address}
                    onChange={handleInfoChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{contactInfo.address}</p>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="flex-shrink-0 text-orange-600" />
                {isEditing ? (
                  <input
                    name="phone"
                    value={editedInfo.phone}
                    onChange={handleInfoChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{contactInfo.phone}</p>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="flex-shrink-0 text-orange-600" />
                {isEditing ? (
                  <input
                    name="email"
                    value={editedInfo.email}
                    onChange={handleInfoChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{contactInfo.email}</p>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="flex-shrink-0 text-orange-600" />
                {isEditing ? (
                  <input
                    name="businessHours"
                    value={editedInfo.businessHours}
                    onChange={handleInfoChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{contactInfo.businessHours}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="text-orange-600" />
              <span>Recent Enquiries</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enquiries.map((enquiry) => (
                  <TableRow key={enquiry.id}>
                    <TableCell>{enquiry.date}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{enquiry.name}</p>
                        <p className="text-sm text-gray-500">{enquiry.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">{enquiry.type}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {enquiry.message}
                    </TableCell>
                    <TableCell>
                      <select
                        value={enquiry.status}
                        onChange={(e) =>
                          updateEnquiryStatus(enquiry.id, e.target.value)
                        }
                        className="px-3 py-1 text-sm border border-gray-300 rounded-full"
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="responded">Responded</option>
                        <option value="closed">Closed</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger>
                            <button className="p-2 text-blue-600 transition-colors rounded-full hover:bg-blue-50">
                              <MessageSquare size={16} />
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Enquiry Details</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4 space-y-4">
                              <div>
                                <h4 className="font-medium">From</h4>
                                <p>
                                  {enquiry.name} ({enquiry.email})
                                </p>
                              </div>
                              <div>
                                <h4 className="font-medium">Message</h4>
                                <p>{enquiry.message}</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <button
                          onClick={() => deleteEnquiry(enquiry.id)}
                          className="p-2 text-red-600 transition-colors rounded-full hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminContact;
