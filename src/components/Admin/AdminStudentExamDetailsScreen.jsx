// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import axios from "axios";
// import { CheckCircle, XCircle, Loader2 } from "lucide-react";
// import config from "@/config";
// import Sidebar from "./Sidebar";

// const API_URL = config.API_URL;

// const StudentExamDetails = () => {
//   const { examId, studentId } = useParams();
//   const [student, setStudent] = useState(null);
//   const [result, setResult] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const [studentRes, resultRes, feedbackRes, examRes] = await Promise.all([
//           fetch(`${API_URL}/exams/students/${studentId}`),
//           fetch(`${API_URL}/exams/results/${studentId}/${examId}`),
//           fetch(`${API_URL}/exams/${examId}/${studentId}/feedback`),
//           fetch(`${API_URL}/exams/${examId}`),
//         ]);

//         // Parse all JSON responses
//         const [studentData, resultData, feedbackData, examData] = await Promise.all([
//           studentRes.json(),
//           resultRes.json(),
//           feedbackRes.json(),
//           examRes.json(),
//         ]);

//         // Set state with fetched data
//         setStudent(studentData);
//         setResult(resultData);
//         setFeedback(feedbackData[0]);
//         setQuestions(examData.questions);
//       } catch (error) {
//         console.error("Error fetching exam details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [studentId, examId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[70vh]">
//         <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//         <Sidebar />

//       {/* Main Content */}
//       <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
//         <h1 className="mb-8 text-3xl font-bold text-gray-800">Student Exam Details</h1>
//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//         {/* Left: Student Details */}
//         <Card className="lg:col-span-1 shadow-md border border-gray-100">
//           <CardHeader>
//             <CardTitle>Student Profile</CardTitle>
//             <CardDescription>Basic information</CardDescription>
//           </CardHeader>
//           <CardContent className="text-sm text-gray-700 space-y-2">
//             <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
//             <p><strong>Email:</strong> {student.email}</p>
//             <p><strong>Contact:</strong> +91 {student.contactNumber}</p>
//             <p><strong>Aadhar:</strong> {student.aadharNumber}</p>
//             <p><strong>Age:</strong> {student.age}</p>
//           </CardContent>
//         </Card>

