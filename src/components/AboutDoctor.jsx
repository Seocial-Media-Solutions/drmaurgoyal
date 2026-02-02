'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const AboutDoctor = () => {
  // Set up intersection observers for different sections
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section with Animation */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Meet Dr. Mayur Kumar Goyal</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            <b>Dr. Mayur Kumar Goyal is a caring and experienced pediatrician and neonatologist in Ajmer.</b> He is dedicated to helping children grow up healthy, confident, and happy, so they can live their best lives and make a positive difference in the world.
          </p>
        </motion.div>

        {/* Doctor Profile Section */}
        <motion.div
          ref={profileRef}
          initial={{ opacity: 0 }}
          animate={profileInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16"
        >
          {/* Doctor Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="images/doctor.png"
              alt="Dr. Mayur Kumar Goyal"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Doctor Info */}
          <div className="space-y-6">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, x: 20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">Dr. Mayur Kumar Goyal</h3>
              <h1 className="text-xl font-semibold text-cyan-500 mt-1">Pediatrician & Neonatologist</h1>
            </motion.div>

            <motion.div
              ref={bioRef}
              initial={{ opacity: 0, x: 20 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 md:text-xl text-lg space-y-4"
            >
              <p>
                Dr. Mayur Kumar Goyal is one of the best child specialists in Ajmer and has been practicing since 2017.
                He currently practices at Mayur Childern Hospital located near Lions Club, Vaishali Nagar, Ajmer.
              </p>

              <p>
                With his MBBS from BVP Pune (2012), MD in Pediatrics from NIMS Jaipur (2016),
                and Fellowship in Neonatology from Neo Clinic Children Hospital Jaipur (2018)
                where he ranked 2nd pan India, Dr. Mayur specializes in care and treatment of newborns,
                primarily those who are premature, underweight or otherwise in need of acute care.
              </p>

              <p>
                His professional experience includes working at prestigious institutions like JLN Medical College-Ajmer,
                Neo Clinic Children Hospital, Fortis Hospital and Santokba Durlabhji Memorial Hospital.
                As a member of IAP, IAP NEOCHAP, PGHTN and IMA communities, he brings extensive
                experience in advanced Neonatal care and management of Neonatal emergencies.
              </p>
            </motion.div>

            {/* <Link href="/bookconsultation" target='_blank'>
              <motion.div
                ref={buttonRef}
                initial={{ opacity: 0, y: 20 }}
                animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-gray-900 cursor-pointer transition-colors duration-300 mt-4">
                  Book Consultation
                </button>
              </motion.div>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDoctor;