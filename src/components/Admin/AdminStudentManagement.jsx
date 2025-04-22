import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const API_URL = config.API_URL;

const AdminStudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${API_URL}/exams/students/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filter students by first name, last name, or contact number
  useEffect(() => {
    const filtered = students.filter((student) =>
      (
        `${student.firstName || ""} ${student.lastName || ""}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (student.contactNumber || "").toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
  }, [searchTerm, students]);

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div className="flex bg-[#f8f9fc] min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 px-10 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
            Student Management
          </h1>
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by name or contact number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2 shadow-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
            />
          </div>
        </div>

        <Card className="shadow-md border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-gray-800">
              Students List
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-gray-500 py-10">Loading students...</p>
            ) : (
              <>
                <Table className="rounded-md overflow-hidden">
                  <TableHeader className="bg-gray-100 text-sm text-gray-600">
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Aadhaar Number</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentStudents.map((student) => (
                      <TableRow
                        key={student._id}
                        className="hover:bg-blue-50 cursor-pointer transition duration-150"
                        onClick={() => navigate(`/admin-student-management/students/${student._id}`)}
                      >
                        <TableCell className="font-medium">
                          {`${student.firstName || ""} ${student.lastName || ""}`.trim() || "-"}
                        </TableCell>
                        <TableCell>{student.contactNumber || "-"}</TableCell>
                        <TableCell>{student.email || "-"}</TableCell>
                        <TableCell>{student.aadharNumber || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination */}
                <div className="mt-6 flex justify-center items-center space-x-2">
                  <Button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    variant="outline"
                    className="px-4 py-1"
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-gray-600 font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    variant="outline"
                    className="px-4 py-1"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminStudentManagement;
