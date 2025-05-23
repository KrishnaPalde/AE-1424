
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdminLogin from "./components/Admin/AdminLogin";
import GalleryAdmin from "./components/Admin/GalleryAdmin";
import CoursesAdmin from "./components/Admin/CoursesAdmin";
import AdminTrainingCentre from "./components/Admin/AdminTrainingCentre";
import LandingPage from "./components/LandingPage";
import Courses from "./components/Courses";
import TrainingCenters from "./components/TrainingCenters";

import ServiceOverviewPage from "./components/ServiceOverviewPage";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import SchemesOverviewPage from "./components/SchemesOverviewPage";
import SchemeDetailsPage from "./components/SchemeDetailsPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Sitemap from "./components/Sitemap";
import { AnimatePresence } from 'framer-motion';
import PageWrapper from "./components/PageWrapper";
import { AdminAuthProvider } from "./components/context/AdminAuthContext";
import ProtectedRoute from "./components/context/ProtectedRoutes";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminServices from "./components/Admin/AdminServices";
import AdminSchemes from "./components/Admin/AdminSchemes";
import AdminInquiries from "./components/Admin/AdminInquires";
import AdminBanner from "./components/Admin/AdminBanner";
import { HelmetProvider } from "react-helmet-async";
import AdminSettings from "./components/Admin/AdminSettings";
import AdminLogos from "./components/Admin/AdminLogos";
import GalleryScreen from "./components/Gallery";
import AdminExamManagement from "./components/Admin/AdminExamManagement";
import AdminExamDetails from "./components/Admin/AdminExamDetails";
import ExamLogin from "./components/Exam_Portal/ExamLogin";
import ExamProtectedRoute from "./components/context/ExamProtectedRoute";
import { ExamAuthProvider } from "./components/context/ExamAuthContext";
import StudentDashboard from "./components/Exam_Portal/StudentDashboard";
import ExamScreen from "./components/Exam_Portal/ExamScreen";
import FeedbackScreen from "./components/Exam_Portal/ExamFeedback";
import StudentExamDetails from "./components/Admin/AdminStudentExamDetailsScreen";
import AdminStudentManagement from "./components/Admin/AdminStudentManagement";
import AdminStudentDetails from "./components/Admin/AdminStudentDetails";

function App() {
  return (
    <>
    <HelmetProvider>
    <AdminAuthProvider>
      <ExamAuthProvider>
      <BrowserRouter>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/gallery" element={<GalleryScreen/>}/>
          <Route path="/training-centers"element={<TrainingCenters/>}/>
          <Route path="training-centers/courses-offered" element={<Courses/>}/>
          <Route path="training-centers/find-a-center" element={<TrainingCenters/>}/>


          <Route path="what-we-do/services-overview" element={<ServiceOverviewPage/>}/>
          <Route path="what-we-do/:id" element={<ServiceDetailsPage/>}/>


          <Route path="schemes" element={<SchemesOverviewPage/>}/>
          <Route path="schemes/:id" element={<SchemeDetailsPage/>}/>

          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="terms-of-service" element={<TermsOfService/>}/>
          <Route path="sitemap" element={<Sitemap/>}/>
          
          <Route
          path="who-we-are/about-us"
          element={
            <AboutUsPage/>
          }
          />
          <Route
          path="who-we-are/about-us/vision-mission"
          element={
            <AboutUsPage/>
          }
          />
          <Route
          path="who-we-are/about-us/board-directors"
          element={
            <AboutUsPage/>
          }
          />
          
          <Route
          path="/contact-us"
          element={
            <ContactUsPage/>
          }
          />
          <Route
          path="/login"
          element={
            <>
            <AdminLogin/>
            </>
          }
          />
          <Route
          path="/online-examination/login"
          element={
            <>
            <ExamLogin/>
            </>
          }
          />
          <Route
          path="/online-examination/Dashboard/:studId"
          element={
            <ExamProtectedRoute>
            <StudentDashboard/>
            </ExamProtectedRoute>
          }
          />
          <Route
          path="/online-examination/:examId/exam"
          element={
            <ExamProtectedRoute>
            <ExamScreen/>
            </ExamProtectedRoute>
          }
          />
          <Route
          path="/online-examination/:examId/feedback"
          element={
            <ExamProtectedRoute>
            <FeedbackScreen/>
            </ExamProtectedRoute>
          }
          />
          <Route
          path="/admin-exam-management"
          element={
            <ProtectedRoute>
            <AdminExamManagement/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-student-management"
          element={
            <ProtectedRoute>
            <AdminStudentManagement/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-exam-management/:examId"
          element={
            <ProtectedRoute>
            <AdminExamDetails/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-exam-management/:examId/:studentId/details"
          element={
            <ProtectedRoute>
            <StudentExamDetails/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-student-management/students/:studentId"
          element={
            <ProtectedRoute>
            <AdminStudentDetails/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-gallery"
          element={
            <ProtectedRoute>
            <GalleryAdmin/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
            <AdminDashboard/>
            </ProtectedRoute>
          }
          />
          
          <Route
          path="/admin-courses"
          element={
            <ProtectedRoute>
            <CoursesAdmin/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-services"
          element={
            <ProtectedRoute>
            <AdminServices/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-settings"
          element={
            <ProtectedRoute>
            <AdminSettings/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-logos"
          element={
            <ProtectedRoute>
            <AdminLogos/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-training-centers"
          element={
            <ProtectedRoute>
            <AdminTrainingCentre/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-schemes"
          element={
            <ProtectedRoute>
            <AdminSchemes/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/admin-inquiries"
          element={
            <ProtectedRoute>
            <AdminInquiries/>
            </ProtectedRoute>
          }
          />
          
          <Route
          path="/admin-banners"
          element={
            <ProtectedRoute>
            <AdminBanner/>
            </ProtectedRoute>
          }
          /> 
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
      </ExamAuthProvider>
      </AdminAuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
