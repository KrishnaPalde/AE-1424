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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingImage />
                <Intro />
                <Records />
                <Carousel />
                <Affiliations />
                {/* <Legacy /> */}
                <Footer />
              </>
            }
          />
          <Route
          path="/our-training-centers"
          element={
            <>
            <Header/>
            <TrainingPrograms/>
            <Footer />
            </>
          }
          />
          <Route
          path="/courses-we-offer"
          element={
            <>
            <Header/>
            <Nav/>
            <CoursesWeOffer/>
            <CoursesCard/>
            <Affiliations/>
            {/* <Legacy/> */}
            <Footer />
            </>
          }
          />
          <Route
          path="/aboutus"
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
          path="/contactus"
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
