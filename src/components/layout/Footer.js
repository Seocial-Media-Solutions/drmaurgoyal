import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172321] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-green-500/10 -translate-x-12 -translate-y-12"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-teal-500/10 translate-x-16"></div>
      <div className="absolute bottom-0 left-1/3 w-16 h-16 rounded-full bg-emerald-500/10 -translate-y-8"></div>
      <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-green-400/5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-teal-400/5"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="mb-4 flex flex-col items-center lg:items-start">
              <Link href="/" className="inline-block mb-3">
                <Image 
                  src="/images/NewLogo.jpeg" 
                  alt="Mayur Childern Hospital Logo" 
                  width={140} 
                  height={50}
                  className="h-auto w-auto rounded-full"
                />
              </Link>
             
              <h2 className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-center lg:text-left">
                Mayur Childern Hospital
              </h2>
            </div>
             
            <div className="flex space-x-4 mb-6">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/people/Mayur-Child-Care-Center/100089743385413/" target='_blank' className="hover:opacity-80 hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Image 
                  src="/images/social/facebook.png" 
                  alt="Facebook" 
                  width={36} 
                  height={36}
                />
              </a>
              <a href="https://instagram.com/mayur_child_care_center" target='_blank' className="hover:opacity-80 hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Image 
                  src="/images/social/instagram.png" 
                  alt="Instagram" 
                  width={36} 
                  height={36}
                />
              </a>
              <a href="https://x.com/mayurchildren" target='_blank' className="hover:opacity-80 hover:scale-110 transition-all duration-300" aria-label="Twitter/X">
                <Image 
                  src="/images/social/twitter.png" 
                  alt="Twitter/X" 
                  width={36} 
                  height={36}
                />
              </a>
              <a href="https://www.youtube.com/@mayurchildcarecenter-official" target='_blank' className="hover:opacity-80 hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <Image 
                  src="/images/social/youtube.png" 
                  alt="YouTube" 
                  width={36} 
                  height={36}
                />
              </a>
              <a href="https://www.linkedin.com/in/mayur-child-care-center-85a676275/" target='_blank' className="hover:opacity-80 hover:scale-110 transition-all duration-300" aria-label="Linkedin">
                <Image 
                  src="/images/social/linkedin.png" 
                  alt="Linkedin" 
                  width={36} 
                  height={36}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Explore</span>
              <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-green-400 to-teal-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-green-400 group-hover:scale-125 transition-transform duration-300">•</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-green-400 group-hover:scale-125 transition-transform duration-300">•</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Blogs
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="https://drmayur.academichub.in/OnlineAppointment.aspx" target='_blank' className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Contact Info</span>
              <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-500"></span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <div className="rounded-full mr-3 shadow-md flex-shrink-0">
                  <Image 
                    src="/images/social/google-maps.png" 
                    alt="google-maps" 
                    width={32} 
                    height={32}
                  />
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/UHxPkSetKZ2od93X7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-blue-600 hover:underline text-sm"
                  >
                    B-15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer, Rajasthan, 305001
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full flex items-center mr-3 shadow-md flex-shrink-0">
                  <Image 
                    src="/images/social/telephone.png" 
                    alt="telephone" 
                    width={32} 
                    height={32}
                  />
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+919024988677"
                    className="block text-white hover:text-blue-600 hover:underline"
                  >
                    +91 90249 88677
                  </a>
                  <a
                    href="tel:+918955966990"
                    className="block text-white hover:text-blue-600 hover:underline"
                  >
                    +91 89559 66990
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="rounded-full mr-3 shadow-md flex-shrink-0">
                  <Image 
                    src="/images/social/google.png" 
                    alt="Gmail" 
                    width={32} 
                    height={32}
                  />
                </div>
                <a
                  href="mailto:mayurchildrenhospital@gmail.com?subject=Appointment%20Request&body=Hello,%20I%20would%20like%20to%20book%20an%20appointment."
                  className="text-white hover:underline hover:text-blue-600 text-sm"
                >
                  mayurchildrenhospital@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hospital Timings */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Timings</span>
              <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-500"></span>
            </h3>
            
            <div className="space-y-4 w-full">
              {/* Mayur Childern Hospital Timings */}
              <div className="p-4 rounded-lg bg-[#1d2e2b] backdrop-blur-sm">
                <div className="mb-3 font-medium text-white bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-sm">
                  Mayur Childern Hospital
                </div>
                <div className="text-gray-200 text-sm space-y-1">
                  <p><span className="text-gray-400">Mon - Sat:</span></p>
                  <p className="ml-2">Morning: <span className="text-white">09:00 AM - 12:30 PM</span></p>
                  <p className="ml-2">Evening: <span className="text-white">05:00 PM - 08:30 PM</span></p>
                  <p><span className="text-gray-400">Sunday:</span> <span className="text-white">10:00 AM - 02:00 PM</span></p>
                </div>
              </div>

              {/* Paras Urology Hospital Timings */}
              <div className="p-4 rounded-lg bg-[#1d2e2b] backdrop-blur-sm">
                <div className="mb-3 font-medium text-white bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent text-sm">
                  PARAS UROLOGY & MULTISPECIALITY
                </div>
                <div className="text-gray-200 text-sm space-y-1">
                  <p><span className="text-gray-400">Mon - Sat:</span> <span className="text-white">12:30 PM - 01:30 PM</span></p>
                  <p><span className="text-gray-400">Sunday:</span> <span className="text-red-400 font-medium">Off</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t text-[15px] border-green-900/30 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent font-medium">Mayur Childern Hospital</span>. All rights reserved.
            </div>
            <p className="text-center text-gray-500">
              Powered by{" "}
              <a
                href="https://seocialmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SEOcial Media Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;