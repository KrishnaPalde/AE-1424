import React, { useEffect, useState } from "react";
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
import { Helmet } from "react-helmet-async";
import landingImage from "../assets/landing.webp";

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    // Show popup after initial load
   if (!isMobile) {
      setTimeout(() => setIsPopupOpen(true), 2000);
    } 

    
    // Simulate loading for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  if (isLoading) {
    return <LoadingSpinner />; // Show the spinner during the loading phase
  }

  return (
    <>
    <Helmet>
        <title>Transform Your Future with Skill-Based Training | Aarti Educare</title>
        <meta name="description" content="Empowering individuals through industry-recognized training programs. Enroll now to gain practical skills and enhance career opportunities." />
        <meta name="keywords" content="skill development, training programs, career growth, job-oriented courses, vocational training, professional skills" />
        <meta property="og:title" content="Transform Your Future with Skill-Based Training | Aarti Educare"/>
        <meta property="og:description" content="Empowering individuals through industry-recognized training programs. Join now and upskill yourself." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.webp?alt=media&token=d85ffcb5-122c-4fb7-b0cb-036857228217" />
        <meta property="og:url" content="https://www.aartieducare.com" />
        <meta name="robots" content="index, follow" />
    </Helmet> 
      <div className="hidden md:block">
        <PopupEnquiryForm isOpen={isPopupOpen} onClose={closePopup} />
      </div>
      {/* <Header /> */}
      <Nav />
      <PageWrapper>
      {isMobile ? (
           <div
           className="h-[400px] w-full bg-cover bg-center relative transition-all duration-1000 ease-in-out"
           style={{ backgroundImage: `url(${landingImage})` }}
         >
           {/* Overlay with theme color and opacity with animation */}
           {/* <div
             className={`absolute inset-0 bg-[#e67e23] bg-opacity-60 transition-all duration-1000 ease-in-out ${
               'opacity-100'
             }`}
           ></div> */}
    
         </div>
        
        ) : (
          <Carousel />
        )}
      {/* <Carousel /> */}
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
