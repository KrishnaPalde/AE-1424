import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import OverviewSection from "./OverviewSection"
import GovernmentDepartments from "./GovernmentDepartments"
import WhatsAppButton from "./WhatsappButton"

const ServiceOverviewPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <OverviewSection/>
        <AffiliatedBy/>
        <GovernmentDepartments/>
        <WhatsAppButton/>
        <Footer/>
        </>
    )
}

export default ServiceOverviewPage;