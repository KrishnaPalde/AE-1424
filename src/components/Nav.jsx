// import { Fragment, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";

// const navigation = [
//   { name: "Home", href: "/", current: false },
//   { name: "Courses", href: "/courses-we-offer", current: false },
//   { name: "Training Centre", href: "/our-training-centers", current: false },
//   // { name: "Services", href: "#", current: false }, 
//   { name: "Gallery", href: "/gallery", current: false },
//   { name: "About Us", href: "/aboutus", current: false },
//   { name: "Contact Us", href: "/contactus", current: false },

// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };
//   return (
//     <Disclosure as="nav" className="sticky top-0 z-50 max-w-full sm:bg-[#ffffff] shadow-sm bg-transparent">
//       {({ open }) => (
//         <>
//           <div className="max-w-full px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-end h-14 md:grow">
//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 {/* Mobile*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block w-7 h-7 text-[#f6f6f6] bg-[#DF6327]" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block w-7 h-7 text-[#f6f6f6] bg-[#DF6327]" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
//                 {/* <div className="flex items-center flex-shrink-0 mr-6">
//                   <img
//                     className="w-auto h-8"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div> */}
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex items-center justify-center space-x-2">
//                     {navigation.map((item) => (
//                        <a
//                        key={item.name}
//                        href={item.href}
//                        className={classNames(
//                          item.current ? "text-[#95360A] " : "text-[#e67e23]",
//                          "rounded-md px-2 py-2 font-sm ll:text-md 3xl:text-xl font-medium md:text-sm lg:text-lg  lg:px-3 hover:bg-[#f6f6f6]",
//                        )}
//                        aria-current={item.current ? "page" : undefined}
//                      >
//                        {item.name}
//                      </a>
                    
                        
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//           </div>
          
//           <Disclosure.Panel className="sm:hidden">
//             <div className="sticky px-2 pt-2 pb-3 space-y-1 bg-[#f6f6f6] " >
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href} 
//                   className={classNames(
//                     item.current ? "text-[#95360A] bg-[#f6f6f6]" : "text-[#95260A]",
//                     "block rounded-md px-3 py-2 text-base font-medium hover:bg-[#f1f1f1]"
//                   )
//                 }
//                   data-aos="fade-right"
//      data-aos-offset="150"
//      data-aos-easing="ease-in-sine"
//                   aria-current={item.current ? "page" : undefined}
//                   onClick={closeMenu}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }










// import React, { Fragment, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import { servicesData } from "../data/servicesData"; // Import your serviceData

// // Filter services for Candidates and Organizations
// const candidateServices = servicesData.filter(
//   (service) => service.category === "Candidates"
// );

// const organizationServices = servicesData.filter(
//   (service) => service.category === "Organizations"
// );

// const navigation = [
//   { name: "Home", href: "/", current: false },
//   {
//     name: "Who We Are",
//     href: "/who-we-are",
//     current: false,
//     sublinks: [
//       { name: "About Us", href: "/who-we-are/about-us" },
//       { name: "Vision & Mission", href: "/who-we-are/about-us/vision-mission" },
//       { name: "Board of Directors", href: "/who-we-are/about-us/board-directors" },
//     ],
//   },
//   {
//     name: "What We Do",
//     href: "/what-we-do",
//     current: false,
//     sublinks: [
//       { name: "Overview", href: "/what-we-do/services-overview" },
//       {
//         name: "For Candidates",
//         href: "/what-we-do/services-overview",
//         sublinks: candidateServices.map((service) => ({
//           name: service.title,
//           href: `/what-we-do/${service.id}`,
//         })),
//       },
//       {
//         name: "For Organizations",
//         href: "/what-we-do/services-overview",
//         sublinks: organizationServices.map((service) => ({
//           name: service.title,
//           href: `/what-we-do/${service.id}`,
//         })),
//       },
//     ],
//   },
//   { name: "Schemes", href: "/schemes", current: false },
//   // { name: "Training Centers", href: "/training-centers", current: false },
//   // { name: "Courses & Programs", href: "/courses-program", current: false },
//   {
//     name: "Training Centers",
//     href: "/training-centers",
//     current: false,
//     sublinks: [
//       { name: "Training Centers", href: "/training-centers" },
//       { name: "Courses & Programs", href: "/training-centers/courses-offered" },
//       { name: "Find a Center", href: "/training-centers/find-a-center" },
//     ],
//   },
//   // { name: "Gallery", href: "/gallery", current: false },
//   { name: "Contact Us", href: "/contact-us", current: false },
// ];

