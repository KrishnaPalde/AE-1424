import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AboutUs from "./AboutUs"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
import { Helmet } from "react-helmet-async"
 
const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Helmet>
            <title>About Us - Our Mission & Vision | Aarti Educare</title>
            <meta name="description" content="Learn more about our mission, vision, and commitment to skill development and career transformation through training programs." />
            <meta name="keywords" content="about us, our mission, skill development vision, professional training, workforce development" />
            <meta property="og:title" content="About Us - Our Mission & Vision | Aarti Educare" />
            <meta property="og:description" content="Discover our mission to empower individuals with skill-based education and career growth opportunities." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.webp?alt=media&token=d85ffcb5-122c-4fb7-b0cb-036857228217" />
            <meta property="og:url" content="https://www.aartieducare.com/who-we-are/about-us" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <AboutUs />
        <WhatsAppButton/>
        <Footer />
        </PageWrapper>
        </>
    )
}

export default AboutUsPage;