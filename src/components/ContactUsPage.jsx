import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import ContactUs from "./ContactUs"
import WhatsAppButton from "./WhatsappButton"
 
const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
            <Header/>
            <Nav/>
            <ContactUs/>
            <WhatsAppButton/>
            <Footer />
        </>
    )
}

export default ContactUsPage;