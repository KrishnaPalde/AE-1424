import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import  TrainingPrograms  from "./TrainingPrograms"

const TrainingCenters = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    })
    return(
        <>
        <Header/>
        <Nav/>
        <TrainingPrograms/>
        <Footer />
        </>
    )
}

export default TrainingCenters;