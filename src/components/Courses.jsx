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

const Courses = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    window.scrollTo({top:0, behavior:"smooth"})
  })

  return (
    <>
      {/* <Header /> */}
      <Nav />
      <PageWrapper>
      <CoursesWeOffer onCTAClick={handlePopupToggle} />
      <CoursesCard onCTAClick={handlePopupToggle} />
      <OurPartners />
      <WhatsAppButton />
      <Footer />
      <CTAPopup isOpen={isPopupOpen} onClose={handlePopupToggle} />
      </PageWrapper>
    </>
  );
};

export default Courses;
