import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import SchemeDetails from "./schemeDetails"
 
const SchemeDetailsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <SchemeDetails/>
        <GovernmentDepartments/>
        <AffiliatedBy/>
        <Footer/>
        </>
    )
}

export default SchemeDetailsPage;