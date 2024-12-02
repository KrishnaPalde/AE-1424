import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import ServiceDetails from "./ServiceDetails"
 
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
        <Footer/>
        </>
    )
}

export default ServiceDetailsPage;