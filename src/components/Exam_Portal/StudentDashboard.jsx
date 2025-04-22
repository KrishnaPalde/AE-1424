// import React, { useState, useEffect } from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
// import logo from '../../assets/logo.webp';
// import config from "@/config";
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useExamAuth } from '../context/ExamAuthContext';

// const API_URL = config.API_URL;

// const StudentDashboard = () => {
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [popupStep, setPopupStep] = useState(1);
//   const [showPopup, setShowPopup] = useState(false);
//   const location = useLocation();
//   const { logout } = useExamAuth();
//   const navigate = useNavigate();
//   const {studentId} = location.state || {};
//   const [studentData, setStudentData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     aadhaar: '',
//     contact: '',
//     email: '',
//   });
//   const [exams, setExams] = useState([]);
//   const [loadingExams, setLoadingExams] = useState(true);

//   // ✅ Fixed MCQ Instructions
//   const MCQ_INSTRUCTIONS = `
// 1. Each question has four options, only one is correct.
// 2. There is no negative marking unless stated otherwise.
// 3. Do not refresh, close, or switch tabs during the exam.
// 4. Your time is auto-tracked and submission is final.
// 5. Ensure a stable internet connection throughout the exam.
//   `;

//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         const response = await fetch(`${API_URL}/exams`); // Adjust endpoint as needed
//         const data = await response.json();
//         setExams(data);
//       } catch (error) {
//         console.error('Error fetching exams:', error);
//       } finally {
//         setLoadingExams(false);
//       }
//     };

//     fetchExams();
//   }, []);

//   const handleInputChange = (e) => {
//     setStudentData({ ...studentData, [e.target.name]: e.target.value });
//   };

//   const handleStartExam = async (examId, studentId) => {
//     try {
//         const response = await fetch(`${API_URL}/exams/${examId}/${studentId}/start-exam`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(studentData),
//         });

    
//         const data = await response.json();
    
//         if (response.ok) {
//           // Handle success response
//           console.log('Exam started successfully:', data);
//           navigate(`/online-examination/${examId}/exam`, {state: {selectedExam, studentId}})
//         } else {
//           // Handle error response
//           console.error('Error starting exam:', data.message);
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     setShowPopup(false);
//     setStudentData({
//       firstName: '',
//       lastName: '',
//       age: '',
//       aadhaar: '',
//       contact: '',
//       email: '',
//     });
//     setPopupStep(1);
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/online-examination/login");
//   }

//   return (
//     <div className="min-h-screen bg-[#f9fafb] flex font-sans">
//       {/* Sidebar */}
//       <aside className="w-20 bg-white border-r shadow-md flex flex-col justify-between items-center py-6">
//         <img src={logo} alt="Aarti Educare Logo" className="h-12 w-12 object-contain rounded-full" />
//         <button onClick={handleLogout} className="text-red-500 hover:text-red-600 transition">
//           <FaSignOutAlt size={20} />
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-10">
//         <div className="mb-10">
//           <h1 className="text-3xl font-semibold text-[#1E3A8A]">Welcome Student</h1>
//           <p className="text-gray-500 mt-1">All your assigned exams are listed below</p>
//         </div>

