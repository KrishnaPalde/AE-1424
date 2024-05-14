import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Training Programs", href: "/courses-we-offer", current: false },
  { name: "Training Centeres", href: "/our-training-centers", current: false },
  { name: "Events", href: "#", current: false }, 
  { name: "Gallery", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 max-w-full sm:bg-[#ffffff] shadow-sm bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-end h-14 md:grow">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-7 h-7 text-[#f6f6f6] bg-[#DF6327]" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-7 h-7 text-[#f6f6f6] bg-[#DF6327]" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
                {/* <div className="flex items-center flex-shrink-0 mr-6">
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center justify-center space-x-2">
                    {navigation.map((item) => (
                       <a
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         item.current ? "text-[#95360A] " : "text-[#95260A]",
                         "rounded-md px-2 py-2 font-sm ll:text-md 3xl:text-xl md:text-sm lg:text-lg  lg:px-3 hover:bg-[#f6f6f6]",
                       )}
                       aria-current={item.current ? "page" : undefined}
                     >
                       {item.name}
                     </a>
                    
                        
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <Disclosure.Panel className="sm:hidden">
            <div className="sticky px-2 pt-2 pb-3 space-y-1 bg-[#f6f6f6] " >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href} 
                  className={classNames(
                    item.current ? "text-[#95360A] bg-[#f6f6f6]" : "text-[#95260A]",
                    "block rounded-md px-3 py-2 text-base font-medium hover:bg-[#f1f1f1]"
                  )
                }
                  data-aos="fade-right"
     data-aos-offset="150"
     data-aos-easing="ease-in-sine"
                  aria-current={item.current ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

