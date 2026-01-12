'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMayur() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const highlightVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 0.6,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <section
    ref={ref}
    className="relative w-full flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden bg-transparent"
  >
    {/* Translucent overlay for readability */}
    <div className="absolute top-0 left-0 w-full h-full   bg-opacity-40 z-10"></div>
  
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative z-20 w-full  max-w-6xl "
    >
     <motion.h1
  variants={itemVariants}
  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-1xl font-bold text-gray-900 leading-snug md:leading-tight mb-6 text-center px-4"
>
  <span className=" text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-1xl">
  WELCOME
  </span> <br />
  TO <br />
  <span className="relative mx-2 inline-block">
    <span className="relative bg-purple-200 rounded-xl z-10 px-2 text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-1xl">
      Mayur Childern Hospital
    </span>
    <br />
    <motion.span
      className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 z-0 rounded-sm"
      variants={highlightVariants}
    />
  </span>
  <br />
  <span className="block  underline text-xl sm:text-xl md:text-2xl lg:text-2xl mt-2">
    "YOUR TRUSTED  PEDIATRIC CARE CENTER"
    <span className="relative mx-2 inline-block">
      
      <motion.span
        className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 z-0 rounded-sm"
        variants={highlightVariants}
      />
    </span>
  </span>
</motion.h1>

  
      <motion.p
        variants={itemVariants}
        className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-justify mb-6"
      >
        Established in <b>2018</b>, <b>Mayur Childern Hospital</b> has been proudly serving the children of <b>Ajmer</b> with <b>expert</b>, <b>compassionate healthcare</b>. Our hospital was created with one mission in mind: <b>to provide exceptional medical care for children from newborns to adolescents.</b>
      </motion.p>
  
      <motion.p
        variants={itemVariants}
        className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-justify mb-6"
      >
        Since opening our doors, we have been dedicated to creating a <b>safe</b>, <b>nurturing environment</b> where families can trust their children’s health to <b>skilled professionals</b>. With a <b>comprehensive range of services</b> — from <b>routine check-ups</b> to <b>critical care</b> — we ensure that each child receives the <b>best possible treatment</b>, tailored to their <b>unique needs</b>.
      </motion.p>
  
      <motion.p
        variants={itemVariants}
        className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-justify"
      >
        Under the leadership of <b>Dr. Mayur Goyal (MBBS, MD Pediatrics, Fellow in Neonatal Medicine)</b>, a <b>renowned pediatrician</b> with <b>15+ years of experience</b>, our hospital has earned a <b>reputation for excellence</b> in pediatric care. His commitment to <b>advancing child healthcare</b>, combined with our <b>state-of-the-art facilities</b> and a <b>compassionate team</b>, makes <b>Mayur Childern Hospital</b> the <b>trusted choice for families in Ajmer and beyond</b>.
      </motion.p>
    </motion.div>
  </section>
  
  );
}
