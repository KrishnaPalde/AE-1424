import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Aarti Educare
            </h3>
            <p className="text-sm">
              Empowering individuals through government-sponsored training and
              education programs for a brighter future.
            </p>
            <div className="flex pt-4 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
                <a href="/schemes" className="transition-colors hover:text-white">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="/contact-us" className="transition-colors hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
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
                  href="/training-centers/courses-offered"
                  className="transition-colors hover:text-white"
                >
                  Courses Offered
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1" />
                <p className="text-sm">
                  Utkarsha Training Centre, Plot No. 58, Ambad - Uttam Nagar Rd, behind Shivanjali Petrol Pump, DGP Nagar 2, Murari Nagar, Nashik, Maharashtra 422010
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5" />
                <p className="text-sm">
                  <a href="tel:+918237776233" className="hover:underline">
                    +91 82377 76233
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5" />
                <p className="text-sm">
                  <a
                    href="mailto:contact@aartieducare.com"
                    className="hover:underline"
                  >
                    contact@aartieducare.com
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
              href="https://tantra-techn.web.app"
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
