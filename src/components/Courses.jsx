import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import CoursesWeOffer from "./CoursesWeOffer"
import CoursesCard from "./CoursesCard"

import OurPartners from "./OurPartners"
import WhatsAppButton from "./WhatsappButton"




const Courses = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <CoursesWeOffer/>
        <CoursesCard/>
        <OurPartners/>
        <WhatsAppButton/>
        <Footer />
        </>
    )
}

export default Courses;