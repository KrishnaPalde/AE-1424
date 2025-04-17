import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import config from "@/config";
import LazyLoad from "react-lazyload";
import logoHorizontal from "../assets/logo_horizontal.webp";

const API_URL = config.API_URL;
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contact, setContact] = useState({address: 'Utkarsha Training Centre, Nashik, Maharashtra',
    mobileNumber: '+91 80878 10364',
    email: 'aartieducare@gmail.com',});
  const [services, setCourses] = useState([]);
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
      const fetchCourses = async () => {
        try {
          const response = await fetch(API_URL + "/services");
          if (!response.ok) throw new Error("Failed to fetch services");
          const data = await response.json();
          setCourses(data);
        } catch (err) {
          setError("Failed to load services.");
          console.error("Error fetching services:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchCourses();
      fetchContactDetails();
    }, []);

  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
          <LazyLoad height={200} offset={150} once>
          <img
            // src="https://firebasestorage.googleapis.com/v0/b/aartieducare-ms.appspot.com/o/Logo%2Flogo_horizontal.webp?alt=media&token=5eaef1a3-bc99-40ff-a414-d4cbb6bc3d00"
            src={logoHorizontal}
            alt="Aarti Educare"
            className="w-[200px] h-[100px] object-cover rounded-xl shadow-lg"
          />
          </LazyLoad>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Aarti Educare
            </h3>
            <p className="text-sm">
              Empowering individuals through government-sponsored training and
              education programs for a brighter future.
            </p>
            <div className="flex pt-4 space-x-4">
              <a href="https://www.facebook.com/share/1Ydd1Gp3Xe/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/aartieducare?igsh=NDBnYjdkMnh6eDRn" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/who-we-are/about-us" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/what-we-do/services-overview" className="transition-colors hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/schemes" className="transition-colors hover:text-white">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="/training-centers" className="transition-colors hover:text-white">
                  Training Centers
                </a>
              </li>
              <li>
                <a href="/contact-us" className="transition-colors hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/login" className="transition-colors hover:text-white">
                  Admin Login
                </a>
              </li>
              <li>
                <a href="/online-examination/login" className="transition-colors hover:text-white">
                  Online Examination
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
  <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
  <ul className="space-y-2">
    {services.length > 0 ? (
      <>
        {services.slice(0, Math.min(services.length, 6)).map((service) => (
          <li key={service._id.$oid}>
            <a href="/what-we-do/services-overview" className="transition-colors hover:text-white">
              {service.title}
            </a>
          </li>
        ))}
        {services.length > 6 && (
          <li>
            <a href="/what-we-do/services-overview" className="text-[#e67e23] hover:underline font-medium">
              Read More
            </a>
          </li>
        )}
      </>
    ) : (
      <li className="text-gray-400">No programs available</li>
    )}
  </ul>
</div>

          {/* <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/what-we-do/services-overview"
                  className="transition-colors hover:text-white"
                >
                  Services Overview
                </a>
              </li>
              <li>
                <a
                  href="/training-centers"
                  className="transition-colors hover:text-white"
                >
                  Training Centers
                </a>
              </li>
              <li>
                <a
                  href="/training-centers/find-a-center"
                  className="transition-colors hover:text-white"
                >
                  Find a Center
                </a>
              </li>
              <li>
                <a
                  href="/training-centers/services-offered"
                  className="transition-colors hover:text-white"
                >
                  Courses Offered
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1" />
                <p className="text-sm">
                  {contact.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5" />
                <p className="text-sm">
                  <a href={`tel:${contact.mobileNumber.replace(/\s+/g, '')}`} className="hover:underline">
                    {contact.mobileNumber}
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5" />
                <p className="text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="px-4 py-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm">
              © {currentYear} Aarti Educare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a href="/sitemap" className="transition-colors hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="bg-gray-800 py-4">
        <div className="px-4 mx-auto max-w-7xl flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Powered by{" "}
            <a
              href="https://tantratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e67e23] hover:underline"
            >
              Tantra Technologies
            </a>{" "}
            | Your trusted IT consulting partner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
