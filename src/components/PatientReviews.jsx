"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-multi-carousel/lib/styles.css';
import ElfsightWidget from './ElfsightWidget';

const PatientReviews = () => {
  // Set up intersection observers for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200
  });

  const [widgetRef, widgetInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const lineExpand = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "6rem", // 24px (w-24)
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      } 
    }
  };

  const fadeInWithScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7,
        delay: 0.3
      } 
    }
  };

  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16 relative bg-white">
      <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30">
        <motion.h2 
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-black leading-tight font-playfair"
        >
          Patient Feedback
        </motion.h2>

        <motion.div 
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={lineExpand}
          className="h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-3 md:mb-4"
          style={{ maxWidth: "6rem" }} // Required because we're animating width instead of using tailwind w-24
        ></motion.div>

        {/* <motion.h3 
          ref={subtitleRef}
          initial="hidden"
          animate={subtitleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-500 to-teal-300 inline-block text-transparent bg-clip-text leading-relaxed"
        >
          Dr. Mayur Kumar Goyal
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="block text-lg md:text-xl mb-10 lg:text-2xl mt-1"
          >
            M.B.B.S., M.D. (Pediatrics), Pediatrician & Neonatologist
          </motion.span>
        </motion.h3>
         */}
        <motion.div
          ref={widgetRef}
          initial="hidden"
          animate={widgetInView ? "visible" : "hidden"}
          variants={fadeInWithScale}
        >
          <ElfsightWidget />
        </motion.div>
      </div>
    </div>
  );
};

export default PatientReviews;