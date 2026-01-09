'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 py-6"
    >
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-teal-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6 pb-4 text-gray-600 text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqListRef, faqListInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const faqData = [
  {
    question: "What services does Mayur Child Care Center offer?",
    answer:
      "We offer complete child care services including: General Pediatrics OPD for regular check-ups and common illnesses, 24x7 Pediatric Emergency Care, Advanced Pediatric Critical Care (PICU), Newborn Screening tests, Vaccination Programs for all ages, and Adolescent Health Services for teenagers. We also offer comprehensive support services including physiotherapy, nutritional counseling, and supportive care."
  },
  {
    question: "How do I book an appointment for my child?",
    answer:
      "You can book appointments by calling +91 90249 88677 or visiting our center or by our online appointment booking system. For emergencies, come anytime - our pediatric emergency is open 24/7. For regular check-ups or vaccinations, you can schedule in advance."
  },
  {
    question: "What is General Pediatrics OPD?",
    answer:
      "Our General Pediatrics OPD is for regular child health check-ups and common illnesses like fever, cough or diarrhea etc. Dr. Mayur Goyal and his team provide complete care for children from birth to 18 years, including growth monitoring, vaccination and treatment for common childhood problems."
  },
  {
    question: "Do you have emergency services for children?",
    answer:
      "Yes, we have 24x7 emergency care for children. Our emergency team handles high fever, breathing problems, injuries, seizures and other urgent conditions. We have child-friendly emergency rooms with pediatric specialists always available."
  },
  {
    question: "What newborn screening tests do you offer?",
    answer:
      "We screen newborns for hidden health problems like thyroid issues, genetic disorders, blood diseases and hearing problems. These simple tests help find conditions early so we can prevent serious health issues later."
  },
  {
    question: "What vaccinations do you provide?",
    answer:
      "We provide all recommended vaccines for babies, children, teens and adults. This includes routine childhood vaccines, travel vaccines, and special vaccines for high-risk groups. All vaccines are given by our expert pediatrician in a safe, child-friendly environment."
  },
  {
    question: "Do you have special services for teenagers?",
    answer:
      "Yes, our Adolescent Health Services help teens with physical health, mental health, nutrition, and lifestyle advice. We provide private consultations about growth, stress, weight issues, and other teen health concerns."
  },
  {
    question: "What support services are available for children with special needs?",
    answer:
      "We offer physiotherapy for movement problems, speech therapy for communication issues, occupational therapy, and psychological support. Our team helps children with developmental delays, disabilities, or special health needs."
  }
];


  return (
    <div   className="max-w-4xl mx-auto  px-4 py-16 sm:px-6 lg:px-8 opacity-100">
      <div className="text-center mb-16">
        <motion.div 
          ref={headerRef}
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={headerInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/mayurchildcare.png" 
            alt="Mayur Child Care Center" 
            className="h-44 w-auto object-contain"
          />
        </motion.div>

        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          If you're looking for more information about <br className="hidden sm:block" />
          <span className="text-teal-600">Mayur Child Care Center</span>, we'd love to help.
        </motion.h2>
        
        <motion.p 
          ref={descRef}
          className="text-gray-600 max-w-2xl md:text-xl text-lg mx-auto font-bold "
          initial={{ opacity: 0 }}
          animate={descInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          If your question isn't listed here, feel free to contact us directly for any specific inquiries or additional information.
        </motion.p>
      </div>

      <div 
  ref={faqListRef}
  className="divide-y divide-gray-200 mt-10 md:text-xl text-lg text-justify"
 
>
  {faqData.map((item, index) => (
    <FAQItem 
      key={index}
      index={index} 
      question={item.question} 
      answer={item.answer} 
    />
  ))}
</div>

    </div>
  );
};

export default FAQSection;