import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FaClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import logo from "./../../assets/logo.webp"
import config from "@/config";

const API_URL = config.API_URL;


// export default function ExamScreen() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { selectedExam } = location.state || {};
//   const fullscreenRef = useRef();

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timer, setTimer] = useState(selectedExam?.duration * 60 || 0);

//   const questions = dummyQuestions;

//   useEffect(() => {
//     if (fullscreenRef.current?.requestFullscreen) {
//       fullscreenRef.current.requestFullscreen().catch(() => {});
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           handleSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = () => {
//     const min = Math.floor(timer / 60);
//     const sec = timer % 60;
//     return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
//   };

//   const handleOptionSelect = (questionId, selectedOption) => {
//     setAnswers({ ...answers, [questionId]: selectedOption });
//   };

//   const handleNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const handleSubmit = () => {
//     Swal.fire({
//       title: "Submit Exam?",
//       text: "You won’t be able to modify answers after submission.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Submit",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate(`/online-examination/${examId}/feedback`);
//       }
//     });
//   };

//   const currentQuestion = questions[currentIndex];

//   return (
//     <div
//       ref={fullscreenRef}
//       className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-nunito"
//     >
//       {/* Header */}
//       <div className="w-full bg-white border-b shadow-md px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <img src="/logo192.png" alt="Logo" className="w-9 h-9" />
//           <h1 className="text-2xl font-semibold">{selectedExam?.title || "Exam Portal"}</h1>
//         </div>

//         {/* Center Timer */}
//         <div className="absolute left-1/2 transform -translate-x-1/2">
//           <div className="flex items-center gap-3 text-red-600 font-extrabold text-3xl">
//             <FaClock className="text-2xl" />
//             <span>{formatTime()}</span>
//           </div>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-[300px] bg-[#f5f6fa] border-r p-4 flex flex-col justify-between">
//           {/* Navigator */}
//           <div>
//             <h2 className="text-lg font-semibold mb-3">Question Navigator</h2>
//             <div className="grid grid-cols-5 gap-2 mb-6">
//               {questions.map((q, idx) => (
//                 <button
//                   key={q._id}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`w-10 h-10 rounded-md text-sm font-semibold transition-all duration-200 shadow-sm ${
//                     answers[q._id]
//                       ? "bg-green-500 text-white"
//                       : "bg-white border border-gray-300 hover:bg-gray-200"
//                   }`}
//                 >
//                   {idx + 1}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Instructions */}
//           <div className="bg-white border rounded-md p-4 text-sm shadow-sm max-h-[200px] overflow-y-auto">
//             <h3 className="font-bold mb-2 text-indigo-700">Instructions</h3>
//             <ul className="list-disc pl-5 space-y-1 text-gray-600">
//               <li>Do not refresh or close the window during the exam.</li>
//               <li>Each question has only one correct answer.</li>
//               <li>Timer will auto-submit the test when time ends.</li>
//               <li>Unanswered questions will be marked as unattempted.</li>
//               <li>Click “Submit Exam” once you're done.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 px-10 py-12 overflow-y-auto">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold mb-6">
//               Q{currentIndex + 1}. {currentQuestion.question}
//             </h2>

//             <div className="space-y-4">
//               {currentQuestion.options.map((option, idx) => (
//                 <label
//                   key={idx}
//                   className={`block px-6 py-4 border rounded-md cursor-pointer text-lg transition-all duration-200 ${
//                     answers[currentQuestion._id] === option
//                       ? "bg-indigo-100 border-indigo-500"
//                       : "bg-white border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestion._id}`}
//                     className="hidden"
//                     checked={answers[currentQuestion._id] === option}
//                     onChange={() =>
//                       handleOptionSelect(currentQuestion._id, option)
//                     }
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="mt-10 flex justify-between items-center">
//               <button
//                 onClick={handleBack}
//                 disabled={currentIndex === 0}
//                 className="text-gray-600 hover:text-indigo-600 font-medium flex items-center space-x-1 disabled:opacity-30"
//               >
//                 <FaChevronLeft />
//                 <span>Back</span>
//               </button>

//               {currentIndex === questions.length - 1 ? (
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
//                 >
//                   Submit Exam
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleNext}
//                   className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all flex items-center space-x-1"
//                 >
//                   <span>Next</span>
//                   <FaChevronRight />
//                 </button>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function ExamScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedExam, studentId } = location.state || {};
    const fullscreenRef = useRef();
    const { examId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(selectedExam?.duration * 60 || 0);
  
    const questions = selectedExam?.questions || [];
  
    useEffect(() => {
      if (fullscreenRef.current?.requestFullscreen) {
        fullscreenRef.current.requestFullscreen().catch(() => {});
      }
      const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
          // Optional: refocus body or a dummy element
          document.body.focus();
        }
      };
    
      const escHandler = (e) => {
        if (e.key === "Escape") {
          document.exitFullscreen?.();
        }
      };
    
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = "";
      };
    
      const preventReloadShortcuts = (e) => {
        if (
          e.key === "F5" ||
          (e.ctrlKey && e.key === "r") ||
          (e.metaKey && e.key === "r")
        ) {
          e.preventDefault();
        }
      };
    
      // Prevent back navigation
      const handlePopState = () => {
        navigate(0);
      };
    
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("keydown", preventReloadShortcuts);
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      window.addEventListener("keydown", escHandler);
  
    
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("keydown", preventReloadShortcuts);
        window.removeEventListener("popstate", handlePopState);
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
        window.removeEventListener("keydown", escHandler);
      };
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            submitExam(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = () => {
      const min = Math.floor(timer / 60);
      const sec = timer % 60;
      return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    };
  
    const handleOptionSelect = (questionId, selectedOptionId) => {
        setAnswers({ ...answers, [questionId]: selectedOptionId });
      };      
  
    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    };
    const handleClear = (questionId) => {
        const updatedAnswers = { ...answers };
        delete updatedAnswers[questionId];
        setAnswers(updatedAnswers);
      };
      
  
    const handleBack = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };
  
    const submitExam = async (isAutoSubmitted) => {
        try {
            const formattedAnswers = Object.entries(answers).map(
                ([questionId, selectedOptionId]) => ({ questionId, selectedOptionId })
              );
            const response = await fetch(
            `${API_URL}/exams/${examId}/${studentId}/submit-exam`,
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ answers: formattedAnswers }),
            }
            );
        
            const data = await response.json();

            if (!response.ok) throw new Error("Failed to submit exam: " + data.message );
        
            navigate(`/online-examination/${examId}/feedback`, {
            state: { autoSubmitted: isAutoSubmitted, studentId },
            });
        } catch (error) {
            Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Please try again. If the problem persists, contact support.",
            });
        }
    };      
      
    const handleSubmit = () => {
      document.activeElement?.blur();
    
      if(Object.entries(answers).length == questions?.length){
        // Exit fullscreen first
        if (document.fullscreenElement) {
          document.exitFullscreen().then(() => {
            showConfirmDialog();
          }).catch(() => {
            showConfirmDialog(); // fallback in case exiting fullscreen fails
          });
        } else {
          showConfirmDialog();
        }
      } else {
        showCompleteExamDialog();
      }
      
    };
    
    const showConfirmDialog = () => {
      Swal.fire({
        title: "Submit Exam?",
        text: "You won't be able to modify answers after submission.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
      })
        .then((result) => {
          if (result.isConfirmed) {
            submitExam(false);
          }
        })
        .catch(() => {
          const confirmFallback = window.confirm("Submit Exam?");
          if (confirmFallback) {
            submitExam(false);
          }
        });
    };
    const showCompleteExamDialog = () => {
      Swal.fire({
        title: "Complete Exam !!!",
        text: "You have to attempt every question in order to submit the exam.",
        icon: "warning",
        showCancelButton: true,
        showConfirmButton: false,
      })
    };
    
      
  
    const currentQuestion = questions[currentIndex];
  
    return (
    
      <div
        ref={fullscreenRef}
        className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-nunito"
      >
        {/* Header */}

        <div className="w-full bg-white border-b shadow-md px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between relative gap-3 md:gap-0">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
            <img src={logo} alt="Aarti Educare Logo" className="w-16 h-16 sm:w-16 sm:h-16" />
            <h1 className="text-xl sm:text-2xl font-semibold truncate max-w-[70vw] sm:max-w-none">
            {selectedExam?.title || "Online Examination"}
            </h1>
        </div>

        {/* Timer Centered */}
        <div className="absolute top-4 right-4 md:static md:transform-none md:top-auto md:right-auto md:left-auto">
            <div className="flex items-center gap-2 text-red-600 font-extrabold text-xl sm:text-2xl justify-center">
            <FaClock className="text-lg sm:text-2xl" />
            <span>{formatTime()}</span>
            </div>
        </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
          {/* Sidebar */}
          <div className="w-full lg:w-[300px] bg-[#f5f6fa] border-r p-4 flex flex-col justify-between">
            {/* Navigator */}
            <div className="mb-4 lg:mb-0">
              <h2 className="text-base sm:text-lg font-semibold mb-2">All Questions</h2>
              <div className="grid grid-cols-6 sm:grid-cols-5 gap-2 mb-4">
              {questions.map((q, idx) => (
                <button
                    key={q._id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm ${
                    answers[q._id]
                        ? "bg-green-500 text-white"
                        : "bg-white border border-gray-300 hover:bg-gray-200"
                    }`}
                >
                    {idx + 1}
                </button>
                ))}
              </div>
            </div>
  
            {/* Instructions */}
            <div className="bg-white border rounded-md p-3 text-xs sm:text-sm shadow-sm max-h-[320px] overflow-y-auto">
              <h3 className="font-bold mb-1 text-indigo-700">Instructions</h3>
              <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>Do not refresh or close the window during the exam.</li>
                <li>Each question has only one correct answer.</li>
                <li>Timer will auto-submit the test when time ends.</li>
                <li>Unanswered questions will be marked unattempted.</li>
                <li>Click “Submit Exam” once you're done.</li>
              </ul>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex-1 px-4 sm:px-10 py-6 sm:py-12 overflow-y-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Q{currentIndex + 1}. {currentQuestion.questionText}
                </h2>

                <div className="space-y-3 sm:space-y-4">
                {currentQuestion.options.map((option, idx) => (
                    <label
                    key={option._id}
                    className={`block px-4 py-3 sm:px-6 sm:py-4 border rounded-md cursor-pointer text-sm sm:text-lg transition-all duration-200 ${
                        answers[currentQuestion._id] === option._id
                        ? "bg-indigo-100 border-indigo-500"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                    >
                    <input
                        type="radio"
                        name={`question-${currentQuestion._id}`}
                        className="hidden"
                        checked={answers[currentQuestion._id] === option._id}
                        onChange={() =>
                        handleOptionSelect(currentQuestion._id, option._id)
                        }
                    />
                    {option.text}
                    </label>
                ))}
                <button
                onClick={() => handleClear(currentQuestion._id)}
                className="mt-3 text-sm text-red-500 hover:text-red-700 font-medium underline"
                >
                Clear Answer
                </button>

                </div>

  
              {/* Navigation Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <button
                  onClick={handleBack}
                  disabled={currentIndex === 0}
                  className="text-gray-600 hover:text-indigo-600 font-medium flex items-center space-x-1 disabled:opacity-30"
                >
                  <FaChevronLeft />
                  <span>Back</span>
                </button>
  
                {currentIndex === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all w-full sm:w-auto"
                  >
                    Submit Exam
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all flex items-center space-x-1 w-full sm:w-auto"
                  >
                    <span>Next</span>
                    <FaChevronRight />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  