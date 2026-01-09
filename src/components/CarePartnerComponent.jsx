"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const CarePartnerComponent = () => {
  // Set up intersection observers for different sections
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [taglineRef, taglineInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        ref={containerRef}
        className="max-w-4xl w-full flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
      >
        {/* Logo/Icon Section */}
        <motion.div 
          ref={logoRef}
          className="mb-4" 
          initial={{ y: 20, opacity: 0 }}
          animate={logoInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full h-42">
            <img 
              src="/images/service.svg" 
              alt="Care Partner Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          ref={taglineRef}
          className="text-blue-500 font-bold text-sm tracking-wider uppercase mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={taglineInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          YOU ARE THE PRIORITY
        </motion.p>

        {/* Main Heading - Carefully aligned to match the image */}
        <motion.div
          ref={headingRef}
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            From the very first phone call with<br />
            a care partner, through every<br />
            milestone, we are in this together.
          </h2>
        </motion.div>

        {/* CTA Button - Styled to match the image */}
        <motion.div 
          ref={buttonRef}
          initial={{ y: 20, opacity: 0 }}
          animate={buttonInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Link href="https://drmayur.academichub.in/OnlineAppointment.aspx" target='_blank'>
            <motion.button
              className="px-12 py-4 rounded-full bg-white cursor-pointer text-gray-900 border border-gray-200 font-medium text-base hover:shadow-md transition-shadow"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Book Consultation
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CarePartnerComponent;