//         {loadingExams ? (
//   <div className="text-gray-500">Loading exams...</div>
// ) : exams.length === 0 ? (
//   <div className="text-gray-500">No exams assigned yet.</div>
// ) : (
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {exams.map((exam) => (
//       <div
//         key={exam._id}
//         onClick={() => {
//           setSelectedExam(exam);
//           setShowPopup(true);
//         }}
//         className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//       >
//         <div className="flex justify-between items-start mb-3">
//           <h2 className="text-xl font-semibold text-[#1E3A8A]">{exam.title}</h2>
//           <span
//             className={`text-xs px-2 py-1 rounded-full font-medium ${
//               exam.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
//             }`}
//           >
//             {exam.isActive ? 'Active' : 'Inactive'}
//           </span>
//         </div>

//         {exam.description && (
//           <p className="text-sm text-gray-600 mb-3 line-clamp-2">{exam.description}</p>
//         )}

//         <div className="space-y-1 text-sm text-gray-700">
//           <p>
//             <span className="font-medium">Start:</span>{' '}
//             {new Date(exam.startTime).toLocaleString()}
//           </p>
//           <p>
//             <span className="font-medium">End:</span>{' '}
//             {new Date(exam.endTime).toLocaleString()}
//           </p>
//           <p>
//             <span className="font-medium">Duration:</span> {exam.duration} minutes
//           </p>
//           <p>
//             <span className="font-medium">Questions:</span>{' '}
//             {exam.questions?.length || 0}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// )}


//       </main>

//       {/* Popup */}
//       {showPopup && selectedExam && (
//         <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
//           <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-xl p-6 md:p-8 transition-all duration-300 ease-in-out">
//             <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">
//               {selectedExam.title}
//             </h2>

//             {popupStep === 1 && (
//               <>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Instructions</h3>
//                 <p className="text-gray-600 leading-relaxed whitespace-pre-line">{MCQ_INSTRUCTIONS}</p>

//                 <button
//                   onClick={() => setPopupStep(2)}
//                   className="mt-6 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-medium py-2.5 rounded-md transition duration-300"
//                 >
//                   Continue
//                 </button>
//               </>
//             )}

//             {popupStep === 2 && (
//               <>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Your Details</h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={studentData.firstName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={studentData.lastName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                   <input
//                     type="number"
//                     name="age"
//                     placeholder="Age"
//                     value={studentData.age}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                   <input
//                     type="text"
//                     name="aadhaar"
//                     placeholder="Aadhaar Number"
//                     value={studentData.aadhaar}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                   <input
//                     type="text"
//                     name="contact"
//                     placeholder="Contact Number"
//                     value={studentData.contact}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={studentData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
//                   />
//                 </div>

//                 <button
//                     onClick={() => handleStartExam(selectedExam._id, studentId)} 
//                     className="mt-6 w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white font-medium py-2.5 rounded-md transition duration-300"
//                     >
//                     Start Exam
//                 </button>
//               </>
//             )}

//             <button
//               onClick={() => {
//                 setShowPopup(false);
//                 setPopupStep(1);
//               }}
//               className="mt-4 w-full text-sm text-gray-500 hover:text-red-500 text-center transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;



import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/logo.webp';
import config from "@/config";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useExamAuth } from '../context/ExamAuthContext';

const API_URL = config.API_URL;

const StudentDashboard = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const { logout } = useExamAuth();
  const navigate = useNavigate();
  const { studentId } = location.state || {};
  const {studId} = useParams();
  const [student, setStudent] = useState({});
  const [exams, setExams] = useState([]);
  const [loadingExams, setLoadingExams] = useState(true);

  // ✅ Fixed MCQ Instructions
  const MCQ_INSTRUCTIONS = `
1. Each question has four options, only one is correct.
2. There is no negative marking unless stated otherwise.
3. Do not refresh, close, or switch tabs during the exam.
4. Your time is auto-tracked and submission is final.
5. Ensure a stable internet connection throughout the exam.
  `;

  useEffect(() => {
    // const fetchExams = async () => {
    //   try {
    //     const response = await fetch(`${API_URL}/exams`); // Adjust endpoint as needed
    //     const data = await response.json();
    //     setExams(data);
    //   } catch (error) {
    //     console.error('Error fetching exams:', error);
    //   } finally {
    //     setLoadingExams(false);
    //   }
    // };
    const fetchStudent = async () => {
        try {
          const response = await fetch(`${API_URL}/exams/students/${studentId?.trim() ? studentId : studId}`); // Adjust endpoint as needed
          const data = await response.json();

          const combinedExams = [
            ...data?.assignedExams || [],  // Default to empty array if undefined
            ...data?.completedExams || []  // Default to empty array if undefined
          ];
      
          // Use setExams to store the combined exams
          setExams(combinedExams);

          setStudent(data);
        } catch (error) {
          console.error('Error fetching exams:', error);
        } finally {
          setLoadingExams(false);
        }
      };

    fetchStudent();
    // fetchExams();
  }, []);


  const handleStartExam = async (examId, studentId) => {
    try {
      const response = await fetch(`${API_URL}/exams/${examId}/${studentId}/start-exam`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        navigate(`/online-examination/${examId}/exam`, { state: { selectedExam, studentId } });
      } else {
        // Handle error response
        console.error('Error starting exam:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
    setShowPopup(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/online-examination/login");
  };

  const isExamActive = (exam) => {
    // const currentTime = new Date();
    // return (
    //   currentTime >= new Date(exam.startTime) &&
    //   currentTime <= new Date(exam.endTime)
    // );
    return true;
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex font-sans">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r shadow-md flex flex-col justify-between items-center py-6">
        <img src={logo} alt="Aarti Educare Logo" className="h-12 w-12 object-contain rounded-full" />
        <button onClick={handleLogout} className="text-red-500 hover:text-red-600 transition">
          <FaSignOutAlt size={20} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-[#1E3A8A]">Welcome Student</h1>
          <p className="text-gray-500 mt-1">All your assigned exams are listed below</p>
        </div>

        {loadingExams ? (
          <div className="text-gray-500">Loading exams...</div>
        ) : exams.length === 0 ? (
          <div className="text-gray-500">No exams assigned yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams
  .filter(isExamActive)
  .map((exam) => {
    const isSubmitted = student?.completedExams?.some(examItem => examItem._id === exam._id);
    const isDisabled = isSubmitted || !exam.isActive;
    return (
      <div
        key={exam._id}
        onClick={() => {
          if (!isDisabled) {
            setSelectedExam(exam);
            setShowPopup(true);
          }
        }}
        className={`bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-shadow duration-300 cursor-pointer ${
          isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl'
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">{exam.title}</h2>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              isSubmitted
                ? 'bg-blue-100 text-blue-700'
                : exam.isActive
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {isSubmitted ? 'Submitted' : exam.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>

        {exam.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{exam.description}</p>
        )}

        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Start:</span>{' '}
            {new Date(exam.startTime).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">End:</span>{' '}
            {new Date(exam.endTime).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Duration:</span> {exam.duration} minutes
          </p>
          <p>
            <span className="font-medium">Questions:</span> {exam.questions?.length || 0}
          </p>
        </div>
      </div>
    );
  })}

          </div>
        )}
      </main>

      {/* Popup */}
      {showPopup && selectedExam && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-xl p-6 md:p-8 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">
              {selectedExam.title}
            </h2>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Instructions</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{MCQ_INSTRUCTIONS}</p>

                <button
                  onClick={() => handleStartExam(selectedExam._id, studentId)}
                  className="mt-6 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-medium py-2.5 rounded-md transition duration-300"
                >
                  Continue
                </button>

            {/* {popupStep === 2 && (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Your Details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={studentData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={studentData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={studentData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                  <input
                    type="text"
                    name="aadhaar"
                    placeholder="Aadhaar Number"
                    value={studentData.aadhaar}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={studentData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={studentData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-[#F9FAFB] focus:ring-2 focus:ring-[#14B8A6] focus:outline-none transition duration-200"
                  />
                </div>

                <button
                  onClick={() => handleStartExam(selectedExam._id, studentId)}
                  className="mt-6 w-full bg-[#14B8A6] hover:bg-[#10B981] text-white font-medium py-2.5 rounded-md transition duration-300"
                >
                  Start Exam
                </button>

                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-white font-medium py-2.5 rounded-md transition duration-300"
                >
                  Close
                </button>
              </>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
