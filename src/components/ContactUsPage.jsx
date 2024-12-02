import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import ContactUs from "./ContactUs"
 
const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
            <Header/>
            <Nav/>
            <ContactUs/>
            <Footer />
        </>
    )
}

export default ContactUsPage;