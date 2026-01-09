'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PediatricServices = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full mt-1 bg-white overflow-hidden relative">
      {/* SVG Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        
      </motion.div>

      <div className="flex flex-col lg:flex-row relative z-10">
        {/* Left Content with padding */}
        <motion.div 
          className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="uppercase text-gray-700 text-xl font-bold tracking-wider mb-4"
            variants={itemVariants}
          >
            SERVICES
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Exceptional therapeutic services for exceptional children
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-8 md:text-xl text-lg"
            variants={itemVariants}
          >
            Mayur Child Care Center provides center-based pediatric therapy services including
            Applied Behavior Analysis (ABA), Pediatric Speech Therapy, Pediatric
            Occupational Therapy (OT), and Pediatric Physical Therapy (PT) at Ajmer.
          </motion.p>
          {/* Uncomment if buttons are needed */}
          {/* <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="https://drmayur.academichub.in/OnlineAppointment.aspx" target='_blank'
                className="inline-block px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
              >
                Book Consultation
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/locations"
                className="inline-block px-8 py-3 bg-white text-gray-800 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                View locations
              </Link>
            </motion.div>
          </motion.div> */}
        </motion.div>
        
        {/* Right Image that touches the right edge */}
        <motion.div 
          className="w-full lg:w-1/2 h-96 lg:h-auto"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/services/Poster.webp" 
              alt="Therapist working with a child on developmental activities"
              fill
              className="object-cover rounded-l"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PediatricServices;
