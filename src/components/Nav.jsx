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


import React, { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { servicesData } from "../data/servicesData"; // Import your serviceData

// Filter services for Candidates and Organizations
const candidateServices = servicesData.filter(
  (service) => service.category === "Candidates"
);

const organizationServices = servicesData.filter(
  (service) => service.category === "Organizations"
);

const navigation = [
  { name: "Home", href: "/", current: false },
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
  // { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

export default function Nav() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  const handleMenuEnter = (menu) => setHoveredMenu(menu);
  const handleMenuLeave = () => setHoveredMenu(null);
  const handleSubMenuEnter = (subMenu) => setHoveredSubMenu(subMenu);
  const handleSubMenuLeave = () => setHoveredSubMenu(null);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-full px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-end w-full space-x-4">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                {item.sublinks ? (
                  <div className="inline-flex items-center text-[#e67e23] px-3 py-2 font-medium hover:text-[#c75f12] cursor-pointer transition-colors duration-200">
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4 text-[#e67e23] transform group-hover:rotate-180 transition-transform duration-200" />
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
                  <div className="absolute left-0 mt-0 bg-white border rounded-md shadow-lg z-10 w-48 group-hover:block transition-opacity duration-200 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100">
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
                          <div className="border-t border-gray-200 my-1" />
                        )}
                        {sublink.sublinks && hoveredSubMenu === sublink.name && (
                          <div className="absolute left-full top-0 mt-0 bg-white border rounded-md shadow-lg z-10 w-48">
                            {sublink.sublinks.map((nestedSublink, nestedIndex) => (
                              <Fragment key={nestedSublink.name}>
                                <Link
                                  to={nestedSublink.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-white"
                                >
                                  {nestedSublink.name}
                                </Link>
                                {nestedIndex < sublink.sublinks.length - 1 && (
                                  <div className="border-t border-gray-200 my-1" />
                                )}
                              </Fragment>
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
        </div>
      </div>
    </nav>
  );
}
