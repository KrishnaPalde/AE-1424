import React, { useEffect, useState } from "react";
import Affiliations from "./Affiliations";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Records from "./Records";
import PopupEnquiryForm from "./PopupEnquiryForm";
import Nav from "./Nav";
import EducareSections from "./EducareSections";
import AffiliatedBy from "./AffiliatedBy";
import GovernmentDepartments from "./GovernmentDepartments";
import OurPartners from "./OurPartners";
import WhatsAppButton from "./WhatsappButton";
import LoadingSpinner from "./LoadingSpinner";
import PageWrapper from "./PageWrapper";

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    // Show popup after initial load
    setTimeout(() => setIsPopupOpen(true), 2000);

    // Simulate loading for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; // Show the spinner during the loading phase
  }

  return (
    <>
      <PopupEnquiryForm isOpen={isPopupOpen} onClose={closePopup} />
      {/* <Header /> */}
      <Nav />
      <PageWrapper>
      <Carousel />
      <Intro />
      <AffiliatedBy />
      <Records />
      <GovernmentDepartments />
      <EducareSections />
      <OurPartners />
      <WhatsAppButton />
      <Footer />
      </PageWrapper>
    </>
  );
};

export default LandingPage;
