'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutHero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full mt-1 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content with padding */}
        <motion.div 
          className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-16 md:py-28 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="uppercase text-gray-700 text-xl font-bold tracking-wider mb-4"
            variants={itemVariants}
          >
            About us
          </motion.h2>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
          Empowering Children and Families with Expert Pediatric Care in Ajmer
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 md:text-xl text-lg"
            variants={itemVariants}
          >
           At the heart of our success is a passionate team of pediatric specialists dedicated to helping every child thrive. Our experts bring years of experience, compassion, and care to support families through personalized child-focused therapies and treatments.
          </motion.p>
          <motion.p 
            className="text-gray-600 mb-8 md:text-xl text-lg"
            variants={itemVariants}
          >
        Recognized as one of the <b>best pediatric centers in Ajmer</b>, we take pride in offering evidence-based, nurturing care tailored to each child’s unique needs.
          </motion.p>
          
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
                href="/services"
                className="inline-block px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
              >
                View Services
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
          className="w-full lg:w-1/2 h-96 md:h-98 lg:h-auto"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full"
            >
              <Image
                src="/images/male-working-as-paediatrician.webp" 
                alt="Therapist working with a child on developmental activities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;