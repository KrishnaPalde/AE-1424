import React, { useEffect } from "react"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"
import { Helmet } from "react-helmet-async"
import Nav from "@/components/Nav"
import Careers from "@/components/CareersComponent"
import WhatsAppButton from "@/components/WhatsappButton"

const CareersPage = () => {
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    })

    return(
        <>
        <Helmet>
            <title>Careers - Join Our Team | Aarti Educare</title>
            <meta name="description" content="Build a rewarding career with Aarti Educare. Join a dynamic team dedicated to skill development and youth empowerment." />
            <meta name="keywords" content="jobs in nashik, education careers, skill development jobs, aarti educare careers" />
            <meta property="og:title" content="Careers - Join Our Team | Aarti Educare" />
            <meta property="og:description" content="Join our mission to empower the nation through skill development." />
            <meta property="og:url" content="https://www.aartieducare.com/careers" />
            <meta name="robots" content="index, follow" />
        </Helmet>
        
        <Nav/>
        
        <PageWrapper>
            <Careers/>
            <WhatsAppButton/>
            <Footer/>
        </PageWrapper>
        </>
    )
}

export default CareersPage;