"use client";
import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LocationMayur() {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Create refs for different sections to animate them when they come into view
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  return (
    <div className="max-w-7xl mt-14 mb-14 mx-auto p-4 font-sans bg-white">
      {/* Header Section */}
      <motion.div 
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center shadow-lg">
            <img 
              src="/images/mayurchildcarecenter.webp" 
              alt="Hospital Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">
              <span>Rajasthan</span>
              <span className="mx-2">›</span>
              <span>Ajmer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mayur Childern Hospital
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing comprehensive pediatric care with dedication and expertise
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div 
        ref={infoRef}
        initial="hidden"
        animate={infoInView ? "visible" : "hidden"}
        variants={staggerItems}
        className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-12 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Contact Information</h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <MapPin className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer, Rajasthan, 305001
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <Mail className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <a 
              href="mailto:mayurchildrenhospital@gmail.com" 
              className="text-teal-600 hover:text-teal-700 transition-colors break-all"
            >
              mayurchildrenhospital@gmail.com
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <Phone className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <div className="space-y-1">
              <a href="tel:8955966990" className="block text-teal-600 hover:text-teal-700 transition-colors">
                8955966990
              </a>
              <a href="tel:9024988677" className="block text-teal-600 hover:text-teal-700 transition-colors">
                9024988677
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons & Social Media */}
      <motion.div 
        ref={buttonsRef}
        initial="hidden"
        animate={buttonsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link href="/bookconsultation">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg text-lg"
            >
              Book Consultation
            </motion.button>
          </Link>
        </div>
        
        {/* Social Media Links */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center gap-4"
        >
          <h3 className="text-gray-700 font-semibold text-lg">Connect with us</h3>
          <div className="flex gap-4">
            <motion.a 
              href="https://www.facebook.com/people/Mayur-Child-Care-Center/100089743385413/" 
              target='_blank' 
              className="hover:scale-110 transition-all duration-300 p-2 bg-white rounded-full shadow-md hover:shadow-lg" 
              aria-label="Facebook"
              whileHover={{ y: -2 }}
            >
              <Image
                src="/images/social/facebook.png"
                alt="Facebook"
                width={36}
                height={36}
              />
            </motion.a>
            <motion.a 
              href="https://instagram.com/mayur_child_care_center" 
              target='_blank' 
              className="hover:scale-110 transition-all duration-300 p-2 bg-white rounded-full shadow-md hover:shadow-lg" 
              aria-label="Instagram"
              whileHover={{ y: -2 }}
            >
              <Image
                src="/images/social/instagram.png"
                alt="Instagram"
                width={36}
                height={36}
              />
            </motion.a>
            <motion.a 
              href="https://www.youtube.com/@mayurchildcarecenter-official" 
              target='_blank' 
              className="hover:scale-110 transition-all duration-300 p-2 bg-white rounded-full shadow-md hover:shadow-lg" 
              aria-label="YouTube"
              whileHover={{ y: -2 }}
            >
              <Image
                src="/images/social/youtube.png"
                alt="YouTube"
                width={36}
                height={36}
              />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mayur-child-care-center-85a676275/" 
              target='_blank' 
              className="hover:scale-110 transition-all duration-300 p-2 bg-white rounded-full shadow-md hover:shadow-lg" 
              aria-label="Linkedin"
              whileHover={{ y: -2 }}
            >
              <Image
                src="/images/social/linkedin.png"
                alt="Linkedin"
                width={36}
                height={36}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Full Width Map Section */}
      <motion.div 
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={fadeInDown}
        className="w-full"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Us Here</h2>
          <p className="text-gray-600">Visit us at our convenient location in Vaishali Nagar, Ajmer</p>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0  pointer-events-none z-10"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.764464066343!2d74.62175467520922!3d26.49552757689837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7eb66262797%3A0x1933e5b43759fd8c!2zTWF5dXIgQ2hpbGQgQ2FyZSBDZW50ZXIgKOCkrOCkmuCljeCkmuCli-CkgiDgpJXgpL4g4KSF4KS44KWN4KSq4KSk4KS-4KSyKSAtIEJlc3QgQ2hpbGRyZW4gSG9zcGl0YWwgSW4gQWptZXI!5e0!3m2!1sen!2sin!4v1744626574417!5m2!1sen!2sin" 
            className="w-full h-96 md:h-[500px] lg:h-[600px]"
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
          
          {/* Loading overlay */}
          {!mapLoaded && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500">Loading map...</div>
            </div>
          )}
        </div>
        
        {/* Map info cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="font-semibold text-gray-800 mb-2">🚗 Easy Parking</h3>
            <p className="text-gray-600">Ample parking space available for patients and visitors</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="font-semibold text-gray-800 mb-2">🚌 Public Transport</h3>
            <p className="text-gray-600">Well connected by local buses and auto-rickshaws</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}