import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
  ChevronRight
} from "lucide-react";

import config from "@/config";
import LazyLoad from "react-lazyload";
import logoHorizontal from "../assets/logo_horizontal.webp";

const API_URL = config.API_URL;
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contact, setContact] = useState({
    address: 'Utkarsha Training Centre, Nashik, Maharashtra',
    mobileNumber: '+91 80878 10364',
    email: 'aartieducare@gmail.com',
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchContactDetails = async () => {
        try {
          const response = await fetch(API_URL + "/contact");
          if (response.ok) {
            const data = await response.json();
            setContact(data);
          }
        } catch (err) {
          console.error("Error fetching contact:", err);
        }
      };
      const fetchServices = async () => {
        try {
          const response = await fetch(API_URL + "/services");
          if (response.ok) {
            const data = await response.json();
            setServices(data);
          }
        } catch (err) {
          console.error("Error fetching services:", err);
        }
      };
      fetchServices();
      fetchContactDetails();
    }, []);

  return (
    <footer className="text-gray-400 bg-gray-950 font-sans">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <LazyLoad height={80} offset={100} once>
              <img
                src={logoHorizontal}
                alt="Aarti Educare"
                className="w-48 h-auto object-contain bg-white/5 rounded-lg p-2"
              />
            </LazyLoad>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering individuals through government-sponsored training and
              education programs for a brighter future.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.facebook.com/share/1Ydd1Gp3Xe/" icon={<Facebook size={18} />} />
              <SocialIcon href="https://www.instagram.com/aartieducare?igsh=NDBnYjdkMnh6eDRn" icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/who-we-are/about-us" label="About Us" />
              <FooterLink href="/online-examination/login" label="Online Examination" />
              <FooterLink href="/training-centers" label="Training Centers" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/login" label="Admin Login" />
            </ul>
          </div>

          {/* 3. Our Services Section - UPGRADED */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
              Key Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.length > 0 ? (
                <>
                  {services.slice(0, 5).map((service, index) => (
                    <li key={index} className="group">
                      <a 
                        href={`/what-we-do/services-overview`} 
                        className="flex items-start transition-colors group-hover:text-[#e67e23]"
                      >
                        <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-gray-600 group-hover:text-[#e67e23] transition-colors" />
                        <span className="line-clamp-1">{service.title}</span>
                      </a>
                    </li>
                  ))}
                  <li className="pt-2">
                    <a 
                      href="/what-we-do/services-overview" 
                      className="inline-flex items-center text-xs font-semibold text-[#e67e23] uppercase tracking-wide hover:text-white transition-colors"
                    >
                      View All Services <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </li>
                </>
              ) : (
                <li className="text-gray-500 italic">Loading services...</li>
              )}
            </ul>
          </div>

          {/* 4. Contact Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="flex-shrink-0 w-5 h-5 text-[#e67e23] mt-0.5" />
                <span className="group-hover:text-gray-200 transition-colors">
                  {contact.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="flex-shrink-0 w-5 h-5 text-[#e67e23]" />
                <a href={`tel:${contact.mobileNumber.replace(/\s+/g, '')}`} className="group-hover:text-white transition-colors">
                  {contact.mobileNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="flex-shrink-0 w-5 h-5 text-[#e67e23]" />
                <a href={`mailto:${contact.email}`} className="group-hover:text-white transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="px-6 py-6 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Aarti Educare Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
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

// Helper Components for Cleaner Code
const FooterLink = ({ href, label }) => (
  <li>
    <a href={href} className="block hover:text-[#e67e23] hover:translate-x-1 transition-all duration-200">
      {label}
    </a>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#e67e23] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;