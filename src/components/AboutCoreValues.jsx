'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCoreValues = () => {
  // Set up intersection observers for different sections here is me23scsdbf
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mobileImageRef, mobileImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Individual refs for each value section
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [excellenceRef, excellenceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [improvementRef, improvementInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [integrityRef, integrityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white font-sans">
      <motion.h2 
        ref={titleRef}
        initial={{ opacity: 0, y: 10 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Our core values
      </motion.h2>
      
      <motion.p 
        ref={introRef}
        initial={{ opacity: 0, y: 20 }}
        animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-700 mb-12 max-w-3xl md:text-xl text-lg text-justify"
      >
        At our clinic, led by Dr. Mayur Kumar Goyal, we're proud to offer compassionate, expert care that puts children first. Our values guide everything we do, ensuring your child receives the <b> best pediatric care in Ajmer.</b>
      </motion.p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
        {/* Left Side - Image and Values */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block lg:mt-16"
        >
          <div className="relative rounded-4xl overflow-hidden w-full h-full">
            <Image 
              src="/images/child-climbing.webp" 
              alt="Child climbing with therapist help" 
              width={500} 
              height={600}
              className="w-full h-[60%] rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>
        
        {/* Right Side - Values Content */}
        <div className="flex flex-col gap-10">
          {/* Results for our Patients */}
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, x: 20 }}
            animate={resultsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Results for our Patients</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700 md:text-xl text-lg">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We focus on real results that improve children's lives.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We track progress to make sure every child is thriving</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe in making a difference—together.</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Excellence */}
          <motion.div
            ref={excellenceRef}
            initial={{ opacity: 0, x: 20 }}
            animate={excellenceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Excellence</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700 md:text-xl text-lg">
                <li className="flex items-start ">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We do what we promise.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We hold ourselves and each other to high standards.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We give consistent effort, every single day.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We work with urgency and take pride in our work.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We take pride in our rigor and discipline.</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Continuous Improvement */}
          <motion.div
            ref={improvementRef}
            initial={{ opacity: 0, x: 20 }}
            animate={improvementInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Continuous Improvement</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700 md:text-xl text-lg">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We think big and try new things.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We welcome change—it helps us grow.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We're always learning and improving.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We keep making our systems and care better for our patients.</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Integrity */}
          <motion.div
            ref={integrityRef}
            initial={{ opacity: 0, x: 20 }}
            animate={integrityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Integrity</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700 md:text-xl text-lg">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We never compromise on honesty and ethics.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We speak openly, ask questions, and support each other.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We build a safe and respectful space for families and staff.</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* One Team */}
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, x: 20 }}
            animate={teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">One Team</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700 md:text-xl text-lg">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We support each other with kindness and humility.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe teamwork helps us achieve great things.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We empower each other and share the joy of helping children grow and thrive.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Image (only shows on mobile) */}
        <motion.div 
          ref={mobileImageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mobileImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="block lg:hidden order-first mb-8"
        >
          <div className="relative rounded-lg overflow-hidden w-full">
            <Image 
              src="/images/child-climbing.webp" 
              alt="Child climbing with therapist help" 
              width={500} 
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCoreValues;