// PrivacyPolicy.js
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import PageWrapper from "./PageWrapper";

import config from "@/config";

const API_URL = config.API_URL;

const PrivacyPolicy = () => {
  const [contact, setContact] = useState({email: 'admin@aartieducare.com',});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(API_URL + "/contact");
        if (!response.ok) throw new Error("Failed to fetch services");
        const data = await response.json();
        setContact(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactDetails();
  }, []);


  return (
    <PageWrapper>
    <Layout title="Privacy Policy">
      <div className="space-y-12 text-gray-800">
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
          <a href={`mailto:${contact.email}`} className="text-[#e67e23] underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </Layout>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
