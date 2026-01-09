'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesShowcase = () => {
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

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  const services = [
    { 
      title: "General Pediatrics OPD", 
      href: "/services/general-pediatrics-opd",
      description: "Comprehensive outpatient care for children of all ages"
    },
    { 
      title: "Pediatric Emergency Services", 
      href: "/services/pediatrics-emergency-services",
      description: "24/7 emergency care specifically designed for children"
    },
    { 
      title: "Support Services", 
      href: "/services/support-services",
      description: "Additional services to support the complete care of your child"
    },
    { 
      title: "Neonatology Services", 
      href: "/services/neonatology-services",
      description: "Specialized care for newborns and premature infants"
    },
    { 
      title: "Pediatric Critical Care", 
      href: "/services/pediatric-critical-care",
      description: "Advanced care for children with serious conditions"
    },
    { 
      title: "Vaccination Programs", 
      href: "/services/vacination-programs",
      description: "Complete immunization services following standard protocols"
    },
    { 
      title: "Adolescent Health Services", 
      href: "/services/adolescent-health-services",
      description: "Specialized care for the unique needs of teenagers"
    }
  ];

  // Remove duplicate entries (Support Services and Neonatology Services appear twice in the original list)
  const uniqueServices = services.filter((service, index, self) => 
    index === self.findIndex((s) => s.title === service.title)
  );

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="uppercase text-gray-700 text-xl font-bold tracking-wider mb-3">
            OUR SERVICES
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized Pediatric Care
          </h1>
          <p className="text-gray-600 max-w-3xl md:text-xl text-lg mx-auto">
            At Mayur Child Care Center, we offer a comprehensive range of pediatric services
            designed to meet the unique needs of your child at every stage of development.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {uniqueServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 md:text-xl text-lg mb-6">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default ServicesShowcase;