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
                <Legacy />
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
            <Legacy/>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