// export default function Nav() {
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

//   const handleMenuEnter = (menu) => setHoveredMenu(menu);
//   const handleMenuLeave = () => setHoveredMenu(null);
//   const handleSubMenuEnter = (subMenu) => setHoveredSubMenu(subMenu);
//   const handleSubMenuLeave = () => setHoveredSubMenu(null);

//   return (
//     <nav className="sticky top-0 z-10 bg-white shadow-sm">
//       <div className="max-w-full px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-14">
//           {/* Desktop Navigation */}
//           <div className="flex items-center justify-end w-full space-x-4">
//             {navigation.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => handleMenuEnter(item.name)}
//                 onMouseLeave={handleMenuLeave}
//               >
//                 {item.sublinks ? (
//                   <div className="inline-flex items-center text-[#e67e23] px-3 py-2 font-medium hover:text-[#c75f12] cursor-pointer transition-colors duration-200">
//                     {item.name}
//                     <ChevronDownIcon className="ml-1 h-4 w-4 text-[#e67e23] transform group-hover:rotate-180 transition-transform duration-200" />
//                   </div>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className="inline-flex items-center text-[#e67e23] px-3 py-2 font-medium hover:text-[#c75f12] transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 )}

//                 {item.sublinks && hoveredMenu === item.name && (
//                   <div className="absolute left-0 z-10 w-48 mt-0 transition-opacity duration-200 transform scale-95 bg-white border rounded-md shadow-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:scale-100">
//                     {item.sublinks.map((sublink, index) => (
//                       <div
//                         key={sublink.name}
//                         className="relative group"
//                         onMouseEnter={() =>
//                           sublink.sublinks && handleSubMenuEnter(sublink.name)
//                         }
//                         onMouseLeave={handleSubMenuLeave}
//                       >
//                         <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-white">
//                           <Link to={sublink.href} className="flex-grow">
//                             {sublink.name}
//                           </Link>
//                           {sublink.sublinks && (
//                             <ChevronRightIcon className="h-4 w-4 text-[#e67e23]" />
//                           )}
//                         </div>
//                         {index < item.sublinks.length - 1 && (
//                           <div className="my-1 border-t border-gray-200" />
//                         )}
//                         {sublink.sublinks && hoveredSubMenu === sublink.name && (
//                           <div className="absolute top-0 z-10 w-48 mt-0 bg-white border rounded-md shadow-lg left-full">
//                             {sublink.sublinks.map((nestedSublink, nestedIndex) => (
//                               <Fragment key={nestedSublink.name}>
//                                 <Link
//                                   to={nestedSublink.href}
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-white"
//                                 >
//                                   {nestedSublink.name}
//                                 </Link>
//                                 {nestedIndex < sublink.sublinks.length - 1 && (
//                                   <div className="my-1 border-t border-gray-200" />
//                                 )}
//                               </Fragment>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon, PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.webp';
import horizontal_logo from '../assets/logo_horizontal.webp';

import config from "@/config";
import LazyLoad from 'react-lazyload';

const API_URL = config.API_URL;

// Filter services for Candidates and Organizations


