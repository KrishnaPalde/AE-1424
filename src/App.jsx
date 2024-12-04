import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./components/Admin/AdminLogin";
import GalleryAdmin from "./components/Admin/GalleryAdmin";
import AdminContact from "./components/Admin/AdminContact";
import CoursesAdmin from "./components/Admin/CoursesAdmin";
import AdminTrainingCentre from "./components/Admin/AdminTrainingCentre";
import NewsBanner from "./components/NewsBanner";
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

function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
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
          {/* <Route path="what-we-do/skill-development" element={<><Header/><Nav/><SkillDevelopment/><Footer/></>}/>
          <Route path="what-we-do/tc-partnerships" element={<><Header/><Nav/><TrainingCenterPartnerships/><Footer/></>}/>
          <Route path="what-we-do/placement" element={<><Header/><Nav/><PlacementAssistance/><Footer/></>}/>
          <Route path="what-we-do/work-orders" element={<><Header/><Nav/><WorkOrders/><Footer/></>}/> */}

          
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
          path="/gallery"
          element={
            <>
            {/* <Header/> */}
            <Nav/>
            <PageWrapper>
            <Gallery />
            <Footer />
            </PageWrapper>
            </>
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
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
