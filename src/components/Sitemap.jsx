import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { servicesData } from "../data/servicesData";
import { schemesData } from "../data/schemeData"; // Import schemesData
import PageWrapper from "./PageWrapper";

import config from "@/config";

const API_URL = config.API_URL;

const Sitemap = () => {
  const [services, setServices] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL + "/services");
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    const fetchSchemes = async () => {
      try {
        const response = await fetch(API_URL + "/schemes");
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
    fetchServices();
  }, []);

  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Who We Are", path: "/who-we-are/about-us" },
        // { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
      ],
    },
    {
      title: "Training Centers",
      links: [
        { name: "Training Centers", path: "/training-centers" },
        { name: "Courses Offered", path: "/training-centers/courses-offered" },
        { name: "Find a Center", path: "/training-centers/find-a-center" },
      ],
    },
    {
      title: "What We Do",
      links: services.map((service) => ({
        name: service.title,
        path: `/what-we-do/${service.id}`,
      })),
    },
    {
      title: "Schemes",
      links: schemes.map((scheme) => ({
        name: scheme.title,
        path: `/schemes/${scheme.id}`,
      })),
    },
    
  ];

  return (
    <PageWrapper>
    <Layout title="Sitemap">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-[#e67e23] mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="text-gray-800 hover:text-[#e67e23] underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
    </PageWrapper>
  );
};

export default Sitemap;
