// PrivacyPolicy.js
import React from "react";
import Layout from "./Layout";
import PageWrapper from "./PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
    <Layout title="Privacy Policy">
      <div className="space-y-6 text-gray-800">
        <p>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data.
        </p>
        <h2 className="text-2xl font-semibold text-[#e67e23]">Information We Collect</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Personal details like name, email, and contact information.</li>
          <li>
            Usage data such as pages visited, time spent, and interaction
            patterns.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#e67e23]">How We Use Your Data</h2>
        <p>
          Your data helps us improve our services, provide personalized
          experiences, and communicate effectively.
        </p>
        <h2 className="text-2xl font-semibold text-[#e67e23]">Your Rights</h2>
        <p>
          You can request access, correction, or deletion of your data by
          contacting us at{" "}
          <a href="mailto:office@aartieducare.com" className="text-[#e67e23] underline">
            office@aartieducare.com
          </a>
          .
        </p>
      </div>
    </Layout>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
