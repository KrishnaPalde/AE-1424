import React, { useEffect } from "react"
import  Footer  from "./Footer"
import  Header  from "./Header"
import  Nav  from "./Nav"
import ContactUs from "./ContactUs"
import WhatsAppButton from "./WhatsappButton"
import PageWrapper from "./PageWrapper"
import { Helmet } from "react-helmet-async"
 
const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth",})
    })
    return(
        <>
        <Helmet>
            <title>Contact Us - Get in Touch | Aarti Educare</title>
            <meta name="description" content="Have questions? Contact Aarti Educare for inquiries about our training programs and skill development courses." />
            <meta name="keywords" content="contact us, Aarti Educare, support, training center inquiry" />
            <meta property="og:title" content="Contact Us - Get in Touch | Aarti Educare" />
            <meta property="og:description" content="Reach out to us for any queries related to training programs, courses, or partnerships." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo.png?alt=media&token=e965adc5-aca7-4b16-a5e8-6270665cfe0c" />
            <meta property="og:url" content="https://www.aartieducare.com/contact-us" />
            <meta name="robots" content="index, follow" />
        </Helmet>
            {/* <Header/> */}
            <Nav/>
            <PageWrapper>
            <ContactUs/>
            <WhatsAppButton/>
            <Footer />
            </PageWrapper>
        </>
    )
}

export default ContactUsPage;