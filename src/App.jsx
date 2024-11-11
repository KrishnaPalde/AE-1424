import Legacy from "./components/Legacy";
import Header from "./components/Header";
import CoursesWeOffer from "./components/CoursesWeOffer";
import CoursesCard from "./components/CoursesCard";
import Affiliations from "./components/Affiliations";
import LandingImage from "./components/LandingImage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";
import Records from "./components/Records";
import Carousel from "./components/Carousel";
import TrainingPrograms from "./components/TrainingPrograms";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./components/Admin/AdminLogin";
import  Sidebar  from "./components/Admin/Sidebar";
import GalleryAdmin from "./components/Admin/GalleryAdmin";
import AdminContact from "./components/Admin/AdminContact";
import CoursesAdmin from "./components/Admin/CoursesAdmin";
import AdminTrainingCentre from "./components/Admin/AdminTrainingCentre";
import NewsBanner from "./components/NewsBanner";
import LandingPage from "./components/LandingPage";
import Courses from "./components/Courses";
import TrainingCenters from "./components/TrainingCenters";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/training-centers"element={<TrainingCenters/>}/>
          <Route path="training-centers/courses-offered" element={<Courses/>}/>
          <Route path="training-centers/find-a-center"element={<TrainingCenters/>}/>
          
          {/* <Route
          path="/courses-we-offer"
          element={
            <>
            <Header/>
            <Nav/>
            <CoursesWeOffer/>
            <CoursesCard/>
            <Affiliations/>
            <Footer />
            </>
          }
          /> */}

          <Route
          path="who-we-are/about-us"
          element={
            <>
            <Header/>
            <Nav/>
            <AboutUs />
            <Footer />
            </>
          }
          />
          <Route
          path="who-we-are/about-us/vision-mission"
          element={
            <>
            <Header/>
            <Nav/>
            <AboutUs />
            <Footer />
            </>
          }
          />
          <Route
          path="who-we-are/about-us/board-directors"
          element={
            <>
            <Header/>
            <Nav/>
            <AboutUs />
            <Footer />
            </>
          }
          />
          <Route
          path="/gallery"
          element={
            <>
            <Header/>
            <Nav/>
            <Gallery />
            <Footer />
            </>
          }
          />
          <Route
          path="/contact-us"
          element={
            <>
            <Header/>
            <Nav/>
            <ContactUs/>
            <Footer />
            </>
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
          path="/admin-gallery"
          element={
            <>
            <GalleryAdmin/>
            </>
          }
          />
          <Route
          path={"/admin-contact-settings"}
          element={
            <>
            <AdminContact/>
            </>
          }
          />
          <Route
          path="/admin-courses"
          element={
            <>
            <CoursesAdmin/>
            </>
          }
          />
          <Route
          path="/admin-training-centres"
          element={
            <>
            <AdminTrainingCentre/>
            </>
          }
          />
          <Route
          path="/admin-banners"
          element={
            <>
            <NewsBanner isAdmin={true}/>
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
