import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AffiliatedBy from "./AffiliatedBy"
import GovernmentDepartments from "./GovernmentDepartments"
import SchemeOverview from "./schemeOverview"
 
const SchemesOverviewPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <SchemeOverview/>
        <GovernmentDepartments/>
        <AffiliatedBy/>
        <Footer/>
        </>
    )
}

export default SchemesOverviewPage;