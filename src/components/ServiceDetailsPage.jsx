import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import ServiceDetails from "./ServiceDetails"
import WhatsAppButton from "./WhatsappButton"
 
const ServiceDetailsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <ServiceDetails/>
        <AffiliatedBy/>
        <GovernmentDepartments/>
        <WhatsAppButton/>
        <Footer/>
        </>
    )
}

export default ServiceDetailsPage;