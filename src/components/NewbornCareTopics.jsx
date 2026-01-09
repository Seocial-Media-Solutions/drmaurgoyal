'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NewbornCareTopics = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Topics data
  const topics = [
    {
      id: 'surviving-newborn',
      title: '10 Tips for surviving newborn stage',
      image: '/images/newborn-care/surviving-newborn.png',
      slug: '/newborn-care/surviving-newborn-stage'
    },
    {
      id: 'swaddle',
      title: 'How do I swaddle my baby?',
      image: '/images/newborn-care/swaddle-baby.png',
      slug: '/newborn-care/how-to-swaddle'
    },
    {
      id: 'first-bath',
      title: 'Baby\'s First Bath',
      image: '/images/newborn-care/first-bath.png',
      slug: '/newborn-care/first-bath'
    },
    {
      id: 'common-conditions',
      title: 'Is this normal? Common conditions in newborn',
      image: '/images/newborn-care/common-conditions.png',
      slug: '/newborn-care/common-conditions'
    },
    {
      id: 'vaginal-discharge',
      title: 'Is vaginal discharge normal in baby?',
      image: '/images/newborn-care/vaginal-discharge.png',
      slug: '/newborn-care/vaginal-discharge'
    },
    {
      id: 'diaper-rash',
      title: 'What\'s the best treatment for diaper rash?',
      image: '/images/newborn-care/diaper-rash.png',
      slug: '/newborn-care/diaper-rash-treatment'
    },
    {
      id: 'black-poop',
      title: 'Why does my newborn have black poop?',
      image: '/images/newborn-care/black-poop.png',
      slug: '/newborn-care/black-poop'
    },
    {
      id: 'green-poop',
      title: 'Is green poop normal?',
      image: '/images/newborn-care/green-poop.png',
      slug: '/newborn-care/green-poop'
    },
    {
      id: 'room-temperature',
      title: 'What is the ideal temperature for my baby\'s room?',
      image: '/images/newborn-care/room-temperature.png',
      slug: '/newborn-care/ideal-room-temperature'
    },
    {
      id: 'enough-food',
      title: 'Is my baby getting enough to eat?',
      image: '/images/newborn-care/enough-food.jpg',
      slug: '/newborn-care/enough-food'
    },
    {
      id: 'baby-cry',
      title: 'Decoding your baby\'s cry',
      image: '/images/newborn-care/baby-cry.png',
      slug: '/newborn-care/decoding-cry'
    },
    {
      id: 'pacifiers',
      title: 'Pacifiers',
      image: '/images/newborn-care/pacifiers.png',
      slug: '/newborn-care/pacifiers'
    }
  ];

  // State for hover effects
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Common Newborn Care Questions
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Find answers to your most pressing questions about newborn care, symptoms, and preventive measures.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredId(topic.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={topic.slug} className="block h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredId === topic.id ? 'scale-110' : 'scale-100'
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 h-14">
                    {topic.title}
                  </h3>
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-sm font-medium text-blue-600 flex items-center">
                      Read more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                          hoveredId === topic.id ? 'translate-x-1' : ''
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewbornCareTopics;