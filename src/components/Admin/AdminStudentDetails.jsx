// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import config from "@/config";
// import { Button } from "@/components/ui/button";

// const API_URL = config.API_URL;

// const AdminStudentDetails = () => {
//   const { studentId } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`${API_URL}/exams/students/${studentId}`);
//         if (!res.ok) throw new Error("Failed to fetch student");

//         const data = await res.json();
//         setStudent(data);
//       } catch (error) {
//         console.error("Error fetching student details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [studentId]);

//   return (
//     <div className="flex bg-[#f8f9fc] min-h-screen">
//       <Sidebar />
//       <div className="ml-64 flex-1 px-10 py-8">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6 tracking-tight">
//           Student Details
//         </h1>

//         {/* Student Info Card */}
//         <Card className="mb-8 border border-gray-200 shadow-sm">
//           <CardHeader>
//             <CardTitle className="text-lg text-gray-700">Basic Information</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {loading ? (
//               <Skeleton className="h-32 w-full rounded-md" />
//             ) : (
//               <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
//                 <div><span className="font-semibold">First Name:</span> {student?.firstName || "-"}</div>
//                 <div><span className="font-semibold">Last Name:</span> {student?.lastName || "-"}</div>
//                 <div><span className="font-semibold">Email:</span> {student?.email || "-"}</div>
//                 <div><span className="font-semibold">Contact Number:</span> {student?.contactNumber || "-"}</div>
//                 <div><span className="font-semibold">Aadhar Number:</span> {student?.aadharNumber || "-"}</div>
//                 <div><span className="font-semibold">Age:</span> {student?.age || "-"}</div>
//                 <div><span className="font-semibold">Exam Status:</span> {student?.examStatus ? "Completed" : "Pending"}</div>
//                 <div><span className="font-semibold">Created At:</span> {new Date(student?.createdAt).toLocaleString()}</div>
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Assigned Exams */}
//         <Card className="border border-gray-200 shadow-sm">
//           <CardHeader>
//             <CardTitle className="text-lg text-gray-700">Assigned Exams</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {loading ? (
//               <Skeleton className="h-24 w-full rounded-md" />
//             ) : student?.assignedExams?.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {student.assignedExams.map((exam) => (
//                   <div
//                     key={exam._id}
//                     className="border border-gray-200 bg-white p-4 rounded-md shadow hover:shadow-md cursor-pointer transition-all"
//                     onClick={() =>
//                       navigate(`/admin-exam-management/${exam._id}/${student._id}/details`)
//                     }
//                   >
//                     <h3 className="text-md font-semibold text-blue-600 mb-1">
//                       {exam.title || "Untitled Exam"}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {exam.description?.slice(0, 80) || "No description provided."}
//                     </p>
//                     <Button
//                       className="mt-3 text-sm"
//                       variant="outline"
//                     >
//                       View Exam Details
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500">No exams assigned to this student.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AdminStudentDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const API_URL = config.API_URL;

const AdminStudentDetails = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`${API_URL}/exams/students/${studentId}`);
        if (!res.ok) throw new Error("Failed to fetch student");

        const data = await res.json();
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  return (
    <div className="flex bg-[#f9fbfd] min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 px-10 py-8">
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Student Details</h2>
          <Button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-blue-600 text-white"
          >
            <ArrowLeft size={18} />
            Back
          </Button>
        </div>

        {/* Student Info */}
        <Card className="mb-8 border border-gray-200 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-gray-700">Basic Information</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-32 w-full rounded-md" />
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                <div><span className="font-semibold">First Name:</span> {student?.firstName || "-"}</div>
                <div><span className="font-semibold">Last Name:</span> {student?.lastName || "-"}</div>
                <div><span className="font-semibold">Email:</span> {student?.email || "-"}</div>
                <div><span className="font-semibold">Contact Number:</span> {student?.contactNumber || "-"}</div>
                <div><span className="font-semibold">Aadhar Number:</span> {student?.aadharNumber || "-"}</div>
                <div><span className="font-semibold">Age:</span> {student?.age || "-"}</div>
                <div><span className="font-semibold">Created At:</span> {new Date(student?.createdAt).toLocaleString()}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Assigned Exams */}
        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-gray-700">Assigned Exams</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-24 w-full rounded-md" />
            ) : student?.assignedExams?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {student.assignedExams.map((exam) => (
                  <div
                    key={exam._id}
                    className="p-4 border border-gray-200 rounded-md shadow-sm bg-white hover:shadow-md transition cursor-pointer"
                  >
                    <h3 className="text-md font-semibold text-blue-600">{exam.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{exam.description?.slice(0, 100) || "No description."}</p>
                    <div className="text-xs text-gray-500 mt-3">
                      <p><strong>Start:</strong> {new Date(exam.startTime).toLocaleString()}</p>
                      <p><strong>End:</strong> {new Date(exam.endTime).toLocaleString()}</p>
                      <p><strong>Duration:</strong> {exam.duration} minutes</p>
                    </div>
                    <Button variant="outline" className="mt-3 w-full text-sm" disabled>
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No exams assigned to this student.</p>
            )}
          </CardContent>
        </Card>

        {/* Completed Exams */}
        <Card className="border border-gray-200 shadow-sm bg-white mt-8">
          <CardHeader>
            <CardTitle className="text-lg text-gray-700">Completed Exams</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-24 w-full rounded-md" />
            ) : student?.completedExams?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {student.completedExams.map((exam) => (
                  <div
                    key={exam._id}
                    className="p-4 border border-gray-200 rounded-md shadow-sm bg-white hover:shadow-md transition cursor-pointer"
                    onClick={() => navigate(`/admin-exam-management/${exam._id}/${student._id}/details`)}
                  >
                    <h3 className="text-md font-semibold text-blue-600">{exam.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{exam.description?.slice(0, 100) || "No description."}</p>
                    <div className="text-xs text-gray-500 mt-3">
                      <p><strong>Start:</strong> {new Date(exam.startTime).toLocaleString()}</p>
                      <p><strong>End:</strong> {new Date(exam.endTime).toLocaleString()}</p>
                      <p><strong>Duration:</strong> {exam.duration} minutes</p>
                    </div>
                    <Button variant="outline" className="mt-3 w-full text-sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No completed exams for this student.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminStudentDetails;
