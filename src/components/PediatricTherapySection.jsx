'use client';
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const PediatricTherapySection = () => {
  // Controls for staggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Trigger animations when the section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for different animation elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: 0.4,
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden relative"
    >
      {/* SVG Background Element with animation */}
      <motion.div 
        className="absolute top-2/5 -right-64 pointer-events-none"
        variants={backgroundVariants}
      >
        <svg width="1190" height="381" viewBox="0 0 1190 311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 213.749C217.5 284.895 741.344 412.557 911.844 99.5572C999.304 -60.9999 1145.5 13.0001 1179.5 182" stroke="url(#paint0_linear_215_16960)" strokeWidth="80"></path>
          <defs>
            <linearGradient id="paint0_linear_215_16960" x1="1554" y1="-43.1433" x2="4" y2="-43.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FECE53" stopOpacity="0"></stop>
              <stop offset="0.493158" stopColor="#F4B647"></stop>
              <stop offset="1" stopColor="#F1D4E5" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with animation */}
        <motion.div 
          className="mb-4"
          variants={itemVariants}
        >
          <h3 className="text-gray-700 font-medium tracking-wide uppercase text-sm">
            PEDIATRIC THERAPY
          </h3>
        </motion.div>
        
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text content */}
          <div className="w-full lg:w-3/5">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              At Mayur Child Care Center, every child is at the heart of everything we do.
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-10 text-lg md:text-xl text-justify"
            >
              We offer <b>expert pediatric care and therapy in Ajmer</b>, focusing on the unique needs of each child. Our services are designed to give your child the best possible start in life with care that's personal, kind, and backed by experience.
            </motion.p>
            
            {/* Features list with staggered animations */}
            <ul className="space-y-8 text-justify md:text-xl text-lg">
              <motion.li 
                custom={0}
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Child-Focused Care:</span>
                  <span className="text-gray-600"> We listen carefully and plan treatment based on your child's personal goals and needs.</span>
                </div>
              </motion.li>
              
              <motion.li 
                custom={1}
                variants={listItemVariants}
                className="flex items-start gap-4 "
              >
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Care You Can Trust: </span>
                  <span className="text-gray-600">  Our team uses the best medical knowledge to help your child grow up healthy and strong.</span>
                </div>
              </motion.li>
              
              <motion.li 
                custom={2}
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800"> Family-Friendly Approach:</span>
                  <span className="text-gray-600"> We work closely with families to build strong relationships and create better health outcomes for children.</span>
                </div>
              </motion.li>
            </ul>
          </div>
          
          {/* Image container with animation */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div 
              className="relative"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Circular image */}
              <div className="rounded-full overflow-hidden relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <Image 
                  src="/images/pediatric-therapy.webp"
                  alt="Children receiving pediatric therapy" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PediatricTherapySection