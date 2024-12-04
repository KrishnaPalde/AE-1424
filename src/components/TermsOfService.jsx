// TermsOfService.js
import React from "react";
import Layout from "./Layout";
import PageWrapper from "./PageWrapper";

const TermsOfService = () => {
  return (
    <PageWrapper>
    <Layout title="Terms of Service">
      <div className="space-y-6 text-gray-800">
        <p>
          By accessing and using our website, you agree to comply with the
          following terms and conditions:
        </p>
        <h2 className="text-2xl font-semibold text-[#e67e23]">1. Use of Content</h2>
        <p>
          All content on this website is for informational purposes only. You
          may not reproduce or distribute any material without prior written
          consent.
        </p>
        <h2 className="text-2xl font-semibold text-[#e67e23]">2. User Conduct</h2>
        <p>
          Users must not post or transmit any content that is unlawful,
          harmful, or disruptive.
        </p>
        <h2 className="text-2xl font-semibold text-[#e67e23]">3. Limitation of Liability</h2>
        <p>
          We are not responsible for any damages arising from the use of this
          website or services.
        </p>
      </div>
    </Layout>
    </PageWrapper>
  );
};

export default TermsOfService;
