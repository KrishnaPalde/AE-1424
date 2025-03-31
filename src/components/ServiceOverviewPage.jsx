import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import OverviewSection from "./OverviewSection"
import GovernmentDepartments from "./GovernmentDepartments"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
import { Helmet } from "react-helmet-async"

const ServiceOverviewPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Helmet>
            <title>Our Services - Skill Development & Career Growth | Aarti Educare</title>
            <meta name="description" content="Discover our skill development programs, career counseling, and professional training services designed for success." />
            <meta name="keywords" content="career training, professional courses, skill development, job-oriented training" />
            <meta property="og:title" content="Our Services - Skill Development & Career Growth | Aarti Educare" />
            <meta property="og:description" content="We provide high-quality skill development and career-oriented training programs to help individuals achieve their goals." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.webp?alt=media&token=d85ffcb5-122c-4fb7-b0cb-036857228217" />
            <meta property="og:url" content="https://www.aartieducare.com/what-we-do/services" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <OverviewSection/>
        <AffiliatedBy/>
        <GovernmentDepartments/>
        <WhatsAppButton/>
        <Footer/>
        </PageWrapper>
        </>
    )
}

export default ServiceOverviewPage;