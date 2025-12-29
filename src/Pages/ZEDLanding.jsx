import React, { Suspense, lazy } from 'react';
import SEO from '../components/common/seo';
import Hero from '../components/zed/Hero';
import Nav from '@/components/Nav';
// Lazy load non-critical sections for performance
const AboutZed = lazy(() => import('../components/zed/AboutZed'));
const Benefits = lazy(() => import('../components/zed/Benefits'));
const Eligibility = lazy(() => import('../components/zed/Eligibility'));
const Process = lazy(() => import('../components/zed/Process'));
const Role = lazy(() => import('../components/zed/Role'));
const FooterCTA = lazy(() => import('../components/zed/FooterCTA'));

const ZedLanding = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <SEO 
        title="ZED Certification for MSMEs - Government Recognized" 
        description="Get ZED Certified with Aarti Educare. Unlock government benefits, subsidies, and global recognition for your manufacturing unit."
      />
      
      <Nav/>
      
      <Hero />
      
      <Suspense fallback={<div className="h-20" />}>
        <AboutZed />
        <Benefits />
        <Eligibility />
        <Process />
        <Role />
        <FooterCTA />
      </Suspense>
    </main>
  );
};

export default ZedLanding;