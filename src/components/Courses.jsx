import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import CoursesWeOffer from "./CoursesWeOffer";
import CoursesCard from "./CoursesCard";
import OurPartners from "./OurPartners";
import WhatsAppButton from "./WhatsappButton";
import CTAPopup from "./CTAPopup";
import PageWrapper from "./PageWrapper";
import config from "@/config";

const API_URL = config.API_URL;

const Courses = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL + "/courses");
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    window.scrollTo({top:0, behavior:"smooth"})
  })

  return (
    <>
      {/* <Header /> */}
      <Nav />
      <PageWrapper>
      <CoursesWeOffer onCTAClick={handlePopupToggle} />
      <CoursesCard onCTAClick={handlePopupToggle} courses={courses} />
      <OurPartners />
      <WhatsAppButton />
      <Footer />
      <CTAPopup isOpen={isPopupOpen} onClose={handlePopupToggle} />
      </PageWrapper>
    </>
  );
};

export default Courses;
