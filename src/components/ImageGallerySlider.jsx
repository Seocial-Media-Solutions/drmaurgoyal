"use client";
import React, { useState, useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-multi-carousel/lib/styles.css';

const ImageGallerySlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    {
      id: 1,
      url: '/images/first.png',
      title: '',
      description: ''
    },
    {
      id: 2,
      url: '/images/second.jpg',
      title: '',
      description: ''
    },
    {
      id: 3,
      url: '/images/third.webp',
      title: '',
      description: ''
    },
    {
      id: 4,
      url: '/images/forth.png',
      title: '',
      description: ''
    },
    {
      id: 5,
      url: '/images/doctor.png',
      title: '',
      description: ''
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2  // Reduced from 3 to 2 for larger images
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1  // Reduced from 2 to 1 for larger images on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const openLightbox = useCallback((image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedImage(null);
    setIsLightboxOpen(false);
  }, []);

  const navigateImage = useCallback((direction) => (e) => {
    e.stopPropagation();
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % images.length 
      : (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [selectedIndex, images]);

  const handleKeyDown = useCallback((e) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        navigateImage('prev')(e);
        break;
      case 'ArrowRight':
        navigateImage('next')(e);
        break;
      case 'Escape':
        closeLightbox();
        break;
      default:
        break;
    }
  }, [isLightboxOpen, navigateImage, closeLightbox]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className='bg-white'>
      <div className="w-full max-w-7xl mx-auto px-4 py-16"> {/* Increased vertical padding */}
        <h2 className="text-6xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-300 pb-2 text-transparent bg-clip-text">
          Gallery
        </h2>

        <div className="bg-white rounded-xl shadow-xl p-10 relative"> {/* Increased padding */}
          {/* Add a wrapper div with relative positioning */}
          <div className="relative z-10">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="transform 700ms ease-in-out"
              transitionDuration={700}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="px-6" // Increased horizontal padding for more spacing between slides
            >
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-96 object-contain bg-gray-100" /* Changed height from h-72 to h-96 and object-cover to object-contain to prevent cutting */
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {isLightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Navigation Controls */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300" /* Increased size and padding */
              onClick={navigateImage('prev')}
            >
              <ChevronLeft className="w-10 h-10 text-green-400" /> {/* Increased size */}
            </button>
            
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300" /* Increased size and padding */
              onClick={navigateImage('next')}
            >
              <ChevronRight className="w-10 h-10 text-green-400" /> {/* Increased size */}
            </button>

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300" /* Increased size and padding */
              onClick={closeLightbox}
            >
              <X className="w-10 h-10 text-green-400" /> {/* Increased size */}
            </button>

            {/* Image Container - Made larger */}
            <div className="relative max-w-6xl w-full mx-6" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen object-contain rounded-xl shadow-2xl" /* Added max-h-screen and object-contain to ensure image fits properly */
              />
              <div className="text-white text-center mt-8"> {/* Increased margin-top */}
                <h3 className="text-3xl font-bold mb-3">{selectedImage.title}</h3> {/* Increased font size */}
                <p className="text-xl text-gray-300">{selectedImage.description}</p> {/* Increased font size */}
                <p className="text-lg text-gray-400 mt-3">
                  Image {selectedIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallerySlider;