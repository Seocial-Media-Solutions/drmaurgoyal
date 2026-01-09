'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TestimonialHero = () => {
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
          <motion.h1 
            className="uppercase text-gray-700 text-xl font-bold tracking-wider mb-4"
            variants={itemVariants}
          >
            Mayur Child Care Center Testimonials
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            What Parents Say About Us
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 md:text-xl text-lg mb-8"
            variants={itemVariants}
          >
            Discover why families throughout Ajmer trust Mayur Child Care Center with their children's early development and education. Our dedicated team has helped countless children thrive in a nurturing environment that fosters growth, learning, and joy.
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
                href="/locations"
                className="inline-block px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/services"
                className="inline-block px-8 py-3 bg-white text-gray-800 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                View Services
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
                src="/images/testimonial.webp" 
                alt="Happy families and children at Mayur Child Care Center"
                fill
                className="object-fit"
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

export default TestimonialHero;

