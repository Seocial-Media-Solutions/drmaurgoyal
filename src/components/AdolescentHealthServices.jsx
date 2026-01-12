'use client';
import { motion } from 'framer-motion';

const AdolescentHealthServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen p-6 overflow-hidden bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          Adolescent Health Services
        </h1>
        <h2 className="text-xl text-indigo-600 mb-6">
          Empowering Teens with Comprehensive Care for a Healthy Future
        </h2>

        <div className="bg-indigo-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            Adolescence is a crucial time of growth and development, and we are committed to providing expert care and guidance for your teenager&apos;s unique health needs. Led by our experienced team of pediatricians, we offer specialized services to support your adolescent&apos;s physical, emotional, and mental well-being.
          </p>
          <p className="text-gray-800 mt-4">
            From routine check-ups to addressing specific health concerns, our Adolescent Health Services are designed to empower young individuals to take charge of their health, now and in the years to come.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Our Adolescent Health Services Include:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Physical and mental health evaluations (to track growth, puberty, and emotional well-being)</li>
            <li>Counseling for stress, anxiety, and behavioral issues</li>
            <li>Nutrition and weight management support</li>
            <li>Sexual and reproductive health education and care</li>
            <li>Vaccination and preventive health check-ups</li>
            <li>Management of chronic conditions (asthma, diabetes, etc.)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Why Choose Mayur Childern Hospital for Your Teen&apos;s Health?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Comprehensive care for both physical and mental health</li>
            <li>✅ Private, confidential consultations with caring pediatricians</li>
            <li>✅ Empowering teenagers with knowledge and support for healthy life choices</li>
            <li>✅ Specialized counseling for adolescent issues</li>
            <li>✅ Convenient appointment scheduling and flexible hours</li>
          </ul>
        </div>

        <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            We provide a safe, supportive environment where adolescents can openly discuss their health concerns and receive expert guidance.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AdolescentHealthServices;
