import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import CoursesWeOffer from "./CoursesWeOffer"
import CoursesCard from "./CoursesCard"
import Affiliations from "./Affiliations"




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
        <Affiliations/>
        <Footer />
        </>
    )
}

export default Courses;