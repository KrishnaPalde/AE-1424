import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import  TrainingPrograms  from "./TrainingPrograms"
import { useLocation } from "react-router-dom"
import OurPartners from "./OurPartners"

const TrainingCenters = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
        if(location.pathname === "/training-centers/find-a-center"){
            window.scrollTo({top:500, behavior:"smooth"})
        }
    })
    return(
        <>
        <Header/>
        <Nav/>
        <TrainingPrograms/>
        <OurPartners/>
        <Footer />
        </>
    )
}

export default TrainingCenters;