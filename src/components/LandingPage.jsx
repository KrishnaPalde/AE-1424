import React, { useEffect, useState } from "react"

import Affiliations  from "./Affiliations"
import   Carousel  from "./Carousel"
import   Footer  from "./Footer"
import   Header  from "./Header"
import   Intro  from "./Intro"
import   LandingImage  from "./LandingImage"
import   Records  from "./Records"
import PopupEnquiryForm from "./PopupEnquiryForm"
import Nav from "./Nav"
import EducareSections from "./EducareSections"


const LandingPage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closePopup = () => setIsPopupOpen(false);

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
        setIsPopupOpen(true);
    }, []);
    
   

    
    return (
        <>
        <PopupEnquiryForm isOpen={isPopupOpen} onClose={closePopup} />
        <Header />
        {/* <LandingImage /> */}
        <Nav/>
        <Carousel />
        <Intro />
        <Records />
        <EducareSections/>
        <Affiliations />
        {/* <Legacy /> */}
        <Footer />
        </>
    )
}


export default LandingPage;