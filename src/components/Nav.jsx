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


import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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
      { name: "Skill Development Training Programs", href: "/what-we-do/team" },
      { name: "Training Center Partnerships", href: "/what-we-do/tc-partnerships" },
      { name: "Placement Assistance", href: "/what-we-do/placement" },
      { name: "Tenders and Work Orders", href: "/what-we-do/work-orders" },
    ],
  },
  {
    name: "Training Centers",
    href: "/training-centers",
    current: false,
    sublinks: [
      { name: "Training Centers", href: "/training-centers" },
      { name: "Programs", href: "/training-centers/courses-offered" },
      { name: "Find a Training Center", href: "/training-centers/find-a-center"}
    ],
  },
  { name: "Schemes", href: "/schemes", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 max-w-full sm:bg-white shadow-sm bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block w-6 h-6" aria-hidden="true" /> : <Bars3Icon className="block w-6 h-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>

              {/* Right-aligned navigation items */}
              <div className="flex-1 flex items-center justify-end">
                <div className="hidden sm:flex space-x-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group flex items-center">
                      {item.sublinks ? (
                        <>
                          <span className="inline-flex items-center text-[#e67e23] px-3 py-2 font-medium hover:text-[#c75f12] cursor-pointer transition-colors duration-200">
                            {item.name}
                            <ChevronDownIcon
                              className="ml-1 h-4 w-4 text-[#e67e23] transform transition-transform duration-200 group-hover:rotate-180"
                            />
                          </span>
                          <div className="absolute left-0 z-10 top-8 hidden mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block transition-opacity duration-200 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100">
                            <div className="py-1">
                              {item.sublinks.map((sublink, index) => (
                                <Fragment key={sublink.name}>
                                  <Link
                                    to={sublink.href}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#e67e23] hover:text-[#f9f9f9] transition-colors duration-200"
                                  >
                                    {sublink.name}
                                  </Link>
                                  {index < item.sublinks.length - 1 && (
                                    <div className="border-t border-gray-200 my-1" />
                                  )}
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="inline-flex items-center text-[#e67e23] hover:text-[#c75f12] px-3 py-2 font-medium transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                  {item.sublinks && (
                    <div className="ml-4">
                      {item.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
