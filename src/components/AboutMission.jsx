// AboutMission.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMission = () => {
  // Set up intersection observers for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [purposeRef, purposeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto">
          {/* Text Content - Left side with proper spacing */}
          <div className="lg:w-1/2 w-full lg:pl-4">
            <motion.p 
              ref={titleRef}
              initial={{ opacity: 0, y: 10 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-500 uppercase font-bold tracking-wider mb-4"
            >
              OUR MISSION
            </motion.p>
            
            <motion.h2 
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12"
            >
              <span className="block mb-1">Change lives.</span>
              <span className="block">Change the world.</span>
            </motion.h2>
            
            <motion.div 
              ref={purposeRef}
              initial={{ opacity: 0, y: 30 }}
              animate={purposeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10 text-justify"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Purpose</h2>
              <p className="text-gray-700 mb-5 md:text-xl text-lg">
                We are here to make a real difference in the lives of children and families. Our goal is to provide the highest quality care and make it easily available to everyone. We are working every day to become the leading children's health organization in the India.
              </p>
              <p className="text-gray-700 md:text-xl text-lg">
                We will do this by creating an unparalleled environment where the best
                people want to grow.
              </p>
            </motion.div>
            
            <motion.div 
              ref={visionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='text-justify'
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 md:text-xl text-lg">
                To become the best children's healthcare provider, offering complete and personalized care for every child—right where families need it most.
              </p>
            </motion.div>
          </div>
          
          {/* Image - Right side with rounded corners */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full md:mt-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/children-playing.webp" 
                alt="Children playing together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;