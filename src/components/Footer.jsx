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
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Aarti Educare
            </h3>
            <p className="text-sm">
              Empowering individuals through government-sponsored training and
              education programs for a brighter future.
            </p>
            <div className="flex pt-4 space-x-4">
              <Facebook className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              <Twitter className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              <Linkedin className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
              <Instagram className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="transition-colors hover:text-white"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="/schemes"
                  className="transition-colors hover:text-white"
                >
                  Government Schemes
                </a>
              </li>
              <li>
                <a
                  href="/success-stories"
                  className="transition-colors hover:text-white"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/skill-development"
                  className="transition-colors hover:text-white"
                >
                  Skill Development
                </a>
              </li>
              <li>
                <a
                  href="/vocational-training"
                  className="transition-colors hover:text-white"
                >
                  Vocational Training
                </a>
              </li>
              <li>
                <a
                  href="/certification"
                  className="transition-colors hover:text-white"
                >
                  Certification Courses
                </a>
              </li>
              <li>
                <a
                  href="/placement"
                  className="transition-colors hover:text-white"
                >
                  Placement Assistance
                </a>
              </li>
            </ul>
          </div>

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
                <p className="text-sm">+91 82377 76233</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5" />
                <p className="text-sm">contact@aartieducare.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="px-4 py-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm">
              © {currentYear} Aarti Educare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="/sitemap" className="transition-colors hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
