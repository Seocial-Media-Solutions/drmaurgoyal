'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const slides = [
    { id: 1, image: '/images/slide1.webp' },
    { id: 2, image: '/images/slide2.webp' },
    { id: 3, image: '/images/slide3.webp' },
    { id: 4, image: '/images/slide4.webp' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideInterval = 4000; // 5 seconds
  const timerRef = useRef(null);

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  // Slider container style for translateX effect
  const sliderStyle = {
    transform: `translateX(-${currentSlide * containerWidth}px)`,
    transition: 'transform 0.7s ease-in-out',
    display: 'flex',
    width: `${slides.length * containerWidth}px`,
    height: '100%',
  };

  // Each slide style to fill container width and height
  const slideStyle = {
    flexShrink: 0,
    width: containerWidth ? `${containerWidth}px` : '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero image slider"
    >
      <div style={sliderStyle}>
        {slides.map((slide) => (
          <div key={slide.id} style={slideStyle}>
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

