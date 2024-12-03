import React from "react";
import Layout from "./Layout";
import { servicesData } from "../data/servicesData";
import { schemesData } from "../data/schemeData"; // Import schemesData

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/who-we-are/about-us" },
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
      links: servicesData.map((service) => ({
        name: service.title,
        path: `/what-we-do/${service.id}`,
      })),
    },
    {
      title: "Schemes",
      links: schemesData.map((scheme) => ({
        name: scheme.title,
        path: `/schemes/${scheme.id}`,
      })),
    },
    
  ];

  return (
    <Layout title="Sitemap">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-[#e67e23] mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2">
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
  );
};

export default Sitemap;
