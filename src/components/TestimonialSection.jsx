'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Suraj Gahlot",
      role: "Parent of a Patient",
      quote: "This hospital gave me a unique experience. Dr. Mayur Goyal is a doctor with a kind heart and a soft voice, and the nursing staff here is also very good. Suggested this treatment. Thanks to this hospital for treating my child.",
      rating: 5,
      avatar: "SG"
    },
    {
      id: 2,
      name: "Mayank Sharma",
      role: "Father of Patient",
      quote: "I recently had my son admitted, and I am beyond grateful for the exceptional care he received. From the moment we arrived, the staff was attentive, professional, and compassionate. The doctor took the time to explain everything to us and made sure my son was comfortable and well-cared for. The facilities were clean and well-maintained. The team's dedication to patient care was evident in every interaction, and we always felt informed and supported. Their kindness and expertise made a stressful time much more manageable.",
      rating: 5,
      avatar: "MS"
    },
    {
      id: 3,
      name: "Manish Jayani",
      role: "Parent of a Patient",
      quote: "I recently visited Mayur Children Hospital for my child's treatment, and it was a great experience. The doctors, staff, and nurses were very kind and professional. They took great care of us and were always ready to help. Dr. Mayur listened patiently and explained everything well. It is one of the best hospitals in Ajmer I have seen. Highly recommended!",
      rating: 5,
      avatar: "MJ"
    },
    {
      id: 4,
      name: "Noman Ahmed",
      role: "Father of a Patient",
      quote: "I recently admitted my daughter to Mayur Children Hospital, and I was thoroughly amazed with the exceptional care she received! The doctors and staff showed not only high professionalism but also genuine concern for my daughter's well-being. Their kindness, compassion, and expertise put us at ease during a stressful time. The hospital's facilities were also clean and well-maintained. I highly recommend Mayur Children Hospital to any parent seeking top-notch pediatric care.",
      rating: 5,
      avatar: "NA"
    },
    {
      id: 5,
      name: "Arti Mehra",
      role: "Mother of a Patient",
      quote: "Our experience at Mayur Children Hospital was exceptional. Dr. Mayur Goyal's expertise and gentle approach made my son feel comfortable throughout his treatment. The facility is spotlessly clean, and the staff is incredibly responsive. They went above and beyond to ensure we understood every aspect of my child's care plan. We're grateful to have found such a caring pediatric hospital in Ajmer.",
      rating: 5,
      avatar: "AM"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-purple-50 py-16 md:py-24">
      <motion.div 
        className="container mx-auto px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-sm font-bold text-[#009689] uppercase tracking-wider mb-3">Patient Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#009689] mb-4">What Parents Say About Our Care</h3>
          <div className="w-24 h-1 bg-[#E9D4FF] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our greatest achievement is the trust and satisfaction of the families we serve every day at Mayur Children Hospital in Ajmer.
          </p>
        </motion.div>
        
        {/* Featured Testimonial with fixed height */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row" style={{ minHeight: '450px' }}>
              {/* Left side with fixed height and scroll for overflow */}
              <div className="w-full md:w-2/5 bg-[#E9D4FF] p-8 md:p-12 flex flex-col justify-between" style={{ height: '450px' }}>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="45" height="36" className="mb-5 opacity-75" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.25 36C9.08333 36 5.76389 34.6667 3.29167 32C1.09722 29.0667 0 25.5556 0 21.4667C0 15.3778 1.54167 10.1333 4.625 5.73333C7.97222 1.06667 12.7639 -0.355556 19 0.844444L20.6667 5.73333C16.2222 6.66667 12.7639 8.26667 10.2917 10.5333C7.81944 12.8 6.58333 15.3778 6.58333 18.2667H10.5C11.9444 18.2667 13.1111 18.6222 14 19.3333C14.8889 19.7778 15.5556 20.5333 16 21.5556C16.4444 22.5778 16.6667 23.6 16.6667 24.6222C16.6667 26.4 16.0278 28 14.75 29.4222C13.7222 30.8444 12.3889 31.9111 10.75 32.6222C9.38889 33.3333 7.94444 35.2889 6.41667 35.5556C8.88889 35.8222 11.0833 36 13 36H13.25ZM37.25 36C33.0833 36 29.7639 34.6667 27.2917 32C25.0972 29.0667 24 25.5556 24 21.4667C24 15.3778 25.5417 10.1333 28.625 5.73333C31.9722 1.06667 36.7639 -0.355556 43 0.844444L44.6667 5.73333C40.2222 6.66667 36.7639 8.26667 34.2917 10.5333C31.8194 12.8 30.5833 15.3778 30.5833 18.2667H34.5C35.9444 18.2667 37.1111 18.6222 38 19.3333C38.8889 19.7778 39.5556 20.5333 40 21.5556C40.4444 22.5778 40.6667 23.6 40.6667 24.6222C40.6667 26.4 40.0278 28 38.75 29.4222C37.7222 30.8444 36.3889 31.9111 34.75 32.6222C33.3889 33.3333 31.9444 35.2889 30.4167 35.5556C32.8889 35.8222 35.0833 36 37 36H37.25Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Scrollable quote container */}
                  <div className="overflow-y-auto flex-grow mb-6 text-gray-800 pr-2 custom-scrollbar">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                      {testimonials[activeTestimonial].quote}
                    </p>
                  </div>
                  
                  {/* Rating always at the bottom */}
                  <div className="flex items-center mt-auto">
                    <div className="flex mr-4">
                      {renderStars(testimonials[activeTestimonial].rating)}
                    </div>
                    <span className="text-gray-800 opacity-90">
                      {testimonials[activeTestimonial].rating}.0 rating
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Right side with fixed height */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between bg-white relative" style={{ height: '450px' }}>
                {/* Avatar and Name */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#009689] text-white flex items-center justify-center text-xl font-bold mr-5">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#E9D4FF] opacity-20"></div>
                  <div className="absolute top-12 right-8 w-8 h-8 rounded-full bg-[#009689] opacity-10"></div>
                </div>
                
                {/* Fill space */}
                <div className="flex-grow"></div>
                
                {/* Testimonial navigation */}
                <div className="mt-auto">
                  <h5 className="text-sm font-semibold text-[#009689] mb-4">Browse Testimonials</h5>
                  <div className="flex flex-wrap gap-3">
                    {testimonials.map((testimonial, index) => (
                      <motion.button
                        key={testimonial.id}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          index === activeTestimonial 
                            ? 'bg-[#009689] text-white' 
                            : 'bg-[#E9D4FF] bg-opacity-30 text-gray-700 hover:bg-opacity-50'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {testimonial.avatar}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Animated progress bar at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                  <motion.div 
                    className="h-full bg-[#009689]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Header with Icon and Name */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9D4FF] text-[#009689] font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Quote with fixed height and scroll */}
              <div className="flex-grow mb-6 overflow-y-auto max-h-48 custom-scrollbar">
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              {/* Star Rating */}
              <div className="flex mt-auto">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-[#009689] mb-6">Need quality healthcare for your child?</h3>
          <motion.button
            className="inline-block px-8 py-3 bg-[#009689] text-white font-medium rounded-full hover:bg-[#007a6b] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Add custom scrollbar styling */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E9D4FF;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #009689;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;