export default function Nav() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    logoHeight: 96,
    hideContact: false
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    requestAnimationFrame(() => {
      const newState = scrollY > 150 
        ? { scrolled: true, logoHeight: 78, hideContact: true }
        : { scrolled: false, logoHeight: 96, hideContact: false };
      
      setScrollState(prevState => 
        JSON.stringify(prevState) !== JSON.stringify(newState) 
          ? newState 
          : prevState
      );
    });
  }, []);

  useEffect(() => {
    const optimizedScrollHandler = () => {
      handleScroll();
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScrollHandler);
  }, [handleScroll]);

  const handleMenuEnter = (menu) => setHoveredMenu(menu);
  const handleMenuLeave = () => setHoveredMenu(null);
  const handleSubMenuEnter = (subMenu) => setHoveredSubMenu(subMenu);
  const handleSubMenuLeave = () => setHoveredSubMenu(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({mobileNumber: "‪+91 80878 10364‬", email: "aartieducare@gmail.com"});

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL+"/services");
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
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(API_URL+"/contact");
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
    fetchServices();
  }, []);
    

  const candidateServices = services.filter(
    (service) => service.category === "Candidates"
  );
  
  const organizationServices = services.filter(
    (service) => service.category === "Organizations"
  );
  const isCampaignLive = true;
  const navigation = [
    { name: "Home", href: isCampaignLive ? "/home" : "/", current: false },
    {
      name: "Who We Are",
      href: "/who-we-are",
      current: false,
      sublinks: [
        { name: "About Us", href: "/who-we-are/about-us" },
        { name: "Vision & Mission", href: "/who-we-are/about-us/vision-mission" },
        { name: "Board of Directors", href: "/who-we-are/about-us/board-directors" },
      ],
    },
    {
      name: "What We Do",
      href: "/what-we-do",
      current: false,
      sublinks: [
        { name: "Overview", href: "/what-we-do/services-overview" },
        {
          name: "For Candidates",
          href: "/what-we-do/services-overview",
          sublinks: candidateServices.map((service) => ({
            name: service.title,
            href: `/what-we-do/${service.id}`,
          })),
        },
        {
          name: "For Organizations",
          href: "/what-we-do/services-overview",
          sublinks: organizationServices.map((service) => ({
            name: service.title,
            href: `/what-we-do/${service.id}`,
          })),
        },
      ],
    },
    { name: "Schemes", href: "/schemes", current: false },
    {
      name: "Training Centers",
      href: "/training-centers",
      current: false,
      sublinks: [
        { name: "Training Centers", href: "/training-centers" },
        { name: "Courses & Programs", href: "/training-centers/courses-offered" },
        { name: "Find a Center", href: "/training-centers/find-a-center" },
      ],
    },
    { name: "Online Examinations", href: "/online-examination/login", current: false },
    { name: "Gallery", href: "/gallery", current: false },
    { name: "Contact Us", href: "/contact-us", current: false },
    
  ];


  const ContactInfo = () => (
    <div className={`flex flex-col items-center justify-center xl:items-end sm:flex-row ${scrollState.scrolled ? 'hidden' : 'block'}`}>
      <a href={`tel:${contact.mobileNumber}`}>
        <div className="flex items-center ml-2 sm:px-3 justify-stretch">
          <PhoneIcon className="w-4 h-4 text-gray-500" />
          <span className="ml-2 text-xs lg:mr-8 lg:text-lg">
            {contact.mobileNumber}
          </span>
        </div>
      </a>
      <a href={`mailto:${contact.email}`}>
        <div className="flex items-center justify-around px-3">
          <EnvelopeIcon className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-xs sm:mr-6 lg:text-lg">
            {contact.email}
          </span>
        </div>
      </a>
    </div>
  );

  const DesktopNavigation = () => (
    <nav className="hidden lg:block">
      <div className="relative flex items-center justify-end w-full space-x-4">
        {navigation.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => handleMenuEnter(item.name)}
            onMouseLeave={handleMenuLeave}
          >
            {item.sublinks ? (
              <div className="inline-flex items-center text-[#e67e23] px-3 py-2  font-medium hover:text-[#c75f12] cursor-pointer transition-colors duration-200">
                {item.name}
                <ChevronDownIcon className="ml-1 h-4 w-4 text-[#e67e23] tra`nsform `group-hover:rotate-180 transition-transform duration-200" />
              </div>
            ) : (
              <Link
                to={item.href}
                className="inline-flex items-center text-[#e67e23] px-3 py-2 font-medium hover:text-[#c75f12] transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}

            {item.sublinks && hoveredMenu === item.name && (
              <div className="absolute left-0 z-10 w-48 mt-0 transition-opacity duration-200 transform scale-95 bg-white border rounded-md shadow-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:scale-100">
                {item.sublinks.map((sublink, index) => (
                  <div
                    key={sublink.name}
                    className="relative group"
                    onMouseEnter={() =>
                      sublink.sublinks && handleSubMenuEnter(sublink.name)
                    }
                    onMouseLeave={handleSubMenuLeave}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-white">
                      <Link to={sublink.href} className="flex-grow">
                        {sublink.name}
                      </Link>
                      {sublink.sublinks && (
                        <ChevronRightIcon className="h-4 w-4 text-[#e67e23]" />
                      )}
                    </div>
                    {index < item.sublinks.length - 1 && (
                      <div className="my-1 border-t border-gray-200" />
                    )}
                    {sublink.sublinks && hoveredSubMenu === sublink.name && (
                      <div className="absolute top-0 z-10 w-48 mt-0 bg-white border rounded-md shadow-lg left-full">
                        {sublink.sublinks.map((nestedSublink, nestedIndex) => (
                          <React.Fragment key={nestedSublink.name}>
                            <Link
                              reloadDocument
                              to={nestedSublink.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-white"
                            >
                              {nestedSublink.name}
                            </Link>
                            {nestedIndex < sublink.sublinks.length - 1 && (
                              <div className="my-1 border-t border-gray-200" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
   
  );

  const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };
  
    return (
      <>
        <button 
          onClick={toggleMenu} 
          className="fixed z-50 flex justify-end pl-2 mr-auto bg-gray lg:hidden"
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#e67e23]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#e67e23]" />
          )}
        </button>
  
        {isOpen && (
          <div 
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
            onClick={toggleMenu}
          >
            <div 
              className="fixed top-0 left-0 w-[85%] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full p-6 overflow-y-auto">
                <button 
                  onClick={toggleMenu} 
                  className="absolute top-4 right-4 text-gray-600 hover:text-[#e67e23] transition-colors"
                  aria-label="Close Menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
  
                <nav className="mt-12 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                      {item.sublinks ? (
                        <details className="group">
                          <summary className="flex justify-between items-center py-4 text-[#e67e23] cursor-pointer select-none">
                            <span className="text-lg font-medium">{item.name}</span>
                            <ChevronDownIcon className="w-5 h-5 transition-transform transform group-open:rotate-180" />
                          </summary>
                          <div className="pb-2 pl-4 space-y-2">
                            {item.sublinks.map((sublink) => (
                              <div key={sublink.name}>
                                {sublink.sublinks ? (
                                  <details className="group">
                                    <summary className="flex items-center justify-between py-2 text-gray-700 cursor-pointer select-none">
                                      <span>{sublink.name}</span>
                                      <ChevronRightIcon className="w-4 h-4 transition-transform transform group-open:rotate-90" />
                                    </summary>
                                    <div className="pt-2 pl-4 space-y-2">
                                      {sublink.sublinks.map((nestedSublink) => (
                                        <Link
                                          key={nestedSublink.name}
                                          to={nestedSublink.href}
                                          className="block py-2 text-gray-600 hover:text-[#e67e23] transition-colors"
                                          onClick={toggleMenu}
                                        >
                                          {nestedSublink.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </details>
                                ) : (
                                  <Link
                                    to={sublink.href}
                                    className="block py-2 text-gray-700 hover:text-[#e67e23] transition-colors"
                                    onClick={toggleMenu}
                                  >
                                    {sublink.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          to={item.href}
                          className="block py-4 text-[#e67e23] text-lg font-medium hover:opacity-80 transition-opacity"
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  return (
    <>
    
    <header 
      className={`
        sticky top-0 z-50 bg-white shadow-sm 
        transition-all duration-300 ease-in-out 
        will-change-[padding,transform]
        ${scrollState.scrolled ? 'pt-1' : 'py-2'}
      `}
      style={{
        willChange: 'padding, transform'
      }}
    >
      <div className="container max-w-full px-4 lg:px-8">
        <div className="grid items-center grid-cols-[auto,1fr]">
         
        <div className="flex justify-center lg:justify-start">
            <Link to="/">
            <LazyLoad height={200} offset={150} once>
              <img
                src={scrollState.scrolled ? horizontal_logo : logo}
                alt="Aarti Educare Logo"
                className="object-contain transition-all duration-300 ease-in-out"
                style={{
                  height: `${scrollState.logoHeight}px`,
                  width: 'auto',
                  transformOrigin: 'center',
                  willChange: 'height, transform'
                }}
              />
              </LazyLoad>
            </Link>
          </div>

         
          <div className="flex flex-col items-center space-y-2 lg:items-end">
            <div className="flex justify-center w-full lg:justify-end">
              <ContactInfo />
            </div>

            <div className='grow'>
            <DesktopNavigation />  
            </div>

          </div>
        </div>
      </div>
      
    </header>
    <MobileNavigation />
    </>
  );
}