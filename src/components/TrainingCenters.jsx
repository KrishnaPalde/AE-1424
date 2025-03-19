import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import  TrainingPrograms  from "./TrainingPrograms"
import { useLocation } from "react-router-dom"
import OurPartners from "./OurPartners"
import WhatsAppButton from "./WhatsappButton"
import FindTrainingCenter from "./FindTrainingCenter"
import PageWrapper from "./PageWrapper"
import { Helmet } from "react-helmet-async"

const TrainingCenters = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
        if(location.pathname === "/training-centers/find-a-center"){
            window.scrollTo({top:800, behavior:"smooth"})
        }
    })
    return(
        <>
        <Helmet>
            <title>Training Centers - Aarti Educare</title>
            <meta name="description" content="Explore our certified training centers offering industry-relevant courses and skill development programs." />
            <meta name="keywords" content="training centers, skill development, learning centers, professional training" />
            <meta property="og:title" content="Training Centers - Aarti Educare" />
            <meta property="og:description" content="Find certified training centers near you that provide high-quality skill development courses." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.png?alt=media&token=e965adc5-aca7-4b16-a5e8-6270665cfe0c" />
            <meta property="og:url" content="https://www.aartieducare.com/training-centers" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <TrainingPrograms/>
        <FindTrainingCenter/>
        <OurPartners/>
        <WhatsAppButton/>
        <Footer />
        </PageWrapper>
        </>
    )
}

export default TrainingCenters;