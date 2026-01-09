"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check, AlertCircle } from 'lucide-react';







export default function LocationForm() {
  // Create ref for form animation
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({
      success: false,
      error: false,
      message: "",
    });


// Phone number input field configration
function PhoneInputComponent() {
  const [formData, setFormData] = useState({ phone: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'phone') {
      // Allow only digits, and max length 10
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  }};

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a32f5f3b-5f9d-4e53-92a1-dde471594204", 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "Inquiry from Website",
          message: formData.message,
          from_name: "Mayur Child Care Center Inquiry"
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Success
        setSubmitStatus({
          success: true,
          error: false,
          message: "Thank you for your inquiry! We'll get back to you soon.",
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Error
        setSubmitStatus({
          success: false,
          error: true,
          message: result.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: true,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mt-14 mb-14 mx-auto p-4 font-sans bg-white">
      <motion.div
        ref={formRef}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          Have a question or want to schedule an appointment? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={staggerItems} className="space-y-6">
              {/* Name field */}
              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        maxLength={10}
        pattern="\d{10}"
        inputMode="numeric"
        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
        placeholder="Your phone number"
        title="Please enter exactly 10 digits."
      />
                </div>
              </motion.div>

              {/* Email field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4  text-black py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Subject field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2  text-black focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="What's this regarding?"
                />
              </motion.div>

              {/* Message field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2  text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex  gap-2 bg-teal-600 cursor-pointer hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (

                    <>
                      <div className="h-5 w-5   border-t-2 border-r-2 border-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span >Send Message</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Status messages */}
              {submitStatus.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-md"
                >
                  <Check size={20} className="text-green-600" />
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}

              {submitStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-md"
                >
                  <AlertCircle size={20} className="text-red-600" />
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}
            </motion.div>
          </form>
        </div>

       
      </motion.div>
    </div>
  );
}