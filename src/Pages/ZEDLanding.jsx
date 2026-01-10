import React, { Suspense, lazy } from 'react';
import SEO from '../components/common/seo';
import Hero from '../components/zed/Hero';
import Nav from '@/components/Nav';

// Lazy load non-critical sections
const AboutZed = lazy(() => import('../components/zed/AboutZed'));
const CertificationLevels = lazy(() => import('../components/zed/CertificationLevels')); // NEW
const Benefits = lazy(() => import('../components/zed/Benefits'));
const Process = lazy(() => import('../components/zed/Process'));
const PartnerWithUs = lazy(() => import('../components/zed/PartnerWithUs')); // NEW
const EnquiryForm = lazy(() => import('../components/zed/EnquiryForm')); // NEW
const FooterCTA = lazy(() => import('../components/zed/FooterCTA'));

const ZedLanding = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth">
      <SEO 
        title="Get ZED Certified | Subsidies for MSMEs & Partner Program" 
        description="Aarti Educare helps MSMEs achieve Bronze, Silver, & Gold ZED Certification. Unlock government subsidies. Facilitators join our partner network."
      />
      
      <Nav/>
      
      <Hero />
      
      <Suspense fallback={<div className="h-20 bg-slate-50" />}>
        {/* Core Education */}
        <AboutZed />
        <CertificationLevels /> {/* Explains Bronze/Silver/Gold */}
        <Benefits />
        <Process />
        
        {/* Dual Call to Action Area */}
        <div id="enquiry-section" className="scroll-mt-24">
           <EnquiryForm />
        </div>

        <PartnerWithUs /> {/* For Facilitators */}
        
        <FooterCTA />
      </Suspense>
    </main>
  );
};

export default ZedLanding;