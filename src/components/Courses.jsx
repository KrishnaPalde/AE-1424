import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import CoursesWeOffer from "./CoursesWeOffer"
import CoursesCard from "./CoursesCard"

import OurPartners from "./OurPartners"




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
        <Footer />
        </>
    )
}

export default Courses;