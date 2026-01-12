'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      src: '/images/slide2.webp',
      alt: 'Mayur Childern Hospital Reception'
    },
    {
      src: '/images/slideimg.webp',
      alt: 'Dr. Mayur Goyal consulting with patient'
    },
    {
      src: '/images/third.webp',
      alt: 'State-of-the-art examination room'
    },
    {
      src: '/images/forth.png',
      alt: 'Our dedicated medical team'
    },
    {
      src: '/images/doctor.png',
      alt: 'Pediatric waiting area'
    },
    {
      src: '/images/second.jpg',
      alt: 'Dr. Mayur Goyal at medical conference'
    },
    {
      src: '/images/slide4.webp',
      alt: 'Treatment room'
    },
    {
      src: '/images/slide3.webp',
      alt: 'Nursing staff'
    },
    {
      src: '/images/slide5.webp',
      alt: 'Community health camp'
    },
    {
      src: '/images/slide6.webp',
      alt: 'Community health camp'
    },
    {
      src: '/images/slide7.webp',
      alt: 'Community health camp'
    },
    {
      src: '/images/slide9.webp',
      alt: 'Community health camp'
    },
  ];

  // Intersection observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  // Function to open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#fcf9ff] to-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header with animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our state-of-the-art pediatric care facility where Dr. Mayur Goyal and our team provide exceptional care in a comfortable, child-friendly environment.
            </p>
          </motion.div>

          {/* Gallery Grid with staggered animations */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-72 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-teal-800 font-medium text-sm">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 text-center bg-gradient-to-r from-teal-500 to-teal-600 p-8 md:p-12 rounded-2xl shadow-xl text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit Mayur Childern Hospital</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Experience our world-class pediatric facilities in person. Schedule an appointment with Dr. Mayur Goyal today.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <span className="text-2xl">📍</span>
                <span>B-15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <span className="text-2xl">📞</span>
                <span>+91 90249 88677</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white p-2 hover:text-teal-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 bg-black/30 hover:bg-black/50 rounded-r-lg transition-all duration-200 md:-left-16"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 bg-black/30 hover:bg-black/50 rounded-l-lg transition-all duration-200 md:-right-16"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
            
            {/* Image container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-80 md:h-[75vh] w-full"
            >
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </motion.div>
            </div>
            
            {/* Caption */}
            <div className="text-center text-white mt-4 p-2">
              <p className="text-sm text-gray-300">{`Image ${currentImageIndex + 1} of ${galleryImages.length}`}</p>
            </div>
        </motion.div>
      
      )}
    </>
  );
};

export default GalleryPage;