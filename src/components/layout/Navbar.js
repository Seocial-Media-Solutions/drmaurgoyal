'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navbarRef = useRef(null);

  // Hide navbar on admin routes
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  // Newborn care topics
  const newbornCareTopics = [
    {
      id: 'surviving-newborn',
      title: '10 Tips for surviving newborn stage',
      image: '/images/newborn-care/surviving-newborn.png',
      slug: '/newborn-care/surviving-newborn-stage'
    },
    {
      id: 'swaddle',
      title: 'How do I swaddle my baby?',
      image: '/images/newborn-care/swaddle-baby.png',
      slug: '/newborn-care/how-to-swaddle'
    },
    {
      id: 'first-bath',
      title: 'Baby\'s First Bath',
      image: '/images/newborn-care/first-bath.png',
      slug: '/newborn-care/first-bath'
    },
    {
      id: 'common-conditions',
      title: 'Is this normal? Common conditions in newborn',
      image: '/images/newborn-care/common-conditions.png',
      slug: '/newborn-care/common-conditions'
    },
    {
      id: 'vaginal-discharge',
      title: 'Is vaginal discharge normal in baby?',
      image: '/images/newborn-care/vaginal-discharge.png',
      slug: '/newborn-care/vaginal-discharge'
    },
    {
      id: 'diaper-rash',
      title: 'What\'s the best treatment for diaper rash?',
      image: '/images/newborn-care/diaper-rash.png',
      slug: '/newborn-care/diaper-rash-treatment'
    },
    {
      id: 'black-poop',
      title: 'Why does my newborn have black poop?',
      image: '/images/newborn-care/black-poop.png',
      slug: '/newborn-care/black-poop'
    },
    {
      id: 'green-poop',
      title: 'Is green poop normal?',
      image: '/images/newborn-care/green-poop.png',
      slug: '/newborn-care/green-poop'
    },
    {
      id: 'room-temperature',
      title: 'What is the ideal temperature for my baby\'s room?',
      image: '/images/newborn-care/room-temperature.png',
      slug: '/newborn-care/ideal-room-temperature'
    },
    {
      id: 'enough-food',
      title: 'Is my baby getting enough to eat?',
      image: '/images/newborn-care/enough-food.jpg',
      slug: '/newborn-care/enough-food'
    },
    {
      id: 'baby-cry',
      title: 'Decoding your baby\'s cry',
      image: '/images/newborn-care/baby-cry.png',
      slug: '/newborn-care/decoding-cry'
    },
    {
      id: 'pacifiers',
      title: 'Pacifiers',
      image: '/images/newborn-care/pacifiers.png',
      slug: '/newborn-care/pacifiers'
    }
  ];

  // Menu data structure
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
      dropdownItems: [
        {
          title: "General Pediatrics OPD",
          href: "/services/general-pediatrics-opd",
        },
        {
          title: "Pediatric Emergency Services",
          href: "/services/pediatrics-emergency-services",
        },
        {
          title: "Pediatric Critical Care",
          href: "/services/pediatric-critical-care",
        },
        {
          title: "Neonatology Services",
          href: "/services/neonatology-services",
        },
        {
          title: "Newborn Screening",
          href: "/services/newborn-screening",
        },
        {
          title: "Vaccination Programs",
          href: "/services/vacination-programs",
        },
        {
          title: "Adolescent Health Services",
          href: "/services/adolescent-health-services",
        },
        {
          title: "Support Services",
          href: "/services/support-services",
        },
      ]
    },
    {
      title: "Resources",
      href: "/resources",
      dropdownItems: [
        { title: "FAQ", description: "Answers to common questions", href: "/faq" },
        { title: "Blogs", description: "Articles and information for parents", href: "/blog" },
        { title: "Gallery", description: "Articles and information for parents", href: "/gallery" },
        { title: "Testimonials", description: "Stories of hope, healing, and happiness from our little patients and their parents", href: "/testimonials" },
      ]
    },
    {
      title: "Parents Corner",
      href: "/parents-corner",
      dropdownItems: [
        {
          title: "Newborn Care",
          description: "Essential information for new parents",
          href: "/newborn-care",
          hasSubmenu: true,
          submenuItems: newbornCareTopics
        },
        {
          title: "Adolescent Care",
          description: "Guidance for teenage health and development",
          href: "/adolescent-care"
        },
      ]
    },
    {
      title: "About",
      href: "/about-us",
    }
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.15 }
    }
  };

  const submenuVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.15 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="">
      {/* Responsive header */}
      <nav ref={navbarRef} className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg w-full sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            {/*  newLogo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-16 w-16   ml-[-20px] md:h-20 md:w-20 relative">
                  <Image
                    src="/images/NewLogo.jpeg"
                    alt="Mayur Childern Hospital Logo"
                    width={100}
                    height={100}
                    priority
                    className="object-contain rounded-full"
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00bcd4] via-[#9c27b0] to-[#e50087] bg-clip-text text-transparent">
                    Mayur Childern Hospital
                  </h2>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {(item.title === "Parents Corner" || item.title === "Resources") && item.dropdownItems ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                    >
                      {item.title}
                      {item.dropdownItems && item.title === "Services" && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-600' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown(index);
                          }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === index && item.dropdownItems && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute z-40 bg-white shadow-lg rounded-lg border border-gray-100 mt-1 ${item.title === "Services" ? "w-72 right-0" : "w-64 right-0"}`}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <div key={idx} className="relative">
                              {dropdownItem.hasSubmenu ? (
                                <div
                                  className="block px-4 py-3 hover:bg-blue-50 transition-colors relative"
                                  onMouseEnter={() => toggleSubmenu(idx)}
                                  onMouseLeave={() => toggleSubmenu(null)}
                                >
                                  <div className="flex justify-between items-center">
                                    <Link
                                      href={dropdownItem.href}
                                      className="flex-1"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                                      {dropdownItem.description && (
                                        <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                                      )}
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        toggleSubmenu(idx);
                                      }}
                                      aria-label="Toggle submenu"
                                      className="p-1 hover:bg-blue-100 rounded-full focus:outline-none"
                                    >
                                      <ChevronRight className="h-4 w-4 text-gray-400" />
                                    </button>
                                  </div>

                                  {/* Submenu for Newborn Care */}
                                  <AnimatePresence>
                                    {activeSubmenu === idx && (
                                      <motion.div
                                        variants={submenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute left-full top-0 bg-white shadow-lg rounded-lg border border-gray-100 w-72 max-h-96 overflow-y-auto"
                                        style={{ marginLeft: '1px' }}
                                      >
                                        <div className="py-2">
                                          {dropdownItem.submenuItems.map((submenuItem, subIdx) => (
                                            <Link
                                              key={subIdx}
                                              href={submenuItem.slug}
                                              className="block text-black px-4 py-3 hover:bg-blue-50 transition-colors text-sm"
                                              onClick={() => {
                                                setActiveDropdown(null);
                                                setActiveSubmenu(null);
                                              }}
                                            >
                                              {submenuItem.title}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                                  {dropdownItem.description && (
                                    <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                                  )}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/locations"
                className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/bookconsultation" target='_blank'
                className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 flex items-center shadow-md hover:shadow-lg transition-all duration-200 text-sm"
              >
                Book Consultation
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-3 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0">
                    {(item.title === "Parents Corner" || item.title === "Resources") && item.dropdownItems ? (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full flex justify-between items-center px-3 py-3 text-gray-800 hover:bg-gray-50 rounded-md font-medium"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-500' : ''}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-gray-800 hover:bg-gray-50 rounded-md font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}

                    {item.dropdownItems && item.title === "Services" && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full flex justify-between items-center px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                      >
                        <span className="text-sm">View options</span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-500' : ''}`}
                        />
                      </button>
                    )}

                    <AnimatePresence>
                      {activeDropdown === index && item.dropdownItems && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="px-3 py-2 bg-gray-50 rounded-md mb-2"
                        >
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <div key={idx}>
                              {dropdownItem.hasSubmenu ? (
                                <div>
                                  <button
                                    onClick={() => toggleSubmenu(idx)}
                                    className="w-full flex justify-between items-center py-2 border-b border-gray-100 hover:bg-blue-50 px-3 rounded-md my-1"
                                  >
                                    <Link
                                      href={dropdownItem.href}
                                      className="flex-1 text-left"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false);
                                      }}
                                    >
                                      <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                                      {dropdownItem.description && (
                                        <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                                      )}
                                    </Link>
                                    <ChevronDown
                                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeSubmenu === idx ? 'rotate-180 text-blue-500' : ''}`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {activeSubmenu === idx && (
                                      <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="pl-6 py-2 bg-gray-100 rounded-md mb-2"
                                      >
                                        {dropdownItem.submenuItems.map((submenuItem, subIdx) => (
                                          <Link
                                            key={subIdx}
                                            href={submenuItem.slug}
                                            className="block py-2 border-b border-gray-200 last:border-0 hover:bg-blue-50 px-3 rounded-md my-1 text-sm"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {submenuItem.title}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  key={idx}
                                  href={dropdownItem.href}
                                  className="block py-2 border-b border-gray-100 last:border-0 hover:bg-blue-50 px-3 rounded-md my-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                                  {dropdownItem.description && (
                                    <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                                  )}
                                </Link>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile action buttons */}
                <div className="mt-3 flex flex-col space-y-2 px-2">
                  <Link
                    href="/locations"
                    className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 text-center font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/bookconsultation" target='_blank'
                    className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 flex items-center justify-center shadow-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Consultation
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;