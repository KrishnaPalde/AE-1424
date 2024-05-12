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
              </>
            }
          />
          <Route
          path="/our-training-centers"
          element={
            <>
            <Header/>
            <TrainingPrograms/>
            </>
          }
          />
          <Route
          path="/courses-we-offer"
          element={
            <>
            <Header/>
            <CoursesWeOffer/>
            <CoursesCard/>
            <Affiliations/>
            <Legacy/>
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
