import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import SchemeOverview from "./schemeOverview"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
 
const SchemesOverviewPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
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