import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import AboutUs from "./AboutUs"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
 
const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        {/* <Header/> */}
        <Nav/>
        <PageWrapper>
        <AboutUs />
        <WhatsAppButton/>
        <Footer />
        </PageWrapper>
        </>
    )
}

export default AboutUsPage;