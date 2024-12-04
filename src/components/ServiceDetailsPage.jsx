import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import ServiceDetails from "./ServiceDetails"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
 
const ServiceDetailsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <ServiceDetails/>
        <AffiliatedBy/>
        <GovernmentDepartments/>
        <WhatsAppButton/>
        <Footer/>
        </PageWrapper>
        </>
    )
}

export default ServiceDetailsPage;