import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import SchemeOverview from "./schemeOverview"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
import { Helmet } from "react-helmet-async"
 
const SchemesOverviewPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Helmet>
            <title>Government Schemes - Skill Development Programs | Aarti Educare</title>
            <meta name="description" content="Explore government-backed skill development schemes that empower individuals with training and employment opportunities." />
            <meta name="keywords" content="government schemes, skill training, employment programs, PMKVY, skill India" />
            <meta property="og:title" content="Government Schemes - Skill Development Programs | Aarti Educare" />
            <meta property="og:description" content="Learn about various government skill development schemes designed to uplift and train individuals for better employment opportunities." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.webp?alt=media&token=d85ffcb5-122c-4fb7-b0cb-036857228217" />
            <meta property="og:url" content="https://www.aartieducare.com/government-schemes" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <SchemeOverview/>
        <GovernmentDepartments/>
        <AffiliatedBy/>
        <WhatsAppButton/>
        <Footer/>
        </PageWrapper>
        </>
    )
}

export default SchemesOverviewPage;