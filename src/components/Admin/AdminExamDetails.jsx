import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusCircle, Download, Upload, Trash2 } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Dialog } from "@headlessui/react";
import config from "@/config"
import moment from "moment";
const API_URL = config.API_URL;
const COLORS = ["#4ade80", "#f87171"];



const AdminExamDetails = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [examDetails, setExamDetails] = useState({});
  const [chartData, setChartData] = useState([]);
  // const [examQuestions, setExamQuestions] = useState([]);
  const [examStudents, setExamStudents] = useState([]);
  const [examResult, setExamResult] = useState([]);
  const [examFeedback, setExamFeedback] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isBulkUploadQuestionOpen, setIsBulkUploadQuestionOpen] = useState(false);
  const [isBulkUploadStudentOpen, setIsBulkUploadStudentOpen] = useState(false);
  const [studentFile, setStudentFile] = useState(null);
  const [questionFile, setQuestionFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [newStudent, setNewStudent] = useState({
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    contactNumber: "",
    aadharNumber: "",
  });
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    options: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ],
    marks: 1,
  });
  

  useEffect(() => {
    try {
      const fetchExamDetails = async () => {
        const response = await fetch(`${API_URL}/exams/${examId}`);
        if(!response.ok){
          setError("Unable to Fetch Exam Details");
          console.error("Unable to Fetch Exam Details")
        }
        const data = await response.json();
        setExamDetails(data);
      }
      const fetchExamStudents = async () => {
        const response = await fetch(`${API_URL}/exams/${examId}/students/`);
        if(!response.ok){
          setError("Unable to Fetch Exam Students");
          console.error("Unable to Fetch Exam Details")
        }
        const data = await response.json();
        setExamStudents(data);
      }
      const fetchExamResults = async () => {
        const response = await fetch(`${API_URL}/exams/${examId}/result/`);
        if(!response.ok){
          setError("Unable to Fetch Exam Result");
          console.error("Unable to Fetch Exam Details")
        }
        const data = await response.json();
        setExamResult(data);
        if(data.length > 0){
          const passed = data.filter(result => result.score >= result.totalMarks * 0.5).length;
          const failed = data.length - passed;
  
          setChartData([
            { name: "Passed", value: passed },
            { name: "Failed", value: failed },
          ]);
        }
      }
      const fetchExamFeedback = async () => {
        const response = await fetch(`${API_URL}/exams/${examId}/feedbacks`);
        if(!response.ok){
          setError("Unable to Fetch Exam Feedback");
          console.error("Unable to Fetch Exam Feedback")
        }
        const data = await response.json();
        setExamFeedback(data);
      }

      fetchExamDetails();
      fetchExamStudents();
      fetchExamResults();
      fetchExamFeedback();
    } catch (error) {
      console.error(error);
    }
    
  }, []);



  const handleAddQuestion = async () => {
    const { questionText, options, marks } = newQuestion;
  
    // Validate the input
    const allFieldsFilled = questionText.trim() !== "" &&
      options.every((opt) => opt.text.trim() !== "");
    const hasCorrectAnswer = options.some((opt) => opt.isCorrect);
  
    if (!allFieldsFilled || !hasCorrectAnswer) {
      alert("Please fill all fields and select a correct answer.");
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/exams/${examId}/add-question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add question");
      }
  
      const data = await response.json();
      
      setExamDetails(data.exam);
  
      // Reset the form
      setNewQuestion({
        questionText: "",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
        marks: 1,
      });
  
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  const handleBulkStudentUpload = () => {
    const file = studentFile;
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
        const validStudents = jsonData
          .filter(
            (s) =>
              s["First Name"]?.toString().trim() &&
              s["Last Name"]?.toString().trim() &&
              s["Contact Number"]?.toString().trim()
          )
          .map((s) => ({
            firstName: s["First Name"]?.toString().trim(),
            lastName: s["Last Name"]?.toString().trim(),
            contactNumber: s["Contact Number"]?.toString().trim(),
            email: s.Email?.toString().trim() || null,
            age: s.Age ? parseInt(s.Age) : null,
            aadharNumber: s["Aadhaar Number"]?.toString().trim() || null,
          }));
  
        if (validStudents.length === 0) {
          alert("No valid student entries found in the file.");
          return;
        }
  
        setUploading(true);
        setUploadProgress(10); // Starting
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/exams/${examId}/add-students-bulk`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
  
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(percentComplete);
          }
        };
  
        xhr.onload = () => {
          setUploading(false);
          setUploadProgress(0);
          if (xhr.status >= 200 && xhr.status < 300) {
            alert(`${validStudents.length} students uploaded successfully.`);
          } else {
            console.error("Upload failed:", xhr.responseText);
            alert("Failed to upload students.");
          }
        };
  
        xhr.onerror = () => {
          setUploading(false);
          setUploadProgress(0);
          alert("An error occurred during the upload.");
        };
  
        xhr.send(JSON.stringify({ students: validStudents }));
      } catch (err) {
        console.error("Error:", err);
        setUploading(false);
        setUploadProgress(0);
        alert("An error occurred while processing the file.");
      } finally {
        setUploadProgress(0);
        setStudentFile(null);
        setIsBulkUploadStudentOpen(false);
      }
    };
  
    reader.readAsArrayBuffer(file);
  };

  const handleSampleStudentExcelDownload = () => {
    const sampleData = [
      {
        "First Name": "John",
        "Last Name": "Doe",
        "Contact Number": "9988776655",
        Email: "johndoe@example.com",
        Age: 20,
        "Aadhaar Number": "123456789012",
      },
    ];
  
    const ws = XLSX.utils.json_to_sheet(sampleData);
  
    // Set custom column widths for better readability
    ws["!cols"] = [
      { wch: 15 }, // First Name
      { wch: 15 }, // Last Name
      { wch: 18 }, // Contact Number
      { wch: 25 }, // Email
      { wch: 10 }, // Age
      { wch: 20 }, // Aadhaar Number
    ];
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students_Format");
  
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
  
    saveAs(data, "Sample_Student_Format.xlsx");
  };

  const handleSampleQuestionExcelDownload = () => {
    const sampleQuestions = [
      {
        "Question Text": "What is the capital of France?",
        "Option A": "Berlin",
        "Option B": "Madrid",
        "Option C": "Paris",
        "Option D": "Rome",
        "Correct Answer": "C",
      },
    ];
  
    const ws = XLSX.utils.json_to_sheet(sampleQuestions);
  
    // Set custom column widths for better readability
    ws["!cols"] = [
      { wch: 50 }, // Question Text
      { wch: 20 }, // Option A
      { wch: 20 }, // Option B
      { wch: 20 }, // Option C
      { wch: 20 }, // Option D
      { wch: 15 }, // Correct Answer
    ];
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Questions_Format");
  
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
  
    saveAs(data, "Sample_Question_Format.xlsx");
  };
  
  const handleBulkQuestionUpload = () => {
    const file = questionFile;
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
        const validQuestions = jsonData
          .filter(
            (q) =>
              q["Question Text"]?.toString().trim() &&
              q["Option A"]?.toString().trim() &&
              q["Option B"]?.toString().trim() &&
              q["Option C"]?.toString().trim() &&
              q["Option D"]?.toString().trim() &&
              q["Correct Answer"]?.toString().trim()
          )
          .map((q) => {
            const correct = q["Correct Answer"].toUpperCase().trim();
            const options = ["A", "B", "C", "D"].map((label) => ({
              text: q[`Option ${label}`]?.toString().trim(),
              isCorrect: label === correct,
            }));
  
            return {
              questionText: q["Question Text"].toString().trim(),
              options,
              marks: q.Marks ? parseInt(q.Marks) : 1,
            };
          });
  
        if (validQuestions.length === 0) {
          alert("No valid questions found in the file.");
          return;
        }
  
        setUploading(true);
        setUploadProgress(10); // Starting
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/exams/${examId}/add-questions-bulk`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
  
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(percentComplete);
          }
        };
  
        xhr.onload = () => {
          setUploading(false);
          setUploadProgress(0);
          if (xhr.status >= 200 && xhr.status < 300) {
            const { message ,exam } = JSON.parse(xhr.responseText);
            alert(`${validQuestions.length} questions uploaded successfully.`);
            setExamDetails(exam);
          } else {
            console.error("Upload failed:", xhr.responseText);
            alert("Failed to upload questions.");
          }
        };
  
        xhr.onerror = () => {
          setUploading(false);
          setUploadProgress(0);
          alert("An error occurred during the upload.");
        };
  
        xhr.send(JSON.stringify({ questions: validQuestions }));
        
      } catch (err) {
        console.error("Error:", err);
        setUploading(false);
        setUploadProgress(0);
        alert("An error occurred while processing the file.");
      } finally {
        setUploadProgress(0);
        setQuestionFile(null);
        setIsBulkUploadQuestionOpen(false);
      }
    };
  
    reader.readAsArrayBuffer(file);
  };
  

  const handleExportQuestions = () => {
    if (!examDetails?.questions?.length) {
      alert("No questions available to export.");
      return;
    }

    const getAlphabetForOption = (ind) => {
      if(ind == 0) return "A";
      if(ind == 1) return "B";
      if(ind == 2) return "C";
      if(ind == 3) return "D";
    }
  
    const formattedData = examDetails.questions.map((q, index) => {
      const correctOptions = q.options
        .map((opt, idx) => (opt.isCorrect ? `${getAlphabetForOption(idx)}` : null))
        .filter(Boolean)
        .join(", "); // Handles multiple correct options
  
      return {
        "S.No": index + 1,
        "Question Text": q.questionText,
        "A": q.options[0]?.text || "",
        "B": q.options[1]?.text || "",
        "C": q.options[2]?.text || "",
        "D": q.options[3]?.text || "",
        "Correct Option": correctOptions,
        "Marks": q.marks || 1,
      };
    });
  
    const ws = XLSX.utils.json_to_sheet(formattedData);
  
    // Set neat column widths
    ws["!cols"] = [
      { wch: 6 },   // S.No
      { wch: 50 },  // Question Text
      { wch: 25 },  // Option 1
      { wch: 25 },  // Option 2
      { wch: 25 },  // Option 3
      { wch: 25 },  // Option 4
      { wch: 20 },  // Correct Option(s)
      { wch: 10 },  // Marks
    ];
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Questions");
  
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
  
    const fileName = `${examDetails.title.replace(/\s/g, "_")}_Questions.xlsx`;
    saveAs(data, fileName);
  };
  
  const handleExportStudents = () => {
    if (!examStudents?.length) {
      alert("No students available to export.");
      return;
    }
  
    const formattedData = examStudents.map((student, index) => ({
      "First Name": student.firstName || "",
      "Last Name": student.lastName || "",
      "Contact Number": student.contactNumber || "",
      "Password": "Password@123",
      "Email": student.email || "",
      "Age": student.age || "",
      "Aadhaar Number": student.aadharNumber || "",
    }));
  
    const ws = XLSX.utils.json_to_sheet(formattedData);
  
    // Set neat column widths
    ws["!cols"] = [
      { wch: 20 }, // First Name
      { wch: 20 }, // Last Name
      { wch: 18 }, // Contact Number
      { wch: 18 }, // Password
      { wch: 30 }, // Email
      { wch: 10 }, // Age
      { wch: 25 }, // Aadhaar Number
    ];
  
    // Center align all cells
    const range = XLSX.utils.decode_range(ws["!ref"]);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[cellRef]) continue;
        if (!ws[cellRef].s) ws[cellRef].s = {};
        ws[cellRef].s.alignment = { vertical: "center", horizontal: "center", wrapText: true };
      }
    }
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
  
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array", cellStyles: true });
    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
  
    const fileName = `${examDetails.title.replace(/\s/g, "_")}_Students.xlsx`;
    saveAs(data, fileName);
  };
  

  
  
  const handleExportResults = () => {
    if (!examResult?.length || !examDetails || !examStudents?.length) {
      alert("No results, student data, or exam details available to export.");
      return;
    }
  
    const studentMap = new Map();
    examStudents.forEach((student) => {
      studentMap.set(student._id, student);
    });
  
    const feedbackMap = new Map();
    examFeedback?.forEach((fb) => {
      feedbackMap.set(fb.studentId, fb);
    });
  
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Contact Number",
      "Aadhaar Number",
      "Age",
      "Score",
      "Total Marks",
      "Completed At",
      "Status",
      "Training Rating",
      "Exam Rating",
      "Comments",
    ];
  
    const dataRows = examResult.map((res) => {
      const student = studentMap.get(res.studentId);
      const feedback = feedbackMap.get(res.studentId) || {};
  
      return [
        student?.firstName || "",
        student?.lastName || "",
        student?.email || "",
        student?.contactNumber || "",
        student?.aadharNumber || "",
        student?.age || "",
        res.score,
        res.totalMarks,
        moment(res.completedAt).format("DD-MM-YYYY hh:mm A"),
        res.status,
        feedback.trainingRating || "-",
        feedback.examRating || "-",
        feedback.comments || "-",
      ];
    });
  
    const ws = XLSX.utils.aoa_to_sheet([
      [`Exam Title: ${examDetails.title}`],
      [`Start Time: ${moment(examDetails.startTime).format("DD-MM-YYYY hh:mm A")}`],
      [`End Time: ${moment(examDetails.endTime).format("DD-MM-YYYY hh:mm A")}`],
      [`Duration: ${examDetails.duration} mins`],
      [`Total Questions: ${examDetails.questions?.length || 0}`],
      [],
      headers,
      ...dataRows,
    ]);
  
    const headerRowIndex = 6;
    headers.forEach((_, colIndex) => {
      const cellRef = XLSX.utils.encode_cell({ r: headerRowIndex, c: colIndex });
      if (ws[cellRef]) {
        ws[cellRef].s = {
          fill: { bgColor: { rgb: "FFFF00" } },
          font: { bold: true },
          alignment: { horizontal: "center" },
        };
      }
    });
  
    const startRow = 8;
    dataRows.forEach((row, index) => {
      const status = row[9];
      if (status === "Fail") {
        for (let col = 0; col < row.length; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: startRow + index, c: col });
          if (ws[cellRef]) {
            ws[cellRef].s = {
              fill: { fgColor: { rgb: "D3D3D3" } },
            };
          }
        }
      }
    });
  
    ws["!cols"] = [
      { wch: 20 }, // First Name
      { wch: 20 }, // Last Name
      { wch: 30 }, // Email
      { wch: 18 }, // Contact Number
      { wch: 25 }, // Aadhaar Number
      { wch: 10 }, // Age
      { wch: 10 }, // Score
      { wch: 15 }, // Total Marks
      { wch: 25 }, // Completed At
      { wch: 10 }, // Status
      { wch: 15 }, // Training Rating
      { wch: 15 }, // Exam Rating
      { wch: 40 }, // Comments
    ];
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Results");
  
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });
  
    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
  
    const fileName = `${examDetails.title.replace(/\s/g, "_")}_Results.xlsx`;
    saveAs(blob, fileName);
  };
    

  // const handleExportResults = () => {
  //   const ws = XLSX.utils.json_to_sheet(exam.students || []);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Results");
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const data = new Blob([excelBuffer], {
  //     type: "application/octet-stream",
  //   });
  //   saveAs(data, `${exam.examName.replace(/\s/g, "_")}_Results.xlsx`);
  // };

  const handleAddStudent = async () => {
    const {firstName, lastName, contactNumber } = newStudent;
  
    if ( !firstName || !lastName || !contactNumber) {
      alert("Please fill all required fields.");
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/exams/${examId}/add-student`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
  
      if (!response.ok) throw new Error("Failed to add student");
  
      const addedStudent = await response.json();
      const student = addedStudent.student;
      // toast.success("Student added successfully");
      setExamStudents((prev) => [...prev, student]);
      setIsAddStudentOpen(false);
      setNewStudent({
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        contactNumber: "",
        aadharNumber: "",
      });
    } catch (err) {
      console.error(err);
      // toast.error("Error adding student");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const response = await fetch(`${API_URL}/exams/${examId}/students/${id}/delete-student`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete student");
        }
  
        // Update frontend state only if deletion is successful
        setExamStudents((prev) => prev.filter((student) => student._id !== id));
        // toast.success("Exam deleted successfully!");
      } catch (error) {
        console.error("Error deleting student:", error);
        // toast.error("Failed to delete exam. Please try again.");
      }
    }
  };

  const handleDeleteQuestion = async (id, ind) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        const response = await fetch(`${API_URL}/exams/${examId}/questions/${id}/delete-question`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete question");
        }
  
        const updatedQuestions = [...examDetails.questions];
        updatedQuestions.splice(ind, 1);
        setExamDetails({ ...examDetails, questions: updatedQuestions });
      } catch (error) {
        console.error("Error deleting question:", error);
        // toast.error("Failed to delete exam. Please try again.");
      }
    }
  };

  const formatDateTime = (isoString) => {
    if (!isoString) return "Invalid Date";
  
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "Invalid Date";
  
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
  
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      month: "long",
      year: "numeric",
    }).format(date);
  
    const formattedTime = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  
    return `${day}${suffix} ${formattedDate} - ${formattedTime}`;
  };
  
  

  if (!examDetails) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-6 text-center text-gray-500">Exam not found</div>
      </div>
    );
  }

  const isExamFinished = moment().isAfter(examDetails.endTime);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8 bg-[#f9fafb] min-h-screen overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Exam Overview</h2>
          <Button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-blue-600 text-white"
          >
            <ArrowLeft size={18} />
            Back
          </Button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{examDetails.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>
                <strong>Description:</strong> {examDetails.description}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {examDetails.startTime ? formatDateTime(examDetails.startTime) : "N/A"}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {examDetails.endTime ? formatDateTime(examDetails.endTime) : "N/A"}
              </p>

              <p>
                <strong>Duration:</strong> {examDetails.duration} min
              </p>
              <p>
                <strong>Total Questions:</strong> {examDetails.questions?.length || 0}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Result Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                {/* <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    dataKey="value"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart> */}
                {isExamFinished || chartData.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={60}
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      ) : (
        <div>Exam not finished yet.</div>
      )}
              </ResponsiveContainer>
              <Button
              onClick={handleExportResults}
              className="flex items-center w-full gap-2 bg-yellow-600 text-white">
              <Download size={18} />
              Export Results
            </Button>
            </CardContent>
          </Card>
        </div>

        

        {/* Students Table */}
        <div className="flex justify-end gap-4 mb-4 mx-2 items-center">
          <Button
              onClick={() => setIsAddStudentOpen(true)}
              className="flex items-center gap-2 bg-black text-white">
              <PlusCircle size={18} />
              Add Students
          </Button>

          <Button
              onClick={() => setIsBulkUploadStudentOpen(true)}
              className="flex items-center gap-2 bg-yellow-500 text-white">
          <Upload size={18} />
              Import Students
          </Button>

          <Button
              onClick={handleExportStudents}
              className="flex items-center gap-2 bg-blue-600 text-white">
              <Download size={18} />
              Export Students
          </Button>
        </div>


        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Participating Students</CardTitle>
            <span className="text-sm text-gray-500">
              Total: {examStudents?.length || 0}
            </span>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            {examStudents?.length > 0 ? (
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Contact Number</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Feedback</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {examStudents.map((student, index) => {
                  const studentResult = examResult.find(
                    (result) => result.studentId === student._id
                  );
                  const status = studentResult ? studentResult.status : "-";

                  return (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">{student.firstName + " " + student.lastName}</td>
                      <td className="px-4 py-2">+91 {student.contactNumber}</td>
                      <td className="px-4 py-2">{student.email}</td>
                      <td className="px-4 py-2">
                        {status === "Pass" ? (
                          <span className="text-green-600 font-semibold">PASSED</span>
                        ) : status === "Fail" ? (
                          <span className="text-red-600 font-semibold">FAILED</span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                      <td className="px-4 py-2">
  {(() => {
    const feedback = examFeedback.find(
      (fb) => fb.studentId === student._id
    );
    if (!feedback) return <span className="text-gray-500">-</span>;

    const averageRating = (feedback.trainingRating + feedback.examRating) / 2;

    return (
      <>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= averageRating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.951-.69l1.285-3.967z" />
          </svg>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-1 italic">
  {feedback.comments}
</p>

      </>
    );
  })()}
</td>
                      <td className="px-4 py-2">
                        <Button
                          onClick={() => handleDelete(student._id)}
                          className="p-2 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            ) : (
              <p className="text-sm text-gray-500">No students data available.</p>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mb-4 items-center">
            <Button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-yellow-500 text-white"
            >
                <PlusCircle size={18} />
                Add Question
            </Button>

            <Button
                onClick={()=> setIsBulkUploadQuestionOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white"
            >
                <Upload size={18} />
                Import Questions
            </Button>
            

            <Button
                onClick={handleExportQuestions}
                className="flex items-center gap-2 bg-black text-white"
            >
                <Download size={18} />
                Export Questions
            </Button>

        </div>


        {/* Questions Section */}
        {/* Questions Section */}
<Card>
  <CardHeader>
    <CardTitle className="text-lg text-gray-700 flex justify-between items-center">
      Questions
      <span className="text-sm text-gray-500">
        Total: {examDetails.questions?.length || 0}
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {examDetails.questions?.length > 0 ? (
      examDetails.questions.map((q, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="font-semibold text-gray-800">
              Q{idx + 1}. {q.questionText}
            </div>
            <button
              onClick={() => handleDeleteQuestion(q._id, idx)}
              className="text-red-600 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
          <ul className="ml-4 text-gray-700 space-y-1">
            {q.options.map((opt, i) => (
              <li
                key={i}
                className={`flex items-center ${
                  opt.isCorrect ? "font-bold text-green-700" : ""
                }`}
              >
                <span className="w-6 font-medium">
                  {String.fromCharCode(65 + i)}.
                </span>{" "}
                {opt.text}
              </li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-sm text-gray-500">No questions added yet.</p>
    )}
  </CardContent>
</Card>

        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-700 flex justify-between items-center">
              Questions
              <span className="text-sm text-gray-500">
                Total: {examDetails.questions?.length || 0}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {examDetails.questions?.length > 0 ? (
              examDetails.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                >
                  <div className="mb-2 font-semibold text-gray-800">
                    Q{idx + 1}. {q.questionText}
                  </div>
                  <ul className="ml-4 text-gray-700 space-y-1">
                    {q.options.map((opt, i) => (
                      <li
                        key={i}
                        className={`flex items-center ${
                          opt.isCorrect ? "font-bold text-green-700" : ""
                        }`}
                      >
                        <span className="w-6 font-medium">
                          {String.fromCharCode(65 + i)}.
                        </span>{" "}
                        {opt.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No questions added yet.</p>
            )}
          </CardContent>
        </Card> */}

        {/* Add Question Modal */}
        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen bg-black/50 px-4">
            <Dialog.Panel className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl transition-all duration-300">
              <Dialog.Title className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
                Add New Question
              </Dialog.Title>

              <div className="space-y-6">
                {/* Question input */}
                <input
                  type="text"
                  placeholder="Enter your question"
                  className="w-full text-lg font-medium border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  value={newQuestion.questionText}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, questionText: e.target.value })
                  }
                />

                {/* Options with selection */}
                <div className="space-y-4">
                  {newQuestion.options.map((option, index) => {
                    const isSelected = option.isCorrect;
                    return (
                      <div
                        key={index}
                        className={`flex items-center border px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-green-500 bg-green-50 ring-1 ring-green-300 shadow-md"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() => {
                          const updatedOptions = newQuestion.options.map((opt, i) => ({
                            ...opt,
                            isCorrect: i === index,
                          }));
                          setNewQuestion({ ...newQuestion, options: updatedOptions });
                        }}
                      >
                        <div
                          className={`w-5 h-5 rounded-full mr-4 border-2 flex items-center justify-center ${
                            isSelected ? "bg-green-500 border-green-500" : "border-gray-400"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder={`Option ${String.fromCharCode(65 + index)}`}
                          className="flex-1 bg-transparent outline-none text-gray-800 font-medium placeholder-gray-400"
                          value={option.text}
                          onChange={(e) => {
                            const updatedOptions = [...newQuestion.options];
                            updatedOptions[index].text = e.target.value;
                            setNewQuestion({ ...newQuestion, options: updatedOptions });
                          }}
                        />
                      </div>
                    );
                  })}
                </div>


                {/* Validation */}
                {!newQuestion.options.some((opt) => opt.isCorrect) && (
                  <p className="text-sm text-red-500 mt-1">Please select the correct answer</p>
                )}

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full px-6 py-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddQuestion}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-2 shadow-sm"
                  >
                    Add Question
                  </Button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

{/* Add Student Popup */}
<Dialog
  open={isAddStudentOpen}
  onClose={() => setIsAddStudentOpen(false)}
  className="fixed z-50 inset-0 overflow-y-auto"
>
  <div className="flex items-center justify-center min-h-screen bg-black/50 px-4">
    <Dialog.Panel className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl transition-all duration-300">
      <Dialog.Title className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
        Add New Student
      </Dialog.Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Required Fields */}
        <input
          type="text"
          placeholder="First Name*"
          className="input-style"
          value={newStudent.firstName}
          onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name*"
          className="input-style"
          value={newStudent.lastName}
          onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email (optional)"
          className="input-style"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Contact Number*"
          className="input-style"
          value={newStudent.contactNumber}
          onChange={(e) => setNewStudent({ ...newStudent, contactNumber: e.target.value })}
        />

        {/* Optional Fields */}
        <input
          type="number"
          placeholder="Age (optional)"
          className="input-style"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Aadhar Number (optional)"
          className="input-style"
          value={newStudent.aadharNumber}
          onChange={(e) => setNewStudent({ ...newStudent, aadharNumber: e.target.value })}
        />
      </div>

      <div className="flex justify-end gap-3 pt-6">
        <Button
          variant="outline"
          onClick={() => setIsAddStudentOpen(false)}
          className="rounded-full px-6 py-2"
        >
          Cancel
        </Button>
        <Button
          onClick={handleAddStudent}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-2 shadow-sm"
        >
          Add Student
        </Button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>


{/* Bulk Upload Questions popup */}
<Dialog
  open={isBulkUploadQuestionOpen}
  onClose={() => setIsBulkUploadQuestionOpen(false)}
  className="fixed z-50 inset-0 overflow-y-auto"
>
  <div className="flex items-center justify-center min-h-screen bg-black/50 px-4">
    <Dialog.Panel className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl transition-all duration-300 relative">
      <Dialog.Title className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
        📤 Bulk Upload Questions
      </Dialog.Title>

      <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl px-5 py-4 border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            Upload a CSV or Excel file with question details. Ensure the file is formatted as expected.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li>Question text</li>
            <li>Option A</li>
            <li>Option B</li>
            <li>Option C</li>
            <li>Option D</li>
            <li>Correct answer</li>
          </ul>
        </div>

        {/* File Input */}
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Excel File (.csv or .xlsx)</label>
          <input
            type="file"
            accept=".csv,.xlsx"
            className="w-full text-sm border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setQuestionFile(e.target.files[0])}
          />
        </div>

        {/* Sample File Download */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Need help formatting?</p>
          <Button
            onClick={handleSampleQuestionExcelDownload}
            className="bg-blue-300 hover:bg-blue-500 text-white font-semibold rounded-full px-4 py-2 text-sm shadow-sm"
          >
            Download Sample Excel
          </Button>
        </div>
      </div>

      {uploading && (
        <div className="w-full mt-4">
          <div className="text-sm text-gray-600 mb-1">Uploading: {uploadProgress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-8">
        <Button
          variant="outline"
          onClick={() => setIsBulkUploadQuestionOpen(false)}
          className="rounded-full px-6 py-2 text-sm"
        >
          Cancel
        </Button>
        <Button
          onClick={handleBulkQuestionUpload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-2 shadow-md text-sm"
        >
          Upload
        </Button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>



{/* Bulk Student Upload */}
<Dialog
  open={isBulkUploadStudentOpen}
  onClose={() => setIsBulkUploadStudentOpen(false)}
  className="fixed z-50 inset-0 overflow-y-auto"
>
  <div className="flex items-center justify-center min-h-screen bg-black/50 px-4">
    <Dialog.Panel className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl transition-all duration-300 relative">
      <Dialog.Title className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
        📤 Bulk Upload Students
      </Dialog.Title>

      <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl px-5 py-4 border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            Upload an Excel file with student details. Make sure the file follows the correct format.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li>First name</li>
            <li>Last name</li>
            <li>Contact number</li>
            <li>Email</li>
            <li>Age</li>
            <li>Aadhaar number</li>
          </ul>
        </div>

        {/* File Input */}
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Excel File (.csv or .xlsx)</label>
          <input
            type="file"
            accept=".csv,.xlsx"
            className="w-full text-sm border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setStudentFile(e.target.files[0])}
          />
        </div>

        {/* Sample File Download */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Need help formatting?</p>
          <Button
            onClick={handleSampleStudentExcelDownload}
            className="bg-blue-300 hover:bg-blue-500 text-white font-semibold rounded-full px-4 py-2 text-sm shadow-sm"
            >
            Download Sample Excel
          </Button>

        </div>
      </div>

      {uploading && (
  <div className="w-full mt-4">
    <div className="text-sm text-gray-600 mb-1">Uploading: {uploadProgress}%</div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${uploadProgress}%` }}
      ></div>
    </div>
  </div>
)}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-8">
        <Button
          variant="outline"
          onClick={() => setIsBulkUploadStudentOpen(false)}
          className="rounded-full px-6 py-2 text-sm"
        >
          Cancel
        </Button>
        <Button
        onClick={handleBulkStudentUpload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-2 shadow-md text-sm"
        >
          Upload
        </Button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>



      </div>
    </div>
  );
};

export default AdminExamDetails;