//         {/* Right: Result and Feedback */}
//         <Card className="lg:col-span-2 shadow-md border border-gray-100">
//           <CardHeader className="flex flex-col lg:flex-row justify-between gap-4">
//             <div>
//               <CardTitle>Exam Result</CardTitle>
//               <CardDescription>Performance summary</CardDescription>
//             </div>
//             <div className="flex items-center gap-4 text-sm">
//               <div>
//                 <strong>Status:</strong>{" "}
//                 {result.status === "Pass" ? (
//                   <span className="text-green-600 font-semibold">PASSED</span>
//                 ) : result.status === "Fail" ? (
//                   <span className="text-red-600 font-semibold">FAILED</span>
//                 ) : (
//                   "-"
//                 )}
//               </div>
//               <div>
//                 <strong>Score:</strong> {result.score}/{result.totalMarks}
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent className="text-sm text-gray-700 space-y-4">
//             <div>
//               <strong>Feedback Comments:</strong>{" "}
//               <p className="italic text-gray-600 mt-1">{feedback?.comments || "-"}</p>
//             </div>
//             <div>
//               <strong>Rating:</strong>{" "}
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <svg
//                   key={star}
//                   className={`w-4 h-4 inline ${
//                     star <=
//                     (feedback?.trainingRating + feedback?.examRating) / 2
//                       ? "text-yellow-500"
//                       : "text-gray-300"
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.184a1 1 000.951-.69l1.285-3.967z" />
//                 </svg>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Bottom: Questions & Answers */}
//         <Card className="col-span-1 lg:col-span-3 mt-6 shadow-md border border-gray-100">
//           <CardHeader>
//             <CardTitle className="text-lg text-gray-700 flex justify-between items-center">
//               Answers Overview
//               <span className="text-sm text-gray-500">
//                 Total: {questions.length}
//               </span>
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {questions.length > 0 ? (
//               questions.map((q, i) => {
//                 const answerObj = result.answers.find(
//                   (a) => a.questionId === q._id
//                 );
//                 const selected = q.options.find(
//                   (opt) => opt._id === answerObj?.selectedOptionId
//                 );
//                 const correct = q.options.find((opt) => opt.isCorrect);

//                 return (
//                   <div key={q._id} className="border p-4 rounded-md bg-gray-50">
//                     <p className="font-medium mb-2">
//                       <span className="text-gray-700">Q{i + 1}:</span> {q.questionText}
//                     </p>
//                     <ul className="ml-4 text-sm text-gray-700 space-y-2">
//                       {q.options.map((opt, idx) => {
//                         const isSelected = opt._id === selected?._id;
//                         const isCorrectOption = opt.isCorrect;
//                         const isAnswerCorrect = isSelected && isCorrectOption;

//                         return (
//                           <li
//                             key={idx}
//                             className={`flex items-center ${
//                               isCorrectOption
//                                 ? "font-bold text-green-700"
//                                 : isSelected
//                                 ? "font-medium text-red-600"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             <span className="w-6 font-medium">
//                               {String.fromCharCode(65 + idx)}.
//                             </span>{" "}
//                             {opt.text}
//                             {isSelected && (
//                               <span className="ml-2">
//                                 {isAnswerCorrect ? (
//                                   <CheckCircle className="inline text-green-600 w-4 h-4" />
//                                 ) : (
//                                   <XCircle className="inline text-red-600 w-4 h-4" />
//                                 )}
//                               </span>
//                             )}
//                             {isCorrectOption && !isSelected && (
//                               <span className="ml-2 text-green-600">
//                                 <CheckCircle className="inline w-4 h-4" />
//                               </span>
//                             )}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                     {!selected && (
//                       <p className="text-sm text-gray-500 italic">Not Attempted</p>
//                     )}
//                   </div>
//                 );
//               })
//             ) : (
//               <p className="text-sm text-gray-500">No questions available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default StudentExamDetails;


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import axios from "axios";
import { CheckCircle, XCircle, Loader2, ArrowLeft } from "lucide-react";
import config from "@/config";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";

const API_URL = config.API_URL;

const StudentExamDetails = () => {
  const { examId, studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [result, setResult] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [studentRes, resultRes, feedbackRes, examRes] = await Promise.all([
          fetch(`${API_URL}/exams/students/${studentId}`),
          fetch(`${API_URL}/exams/results/${studentId}/${examId}`),
          fetch(`${API_URL}/exams/${examId}/${studentId}/feedback`),
          fetch(`${API_URL}/exams/${examId}`),
        ]);

        const [studentData, resultData, feedbackData, examData] = await Promise.all([
          studentRes.json(),
          resultRes.json(),
          feedbackRes.json(),
          examRes.json(),
        ]);

        setStudent(studentData);
        setResult(resultData);
        setFeedback(feedbackData[0]);
        setQuestions(examData.questions);
      } catch (error) {
        console.error("Error fetching exam details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [studentId, examId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="animate-spin w-10 h-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full px-6 py-8 bg-gradient-to-tr from-gray-100 to-white min-h-screen overflow-auto">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Student Exam Details</h2>
            <Button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 bg-blue-600 text-white"
            >
                <ArrowLeft size={18} />
                Back
            </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Card */}
          <Card className="lg:col-span-1 backdrop-blur-md bg-white/60 shadow-xl border border-gray-200 rounded-2xl transition hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Student Profile</CardTitle>
              <CardDescription className="text-gray-500">Basic info overview</CardDescription>
            </CardHeader>
            <CardContent className="text-base space-y-2 text-gray-700">
              <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Contact:</strong> +91 {student.contactNumber}</p>
              <p><strong>Aadhar:</strong> {student.aadharNumber}</p>
              <p><strong>Age:</strong> {student.age}</p>
            </CardContent>
          </Card>

          {/* Result + Feedback */}
          <Card className="lg:col-span-2 backdrop-blur-md bg-white/60 shadow-xl border border-gray-200 rounded-2xl transition hover:shadow-2xl">
            <CardHeader className="flex flex-col lg:flex-row justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-gray-800">Exam Result</CardTitle>
                <CardDescription className="text-gray-500">Performance summary</CardDescription>
              </div>
              <div className="flex flex-wrap gap-6 text-base">
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  {result.status === "Pass" ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                      PASSED
                    </span>
                  ) : result.status === "Fail" ? (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold text-sm">
                      FAILED
                    </span>
                  ) : (
                    "-"
                  )}
                </div>
                <div>
                  <span className="font-medium">Score:</span>{" "}
                  {result.score}/{result.totalMarks}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
  <div>
    <p className="font-medium mb-1">Feedback Comments:</p>
    <p className="italic text-gray-600">{feedback?.comments || "-"}</p>
  </div>

  <div className="flex flex-col lg:flex-row gap-6">
    {/* Training Rating */}
    <div>
      <p className="font-medium mb-1">Training Rating:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={`training-${star}`}
          className={`w-5 h-5 inline ${
            star <= feedback?.trainingRating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.184a1 1 00.951-.69l1.285-3.967z" />
        </svg>
      ))}
    </div>

    {/* Exam Rating */}
    <div>
      <p className="font-medium mb-1">Exam Rating:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={`exam-${star}`}
          className={`w-5 h-5 inline ${
            star <= feedback?.examRating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.184a1 1 00.951-.69l1.285-3.967z" />
        </svg>
      ))}
    </div>
  </div>
</CardContent>

          </Card>
        </div>

        {/* Questions Section */}
        <Card className="mt-10 shadow-xl border border-gray-200 rounded-2xl bg-white/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">
              Answers Overview
              <span className="ml-2 text-sm text-gray-500">({questions.length} Questions)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.length > 0 ? (
              questions.map((q, i) => {
                const answerObj = result.answers.find((a) => a.questionId === q._id);
                const selected = q.options.find((opt) => opt._id === answerObj?.selectedOptionId);
                const correct = q.options.find((opt) => opt.isCorrect);

                return (
                  <div key={q._id} className="border border-gray-200 p-5 rounded-lg bg-white hover:bg-gray-50 transition">
                    <p className="font-medium text-gray-800 mb-3">
                      <span className="text-blue-600">Q{i + 1}:</span> {q.questionText}
                    </p>
                    <ul className="ml-4 text-sm space-y-2">
                      {q.options.map((opt, idx) => {
                        const isSelected = opt._id === selected?._id;
                        const isCorrectOption = opt.isCorrect;
                        const isAnswerCorrect = isSelected && isCorrectOption;

                        return (
                          <li
                            key={idx}
                            className={`flex items-center ${
                              isCorrectOption
                                ? "text-green-700 font-semibold"
                                : isSelected
                                ? "text-red-600 font-medium"
                                : "text-gray-700"
                            }`}
                          >
                            <span className="w-6 font-semibold">{String.fromCharCode(65 + idx)}.</span>
                            {opt.text}
                            {isSelected && (
                              <span className="ml-2">
                                {isAnswerCorrect ? (
                                  <CheckCircle className="inline text-green-600 w-4 h-4" />
                                ) : (
                                  <XCircle className="inline text-red-600 w-4 h-4" />
                                )}
                              </span>
                            )}
                            {!isSelected && isCorrectOption && (
                              <span className="ml-2 text-green-600">
                                <CheckCircle className="inline w-4 h-4" />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    {!selected && (
                      <p className="text-sm text-gray-400 italic mt-2">Not Attempted</p>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500">No questions available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentExamDetails;
